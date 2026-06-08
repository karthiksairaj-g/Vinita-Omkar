"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

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
      {/* Ambient Glow */}
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

      <div className="relative z-10 text-center">
        {/* Section Label */}

        <motion.p
          initial={{
            opacity: 0,
            y: MOTION.distance.subtle,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.6,
          }}
          transition={{
            duration: MOTION.duration.content,
            ease: MOTION.ease,
          }}
          className="
            uppercase
            tracking-[0.35em]
            text-rosegold
            text-xs
            mb-6
          "
        >
          The Story Continues
        </motion.p>

        {/* Chapter Title */}

        <motion.h2
          initial={{
            opacity: 0,
            y: MOTION.distance.normal,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.6,
          }}
          transition={{
            delay: 0.15,
            duration: MOTION.duration.cinematic,
            ease: MOTION.ease,
          }}
          className="
            text-5xl
            md:text-7xl
            font-serif
            text-champagne
          "
        >
          {title}
        </motion.h2>
      </div>
    </section>
  );
}