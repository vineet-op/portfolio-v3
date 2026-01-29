'use client';

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Github, GithubIcon, Link, X } from "lucide-react";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);

    const projects: ProjectCardProps[] = [
        {
            title: "Prep Suite",
            description: "Prep Suite is an AI-powered mock interview platform designed to help users practice, improve, and ace technical interviews — all in one place.",
            imageLink: "/ps.png",
            githubLink: "https://github.com/vineet-op/interview-suite",
            deployLink: "https://interview-suite.vercel.app/",
        },
        {
            title: "Screenshot AI",
            description: "Screenshot AI is an intelligent screenshot manager powered by AI that helps you automatically organize, categorize, and analyze your screenshots.",
            imageLink: "/ss.png",
            githubLink: "https://github.com/vineet-op/screenshot-ai",
            deployLink: "https://screenshot-ai-iota.vercel.app/",
        },
        {
            title: "TrueFeedback",
            description: "TrueFeedback is a platform where users can provide anonymous feedback to individuals or organizations without revealing their identity.",
            imageLink: "/tr.png",
            githubLink: "https://github.com/vineet-op/Truefeedback",
            deployLink: "https://truefeedback.vercel.app/",
        },
        {
            title: "Matiks",
            description: "Redesign Matiks website where users can solve mental math puzzles and rank on leaderboard.",
            imageLink: "/mt.png",
            githubLink: "https://github.com/vineet-op/Matiks",
            deployLink: "https://matiks.vercel.app/",
        },
    ];

    return (
        <>
            <section className="flex flex-col py-7 pb-16">
                <div className="w-full border-b border-dashed mb-6" />
                <h2 className="text-xl md:text-3xl font-serif tracking-wide mb-6 px-5 md:px-10">
                    Proof of Work
                </h2>
                <div className="w-full border-b border-dashed mb-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:px-10 px-5">

                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </section>

            {/* Overlay Modal */}
            <AnimatePresence mode="wait">
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-primary/80 backdrop-blur-xs z-50 flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`project-${selectedProject.title}`}
                            className=" bg-primary border-2 border-border rounded-2xl max-w-2xl w-full  overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="bg-primary text-white rounded-full p-2"
                                >
                                    <X size={18} className="text-white" />
                                </button>
                            </div>

                            <Image
                                src={selectedProject.imageLink}
                                alt={selectedProject.title}
                                width={800}
                                height={800}
                                className="w-full px-5 rounded-2xl object-cover"
                            />

                            <div className="p-6 space-y-4">
                                <h3 className="text-2xl font-serif tracking-wide">{selectedProject.title}</h3>
                                <p className=" text-zinc-300 font-inter">{selectedProject.description}</p>

                                <div className="flex gap-4 mt-4">
                                    <a
                                        href={selectedProject.githubLink}
                                        target="_blank"
                                        className="font-inter flex items-center gap-1"
                                    >
                                        <GithubIcon size={18} />
                                        GitHub
                                    </a>
                                    <a
                                        href={selectedProject.deployLink}
                                        target="_blank"
                                        className="font-inter flex items-center gap-1"
                                    >
                                        <Link size={18} />
                                        Live
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

interface ProjectCardProps {
    title: string;
    description: string;
    imageLink: string;
    githubLink: string;
    deployLink: string;
    onClick?: () => void;
}

export function ProjectCard({ title, imageLink, onClick }: ProjectCardProps) {
    return (
        <div className="hover:scale-105 transition-transform w-full">
            <motion.div
                layoutId={`project-${title}`}
                onClick={onClick}
                initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.3 }}
                className="w-full bg-transparent h-64 sm:h-80 lg:h-96 rounded-2xl cursor-pointer overflow-hidden"
            >
                <Image
                    src={imageLink}
                    alt={title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full rounded-2xl"
                />
            </motion.div>
        </div>

    );
}
