"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
}

export default function ChapterTransition({
  title,
}: Props) {
  return (
    <section
      className="
        relative
        h-[45vh]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[400px]
            w-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-rosegold/10
            blur-[140px]
          "
        />
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.6,
        }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="relative z-10 text-center"
      >
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-rosegold
            text-xs
            mb-6
          "
        >
          The Story Continues
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            font-serif
            text-champagne
          "
        >
          {title}
        </h2>
      </motion.div>
    </section>
  );
}