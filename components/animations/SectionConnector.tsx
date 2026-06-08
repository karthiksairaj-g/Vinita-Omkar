"use client";

import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

type SectionConnectorProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function SectionConnector({
  title,
  subtitle,
  description,
}: SectionConnectorProps) {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Subtle Atmosphere */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_70%)]
          pointer-events-none
        "
      />

      <motion.div
  className="
    relative
    z-10
    max-w-4xl
    mx-auto
    text-center
    px-6
  "
>
  {/* Top Divider */}

  <motion.div
    initial={{
      opacity: 0,
      scaleY: 0,
    }}
    whileInView={{
      opacity: 1,
      scaleY: 1,
    }}
    viewport={{ once: false }}
    transition={{
      duration: MOTION.duration.content,
      ease: MOTION.ease,
    }}
    className="
      w-px
      h-20
      mx-auto
      bg-gradient-to-b
      from-transparent
      via-[#d4af37]/50
      to-transparent
      mb-10
      origin-top
    "
  />

  {/* Subtitle */}

  <motion.p
    initial={{
      opacity: 0,
      y: MOTION.distance.subtle,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: false }}
    transition={{
      delay: 0.15,
      duration: MOTION.duration.content,
      ease: MOTION.ease,
    }}
    className="
      uppercase
      tracking-[0.4em]
      text-[10px]
      text-rosegold
      mb-5
    "
  >
    {subtitle}
  </motion.p>

  {/* Title */}

  <motion.h2
    initial={{
      opacity: 0,
      y: MOTION.distance.normal,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: false }}
    transition={{
      delay: 0.3,
      duration: MOTION.duration.section,
      ease: MOTION.ease,
    }}
    className="
      text-3xl
      md:text-5xl
      font-serif
      text-champagne
      leading-[1.15]
    "
  >
    {title}
  </motion.h2>

  {/* Description */}

  <motion.p
    initial={{
      opacity: 0,
      y: MOTION.distance.normal,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: false }}
    transition={{
      delay: 0.45,
      duration: MOTION.duration.section,
      ease: MOTION.ease,
    }}
    className="
      mt-8
      max-w-2xl
      mx-auto
      text-champagne/70
      text-base
      md:text-lg
      leading-relaxed
      font-light
    "
  >
    {description}
  </motion.p>

  {/* Bottom Divider */}

  <motion.div
    initial={{
      opacity: 0,
      scaleX: 0,
    }}
    whileInView={{
      opacity: 1,
      scaleX: 1,
    }}
    viewport={{ once: false }}
    transition={{
      delay: 0.6,
      duration: MOTION.duration.content,
      ease: MOTION.ease,
    }}
    className="
      w-24
      h-px
      mx-auto
      mt-10
      bg-gradient-to-r
      from-transparent
      via-[#d4af37]/60
      to-transparent
      origin-center
    "
  />
</motion.div>
    </section>
  );
}