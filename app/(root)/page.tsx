import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
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
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>

        <p>Вы еще не прошли ни одного интервью</p>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Возьмите интервью</h2>

        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
