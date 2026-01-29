import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Contact() {
    return (
        <section className="flex flex-col py-6">
            <div className="w-full border-b border-dashed mb-6" />
            <h2 className="text-xl md:text-3xl font-serif tracking-wide mb-6 px-6 md:px-10">Find Me Here</h2>
            <div className="w-full border-b border-dashed mb-4" />
            <div className="px-5 md:px-10 lg:px-10">
                <div className="flex flex-row justify-start lg:gap-3 gap-1.5 md:gap-4 py-2 md:py-4">
                    <ContactCard
                        icon={<TwitterIcon size={24} />}
                        href="https://x.com/Vineet2OP"
                        label="Twitter"
                        hoverColor="hover:bg-[#1DA1F2]" />
                    <ContactCard
                        icon={<LinkedinIcon size={24} />}
                        href="https://www.linkedin.com/in/vineet-op/"
                        label="LinkedIn"
                        hoverColor="hover:bg-[#0A66C2]" />
                    <ContactCard
                        icon={<Mail size={24} />}
                        href="mailto:vineet290403@gmail.com"
                        label="Email"
                        hoverColor="hover:bg-[#EA4335]" />
                    <ContactCard icon={<GithubIcon size={24} />}
                        href="https://github.com/vineet-op"
                        label="GitHub"
                        hoverColor="hover:bg-[#333333]" />
                </div>
            </div>
        </section>
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
                className={`flex cursor-pointer w-fit bg-transparent p-2 md:p-4 rounded-2xl flex-row items-center hover:scale-105 active:scale-95 transition-all duration-300 hover:text-white hover:border-transparent ${hoverColor}`}
            >
                {icon}
                <p className="text-xs md:text-sm font-inter tracking-wide">{label}</p>
            </Button>
        </a>
    );
}