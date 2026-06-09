"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export default function FinalePromise() {
  return (
    <section
      className="
        relative
        min-h-[80vh]
        flex
        items-center
        justify-center
        px-8
        overflow-hidden
      "
    >
      {/* Ambient Atmosphere */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-white/[0.02]
          to-transparent
          pointer-events-none
        "
      />

      <div
        className="
          relative
          max-w-4xl
          mx-auto
          text-center
        "
      >
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
            amount: 0.4,
          }}
          transition={{
            duration: MOTION.duration.cinematic,
            ease: MOTION.ease,
          }}
          className="
            text-4xl
            md:text-6xl
            font-light
            tracking-tight
            text-white
            leading-tight
          "
        >
          Every chapter led here.
        </motion.h2>

        <motion.div
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
            amount: 0.4,
          }}
          transition={{
            duration: MOTION.duration.reveal,
            delay: 0.2,
            ease: MOTION.ease,
          }}
          className="
            mt-12
            space-y-4
            text-neutral-400
            text-lg
            md:text-xl
            font-light
            tracking-[0.15em]
          "
        >
          <p>Two hearts.</p>
          <p>One story.</p>
          <p>A lifetime ahead.</p>
        </motion.div>
      </div>
    </section>
  );
}