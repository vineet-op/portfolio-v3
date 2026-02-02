'use client';
import { motion } from "motion/react";
export default function Labs() {
    return (
        <motion.section className="flex flex-col py-7 pb-16">
            <motion.div className="w-full border-b border-dashed mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <motion.h2 className="text-xl md:text-3xl font-serif tracking-wide mb-6 px-8 md:px-10">Labs</motion.h2>
            <motion.div className="w-full border-b border-dashed mb-4"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-10 px-5">
                <LabCard title="Card Stagger Animations"
                    videoLink="/labs/CardStagger.mp4"
                    index={0} />
                <LabCard title="Scale Animations"
                    videoLink="/labs/scale.mp4"
                    index={1} />
                <LabCard title="Poke Card Animations"
                    videoLink="/labs/PokemonCard.mp4"
                    index={2} />
                <LabCard title="Profile Card Animations"
                    videoLink="/labs/PC.mp4"
                    index={3} />
                <LabCard title="Carousel Animations"
                    videoLink="/labs/Carousel.mp4"
                    index={4} />
                <LabCard title="Socials Icons Animations"
                    videoLink="/labs/Social.mp4"
                    index={5} />
                <LabCard title="Success Badge Animations"
                    videoLink="/labs/SuccessButton.mp4"
                    index={6} />
                <LabCard title="Mask Hover Animations"
                    videoLink="/labs/MaskHover.mp4"
                    index={7} />
                <LabCard title="Pricing Section Animations"
                    videoLink="/labs/PriceCard.mp4"
                    index={7} />
            </div>
        </motion.section>
    );
}



function LabCard({ title, description, videoLink, index }: { title: string; description?: string; videoLink: string; index: number }) {
    return (
        <motion.div className="flex flex-col gap-2 py-4"
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 * index }}
        >
            <h3 className="text-xs md:text-sm font-medium font-inter text-muted-foreground pb-3 ml-1">{title}</h3>
            <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
                <video src={videoLink} autoPlay muted loop playsInline controls preload="metadata" className="      absolute inset-0 w-full h-full object-cover
      pointer-events-none md:pointer-events-auto" />
            </div>
        </motion.div>
    );
}