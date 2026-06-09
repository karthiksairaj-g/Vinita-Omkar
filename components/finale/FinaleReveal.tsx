"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MOTION } from "@/lib/motion";
import Image from "next/image";

export default function FinaleReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.08]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -40]
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-[120vh]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <motion.div
        style={{
          scale: imageScale,
        }}
        className="
          absolute
          inset-0
        "
      >
        <Image
  src="/photos/img4.jpeg"
  alt="Vinita and Omkar"
  fill
  priority={false}
  className="object-cover"
/>
      </motion.div>

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/40
        "
      />

      {/* Content */}
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY,
        }}
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
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
            text-5xl
            md:text-8xl
            font-light
            text-white
            tracking-tight
          "
        >
          Vinita ❤️ Omkar
        </motion.h2>

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
            amount: 0.4,
          }}
          transition={{
            duration: MOTION.duration.reveal,
            delay: 0.2,
            ease: MOTION.ease,
          }}
          className="
            mt-6
            text-lg
            md:text-2xl
            text-neutral-200
            tracking-[0.25em]
            uppercase
          "
        >
          15 March 2026
        </motion.p>
      </motion.div>
    </section>
  );
}