import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-10 p-10 rounded-2xl border-2 border-green-400 transition-all duration-500 hover:shadow-[0_0_20px_4px_rgba(34,197,94,0.4)]">
        <div className="flex flex-col gap-6 max-w-xl text-white">
          <h2 className="text-3xl font-bold leading-tight">
            Ace your Interviews with <br />
            <span className="text-green-400">AI-Powered Practice & Feedback</span>
          </h2>
          <p className="text-lg text-white/90">
            Practice real interview questions with instant feedback and smart analysis.
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start your Interview</Link>
          </Button>
        </div>

        <div className="transition-transform duration-700 hover:rotate-[360deg]">
          <Image src="/robot.png" alt="AI Interview Bot" height={400} width={400} />
        </div>
      </section>

      {/* Your Interviews Section */}
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-2xl font-semibold text-white">Your Interviews</h2>
        <div className="interviews-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyInterviews.length > 0 ? (
            dummyInterviews.map((interview) => (
              <InterviewCard key={interview.id} interviewId={interview.id} {...interview} />
            ))
          ) : (
            <p className="text-white/80">You have not taken any interview yet.</p>
          )}
        </div>
      </section>

      {/* Take an Interview Section */}
      <section className="flex flex-col gap-6 mt-8">
        <h2 className="text-2xl font-semibold text-white">Take an Interview</h2>
        <div className="interviews-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} interviewId={interview.id} {...interview} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
