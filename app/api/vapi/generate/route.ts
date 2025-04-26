import { getRandomInterviewCover } from '@/lib/utils';
import { NextResponse } from "next/server";
import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from '@/firebase/admin';

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: `Подготовь вопросы для собеседования на работу.
        Должность: ${role}.
        Уровень опыта: ${level}.
        Технологический стек, используемый на работе: ${techstack}.
        Фокус между поведенческими и техническими вопросами должен смещаться в сторону: ${type}.
        Требуемое количество вопросов: ${amount}.
        Пожалуйста, верни только вопросы, без какого-либо дополнительного текста.
        Вопросы будут озвучиваться голосовым помощником, поэтому не используй "/" или "*" или любые другие специальные символы, которые могут нарушить работу голосового помощника.
        Верни вопросы в формате:
        ["Вопрос 1", "Вопрос 2", "Вопрос 3"]
        
        Спасибо! <3
        `,
    })

    const interview = {
        role,type, level,
        techstack: techstack.split(','), 
        questions: JSON.parse(questions),
        userId: userid,
        finalized: true,
        coverImage: getRandomInterviewCover(),
        createdAt: new Date().toISOString()
    }

    await db.collection("interviews").add(interview)

    return NextResponse.json({success: true}, {status: 200})
  } catch (error) {
    console.error(error);

    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { success: true, data: "Thank you!" },
    { status: 200 }
  );
}
