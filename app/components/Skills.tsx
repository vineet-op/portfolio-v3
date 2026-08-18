"use client";

import { motion, Variants } from "motion/react";
import { useState } from "react";
import {
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siShadcnui,
  siFramer,
  siNodedotjs,
  siExpress,
  siMongodb,
  siGithub,
  siGit,
  siSanity,
  siFigma,
  siVercel,
  siCursor,
  siClaude,
  siLangchain,
  siLanggraph,
  siN8n,
  siAnthropic,
  siOpenaigym,
} from "simple-icons";

interface Skill {
  name: string;
  icon: { path: string; hex: string };
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Tailwind", icon: siTailwindcss },
      { name: "Shadcn", icon: siShadcnui },
      { name: "Framer Motion", icon: siFramer },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express.js", icon: siExpress },
      { name: "MongoDB", icon: siMongodb },
      { name: "Sanity", icon: siSanity },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "GitHub", icon: siGithub },
      { name: "Git", icon: siGit },
      { name: "Figma", icon: siFigma },
      { name: "Vercel", icon: siVercel },
      { name: "Cursor", icon: siCursor },
      { name: "Claude", icon: siClaude },
    ],
  },
  {
    title: "AI",
    skills: [
      { name: "RAG", icon: siOpenaigym },
      { name: "LLM API", icon: siAnthropic },
      { name: "LangChain", icon: siLangchain },
      { name: "LangGraph", icon: siLanggraph },
      { name: "n8n", icon: siN8n },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function SkillIcon({
  icon,
  hovered,
}: {
  icon: { path: string; hex: string };
  hovered: boolean;
}) {
  return (
    <motion.svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3.5 h-3.5 shrink-0"
      animate={{
        fill: hovered ? `#${icon.hex}` : "currentColor",
        opacity: hovered ? 1 : 0.5,
      }}
      transition={{ duration: 0.25 }}
    >
      <path d={icon.path} />
    </motion.svg>
  );
}

function SkillPill({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={pillVariants as Variants}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group"
    >
      <span
        className="
          inline-flex items-center gap-2
          px-3 py-1.5 md:px-3.5 md:py-2
          rounded-2xl border border-dashed border-border
          bg-transparent
          font-inter text-xs md:text-sm tracking-tighter
          text-muted-foreground
          cursor-default select-none
          transition-colors duration-300
          group-hover:text-foreground group-hover:border-foreground/20
        "
      >
        <SkillIcon icon={skill.icon} hovered={hovered} />
        {skill.name}
      </span>
    </motion.div>
  );
}

function SkillCategoryBlock({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col gap-3"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1, ease: "easeOut" }}
    >
      <h3 className="text-xs font-inter tracking-widest uppercase text-muted-foreground/60 px-0.5">
        {category.title}
      </h3>

      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {category.skills.map((skill) => (
          <SkillPill key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="flex flex-col py-7">
      <motion.div
        className="w-full border-b border-dashed mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.h2
        className="text-xl md:text-3xl font-serif tracking-wide mb-6 px-5 md:px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="w-full border-b border-dashed mb-8"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      />

      <div className="px-5 md:px-10 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
          {skillCategories.map((category, index) => (
            <SkillCategoryBlock
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
