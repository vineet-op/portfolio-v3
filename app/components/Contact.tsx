'use client';

import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Contact() {
    return (
        <motion.section
            className="flex flex-col py-6"
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="w-full border-b border-dashed mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <h2 className="text-xl md:text-3xl font-serif tracking-wide mb-6 px-6 md:px-10">Find Me Here</h2>
            <motion.div
                className="w-full border-b border-dashed mb-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
            <div className="px-5 flex items-center justify-between gap-5 lg:flex-row flex-col md:px-10 lg:px-10">
                <div className="flex flex-row justify-start lg:gap-3 gap-1.5 md:gap-4 py-2 md:py-4">
                    <ContactCard
                        icon={<TwitterIcon size={24} className="text-muted-foreground" />}
                        href="https://x.com/Vineet2OP"
                        label="Twitter"
                        hoverColor="hover:bg-[#1DA1F2]" />
                    <ContactCard
                        icon={<LinkedinIcon size={24} className="text-muted-foreground" />}
                        href="https://www.linkedin.com/in/vineet-op/"
                        label="LinkedIn"
                        hoverColor="hover:bg-[#0A66C2]" />
                    <ContactCard
                        icon={<Mail size={24} className="text-muted-foreground" />}
                        href="mailto:vineet290403@gmail.com"
                        label="Email"
                        hoverColor="hover:bg-[#EA4335]" />
                    <ContactCard icon={<GithubIcon size={24} className="text-muted-foreground" />}
                        href="https://github.com/vineet-op"
                        label="GitHub"
                        hoverColor="hover:bg-[#333333]" />
                </div>
                <motion.div
                    className="text-xs tracking-tight lg:text-sm font-inter text-neutral-200 selection:bg-green-400 selection:text-gray-900 flex items-center gap-1"
                    initial={{ opacity: 0, x: -60, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <span className="inline-block mr-1 w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_2px_#4ade80]"></span>
                    Designed and Developed by <span className="border-b border-b-green-400 border-dashed">Vineet</span>
                </motion.div>
            </div>
        </motion.section>
    );
}

interface ContactCardProps {
    icon: React.ReactNode;
    href: string;
    label: string;
    hoverColor: string;
}

export function ContactCard({ icon, href, label, hoverColor }: ContactCardProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Button
                variant="outline"
                size="icon-sm"
                className={`flex cursor-pointer w-fit border-dashed bg-transparent p-2 md:p-4 rounded-2xl flex-row items-center hover:scale-105 active:scale-95 transition-all duration-300 hover:text-foreground hover:border-transparent ${hoverColor}`}
            >
                {icon}
                <p className="text-xs md:text-sm font-inter tracking-wide text-muted-foreground">{label}</p>
            </Button>
        </a>
    );
}