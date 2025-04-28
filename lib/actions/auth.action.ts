"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;

export async function signUp(params: SignUpParams) {
  const { uid, name, email } = params;

  try {
    const userRecord = await db.collection("users").doc(uid).get();

    if (userRecord.exists) {
      return {
        success: false,
        message: "Пользователь уже существует. Пожалуйста, войдите в систему.",
      };
    }

    await db.collection("users").doc(uid).set({
      name,
      email,
    });

    return {
      success: true,
      message: "Аккаунт создан успешно. Пожалуйста, войдите в систему.",
    };
  } catch (error: any) {
    console.error("Ошибка создания пользователя:", error);

    if (error.code === "auth/email-already-exists") {
      return {
        success: false,
        message: "Этот email уже используется.",
      };
    }

    return {
      success: false,
      message: "Не удалось создать аккаунт. Попробуйте еще раз.",
    };
  }
}

export async function signIn(params: SignInParams) {
  const { email, idToken } = params;

  try {
    const userRecord = auth.getUserByEmail(email);

    if (!userRecord) {
      return {
        success: false,
        message: "Пользователь не существует. Создайте учетную запись.",
      };
    }

    await setSessionCookie(idToken);
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "Не удалось войти в аккаунт. Попробуйте еще раз.",
    };
  }
}

export async function setSessionCookie(idToken: string) {
  const cookieStore = await cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK * 1000,
  });

  cookieStore.set("session", sessionCookie, {
    maxAge: ONE_WEEK,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies();

  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie) return null;

  try {
    const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);

    const userRecord = await db
      .collection("users")
      .doc(decodedClaims.uid)
      .get();

    if (!userRecord) return null;

    return {
      ...userRecord.data(),
      id: userRecord.id,
    } as User;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}

