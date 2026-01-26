'use client';
import Image from "next/image";
import {motion} from "motion/react"

export default function Hero() {

  return (
    <section className="flex flex-col bg-red-300 pb-10">
        <div className="flex gap-10 p-10">

            {/* //Hero Image */}
            <div className="flex justify-start items-center">        
            <Image src="/pfp.jpg" alt="Hero-Image" width={100} height={100} className="size-40 object-cover rounded-full" />
            </div>

            <div className="flex flex-col justify-center gap-5">
                {/* //Name and Description */}        
                <div className="flex flex-col justify-center items-start gap-2">
                    <h1 className="font-serif text-3xl">Hello there 👋</h1>
                    <p className="font-serif text-4xl">I’m Vineet Design Engineer </p>
                </div>
                {/* About me */}
                    <div className="flex flex-col font-inter justify-center items-start text-zinc-300 max-w-2xl">
                    22 y/o dev based in India 🇮🇳 I refactor UIs, build landing pages, and sweat the small details so the product doesn’t have to.
                </div>
            </div>
        </div>
        <motion.div
        initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.5 }}
        
        >
        <Image src={"./pacman.svg"} alt="Pacman" width={2000} height={1000} className="max-w-4xl h-auto object-fill mx-auto " />
        </motion.div>
    </section>
  );
}