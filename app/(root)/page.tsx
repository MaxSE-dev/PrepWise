import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import InterviewCard from "@/components/InterviewCard";
import {
  getCurrentUser,
} from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";

const Page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ])


  const hasPastInterViews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0

  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>
            Подготовьтесь к Собеседованию с помощью Практики и Обратной связи на
            основе ИИ
          </h2>
          <p className="text-lg">
            Практикуйте ответы на реальные вопросы для собеседования и получайте
            мгновенную обратную связь
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Начать интервью</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Ваши интервью</h2>

        <div className="interviews-section">
          {hasPastInterViews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>Вы еще не прошли ни одного интервью</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Возьмите интервью</h2>

        <div className="interviews-section">
        {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>Нет новых интервью.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
