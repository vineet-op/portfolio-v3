"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedText } from "../utils/AnimatedText";
import { Suspense } from "react";

import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import type { Activity } from "@/components/contribution-graph";
import { cn } from "@/lib/utils";

const GITHUB_PROFILE_URL = "https://github.com/vineet-op";

export default function Hero({
  contributions,
}: {
  contributions: Promise<Activity[]>;
}) {
  return (
    <section className="flex flex-col pb-10 ">
      <div className="flex flex-col lg:flex-row gap-5 p-10">
        {/* //Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="flex justify-start items-center"
        >
          <Image
            src="/pfp.jpg"
            alt="Hero-Image"
            width={100}
            height={100}
            className="size-20 md:size-40 object-cover rounded-full"
          />
        </motion.div>

        {/* //Name and Description */}
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="font-serif text-3xl">
              <AnimatedText text="Hello there👋" />
            </h1>
            <p className="font-serif text-2xl md:text-3xl">
              <AnimatedText text="I'm Vineet Software Engineer" />
            </p>
          </div>
          {/* About me */}
          <div className="flex flex-col font-inter justify-center items-start text-muted-foreground w-full">
            <AnimatedText
              className="tracking-tighter w-full"
              text="Engineer who closes the gap between design and code and make product look and feel beautiful."
              delay={0.2}
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className={cn(
          "w-full max-w-full min-w-0 px-8",
          // GitHub Default Theme
          '**:data-[level="0"]:fill-[#eff2f5] dark:**:data-[level="0"]:fill-[#151b23]',
          '**:data-[level="1"]:fill-[#b6e3ff] dark:**:data-[level="1"]:fill-[#0c2d6b]',
          '**:data-[level="2"]:fill-[#54aeff] dark:**:data-[level="2"]:fill-[#1158c7]',
          '**:data-[level="3"]:fill-[#0969da] dark:**:data-[level="3"]:fill-[#58a6ff]',
          '**:data-[level="4"]:fill-[#0a3069] dark:**:data-[level="4"]:fill-[#cae8ff]',
        )}
      >
        <Suspense fallback={<GitHubContributionsFallback />}>
          <GitHubContributions
            contributions={contributions}
            githubProfileUrl={GITHUB_PROFILE_URL}
          />
        </Suspense>
      </motion.div>
    </section>
  );
}
