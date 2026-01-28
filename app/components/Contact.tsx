import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Contact() {
    return (
        <section className="flex flex-col py-6 px-10">
            <h2 className="text-3xl font-serif tracking-wide mb-12">Find Me Here</h2>
            <div className="flex flex-row justify-start gap-4 py-4">
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
                size="icon"
                className={`flex cursor-pointer w-fit bg-transparent p-4 rounded-2xl flex-row items-center hover:scale-105 active:scale-95 transition-all duration-300 hover:text-white hover:border-transparent ${hoverColor}`}
            >
                {icon}
                <p className="text-lg font-inter tracking-wide">{label}</p>
            </Button>
        </a>
    );
}