'use client';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

export default function Experience() {
    return (
        <section className="flex flex-col px-10 py-7 border-b border-dashed">
            <h2 className="text-3xl font-serif tracking-wide mb-12">Experience</h2>
            <ExperienceCard imageLink="/createxp.jpg" companyName="CreateXp Labs" position="Full-Stack Engineer" startDate="Augest 2024" endDate="Present" description="
        • Developed and maintained web applications using React, Node.js, and MongoDB.
        • Implemented responsive design and user-friendly interfaces.
        • Collaborated with cross-functional teams to deliver high-quality software solutions.
        • Optimized application performance and scalability."
            />
            <ExperienceCard imageLink="/createxp.jpg" companyName="CreateXp Labs" position="Full-Stack Engineer" startDate="Augest 2024" endDate="Present" description="
        • Developed and maintained web applications using React, Node.js, and MongoDB.
        • Implemented responsive design and user-friendly interfaces.
        • Collaborated with cross-functional teams to deliver high-quality software solutions.
        • Optimized application performance and scalability."
            />

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
}


export function ExperienceCard({ imageLink, companyName, position, startDate, endDate, description }: ExperienceCardProps) {
    // Split description by bullet points and filter out empty strings
    const points = description
        .split('•')
        .map(point => point.trim())
        .filter(point => point.length > 0);

    return (
        <div className="flex flex-col mt-5 rounded-2xl border-border border">
            <Accordion className="p-4" type="single" collapsible defaultValue="item-1">
                <AccordionItem value="experience">
                    <AccordionTrigger className="p-2 items-center hover:no-underline">
                        <div className="flex flex-row items-center justify-between w-full gap-5">
                            <div className="flex flex-row items-center gap-5">
                                <Image src={imageLink} alt={companyName} width={100} height={100} className="rounded-full size-12" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-xl font-serif tracking-wide text-zinc-100">{companyName}</p>
                                    <p className="text-sm font-inter tracking-tighter text-zinc-300">{position}</p>
                                </div>
                            </div>
                            <p className="text-sm font-inter tracking-tighter text-zinc-300 whitespace-nowrap">{startDate} - {endDate}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ul className="list-disc list-inside space-y-2  font-inter mt-5 pl-4 tracking-tighter text-zinc-300">
                            {points.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}