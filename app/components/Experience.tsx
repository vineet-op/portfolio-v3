'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
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
                Experience
            </motion.h2>
            <motion.div
                className="w-full border-b border-dashed mb-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
            <div className="px-5 md:px-10 lg:px-10">
                <ExperienceCard
                    imageLink="/createxp.jpg"
                    companyName="CreateXp Labs"
                    position="Full-Stack Engineer"
                    startDate="Augest 2024"
                    endDate="Present"
                    description="
        • Developed and maintained web applications using React, Node.js, and MongoDB.
        • Implemented responsive design and user-friendly interfaces.
        • Collaborated with cross-functional teams to deliver high-quality software solutions.
        • Optimized application performance and scalability."
                    index={0}
                />
                <ExperienceCard
                    imageLink="/createxp.jpg"
                    companyName="CreateXp Labs"
                    position="Full-Stack Engineer"
                    startDate="Augest 2024"
                    endDate="Present"
                    description="
        • Developed and maintained web applications using React, Node.js, and MongoDB.
        • Implemented responsive design and user-friendly interfaces.
        • Collaborated with cross-functional teams to deliver high-quality software solutions.
        • Optimized application performance and scalability."
                    index={1}
                />
            </div>
        </section>
    );
}

interface ExperienceCardProps {
    imageLink: string;
    companyName: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    index: number;
}


export function ExperienceCard({ imageLink, companyName, position, startDate, endDate, description, index }: ExperienceCardProps) {
    // Split description by bullet points and filter out empty strings
    const points = description
        .split('•')
        .map(point => point.trim())
        .filter(point => point.length > 0);

    return (
        <motion.div
            className="flex flex-col mt-5 rounded-2xl border-border border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: 0.5 + (index * 0.15),
                ease: "easeOut"
            }}
        >
            <Accordion className="p-2 md:p-4" type="single" collapsible defaultValue="item-1">
                <AccordionItem value="experience">
                    <AccordionTrigger className="p-2  items-start md:items-center hover:no-underline">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2 md:gap-5">
                            <div className="flex flex-row items-center gap-3 md:gap-5">
                                <Image src={imageLink} alt={companyName} width={100} height={100} className="rounded-full size-10 md:size-12 shrink-0" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-base md:text-lg lg:text-xl font-serif tracking-wider text-zinc-100">{companyName}</span>
                                    <p className="text-xs md:text-sm font-inter tracking-tighter text-zinc-300">{position}</p>
                                </div>
                            </div>
                            <p className="text-xs md:text-sm font-inter tracking-tighter text-zinc-300 whitespace-nowrap mt-1 ml-13 md:ml-0">{startDate} - {endDate}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc list-inside space-y-2 font-inter mt-3 md:mt-5 pl-2 md:pl-4 tracking-tighter text-xs md:text-sm text-zinc-300">
                            {points.map((point, index) => (
                                <li key={index} className="leading-relaxed">{point}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </motion.div>
    );
}