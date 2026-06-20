"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const labs = [
  { title: "Carousel Animations", videoLink: "/labs/Carousel.mp4" },
  { title: "Wallet Animations", videoLink: "/labs/wallet.mp4" },
  { title: "Scale Animations", videoLink: "/labs/scale.mp4" },
  { title: "Poke Card Animations", videoLink: "/labs/PokemonCard.mp4" },
  { title: "Mask Hover Animations", videoLink: "/labs/MaskHover.mp4" },
  { title: "Card Stagger Animations", videoLink: "/labs/CardStagger.mp4" },
  { title: "Socials Icons Animations", videoLink: "/labs/Social.mp4" },
  { title: "Success Badge Animations", videoLink: "/labs/SuccessButton.mp4" },
  { title: "Profile Card Animations", videoLink: "/labs/PC.mp4" },
  { title: "Pricing Section Animations", videoLink: "/labs/PriceCard.mp4" },
];

export default function Labs() {
  return (
    <motion.section className="flex flex-col py-7 pb-16">
      <motion.div
        className="w-full border-b border-dashed mb-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <motion.h2 className="text-xl md:text-3xl font-serif tracking-wide mb-6 px-8 md:px-10">
        Labs
      </motion.h2>
      <motion.div
        className="w-full border-b border-dashed mb-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:px-10 px-5">
        {labs.map((lab, index) => (
          <LabCard
            key={lab.videoLink}
            title={lab.title}
            videoLink={lab.videoLink}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
}

function LabCard({
  title,
  videoLink,
  index,
}: {
  title: string;
  videoLink: string;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load and play only once the card enters the viewport
            if (video.readyState === 0) {
              video.load();
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-2 py-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.4), ease: "easeOut" }}
    >
      <h3 className="text-xs md:text-sm font-medium font-inter text-muted-foreground pb-3 ml-1">
        {title}
      </h3>
      <div
        ref={containerRef}
        className="relative w-full aspect-video overflow-hidden rounded-2xl bg-muted/30"
      >
        {/* Skeleton shimmer shown until video fires canplay */}
        {!loaded && (
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-muted/20 via-muted/40 to-muted/20 animate-pulse" />
        )}
        <video
          ref={videoRef}
          src={videoLink}
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setLoaded(true)}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none md:pointer-events-auto"
        />
      </div>
    </motion.div>
  );
}