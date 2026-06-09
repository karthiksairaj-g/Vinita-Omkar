"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export default function FinaleSignature() {
  return (
    <section
      className="
        relative
        min-h-[70vh]
        flex
        items-center
        justify-center
        px-8
        pb-24
      "
    >
      <div
        className="
          max-w-3xl
          mx-auto
          text-center
        "
      >
        <motion.div
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
            duration: MOTION.duration.reveal,
            ease: MOTION.ease,
          }}
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              font-light
              text-white
              tracking-tight
            "
          >
            Vinita ❤️ Omkar
          </h2>

          <p
            className="
              mt-6
              text-neutral-400
              tracking-[0.25em]
              uppercase
              text-sm
              md:text-base
            "
          >
            15 March 2026
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: MOTION.duration.cinematic,
            delay: 0.4,
            ease: MOTION.ease,
          }}
          className="
            mt-20
          "
        >
          <div
            className="
              w-24
              h-px
              bg-white/20
              mx-auto
            "
          />

          <h3
             className="
              text-2xl
              md:text-3xl
              font-light
              text-white
              tracking-tight
              mt-10
            "
          >
            Thank you for being part of our story.
          </h3>
          <div className="h-24 md:h-40" />
        </motion.div>
      </div>
    </section>
  );
}