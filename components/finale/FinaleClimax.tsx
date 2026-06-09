"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export default function FinaleClimax() {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-8
        py-32
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          text-center
        "
      >
        <motion.h2
          initial={{
            opacity: 0,
            y: MOTION.distance.large,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.35,
          }}
          transition={{
            duration: MOTION.duration.reveal,
            ease: MOTION.ease,
          }}
          className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-light
            tracking-tight
            text-white
            leading-[1.05]
          "
        >
          Forever Starts Now
        </motion.h2>

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
            amount: 0.35,
          }}
          transition={{
            duration: MOTION.duration.reveal,
            delay: 0.25,
            ease: MOTION.ease,
          }}
          className="
            mt-20
            space-y-8
            max-w-3xl
            mx-auto
            text-neutral-300
            text-xl
            md:text-2xl
            font-light
            leading-relaxed
          "
        >
          <p>
            Every memory shared.
          </p>

          <p>
            Every laugh remembered.
          </p>

          <p>
            Every step taken together.
          </p>

          <p className="pt-6 text-white">
            Has led to this beautiful beginning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}