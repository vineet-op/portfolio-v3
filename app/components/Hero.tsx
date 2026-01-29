'use client';
import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedText } from "../utils/AnimatedText";



export default function Hero() {

  return (
    <section className="flex flex-col pb-10 border-b border-dashed">
      <div className="flex flex-col lg:flex-row gap-5 p-10">

        {/* //Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="flex justify-start items-center">
          <Image src="/pfp.jpg" alt="Hero-Image" width={100} height={100} className="size-20 md:size-40 object-cover rounded-full" />
        </motion.div>

        {/* //Name and Description */}
        <div className="flex flex-col justify-center gap-5">
          <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="font-serif text-3xl">
              <AnimatedText text="Hello there👋" />
            </h1>
            <p className="font-serif text-2xl md:text-4xl">
              <AnimatedText text="I'm Vineet Design Engineer" />
            </p>
          </div>
          {/* About me */}
          <div className="flex flex-col font-inter justify-center items-start text-zinc-300 max-w-2xl">
            <AnimatedText
              text="22 y/o dev based in India 💓 I refactor UIs, build landing pages, and sweating the small details so the product doesn't have to." delay={0.2}
            />
          </div>
        </div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-center items-center"
      >
        <Image src={"./pacman.svg"} alt="Pacman" width={2000} height={1000} className="lg:max-w-6xl max-w-lg h-auto object-fill mx-auto px-25" />
      </motion.div>
    </section>
  );
}
