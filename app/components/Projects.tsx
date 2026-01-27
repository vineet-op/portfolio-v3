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
            imageLink: "/prep-suite.png",
            githubLink: "https://github.com/vineet-op/interview-suite",
            deployLink: "https://interview-suite.vercel.app/",
        },
    ];

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 border-b border-dashed pb-16">
                <h2 className="md:col-span-2 text-3xl font-serif tracking-wide">
                    Projects
                </h2>

                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
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
                                className="w-full px-5 rounded-2xl object-fill"
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
        <div className="hover:scale-105 transition-transform">
            <motion.div
                layoutId={`project-${title}`}
                onClick={onClick}
                initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.3 }}
                className="w-full bg-yellow-200 h-full lg:h-96 rounded-2xl cursor-pointer overflow-hidden"
            >
                <Image
                    src={imageLink}
                    alt={title}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                />
            </motion.div>
        </div>

    );
}
