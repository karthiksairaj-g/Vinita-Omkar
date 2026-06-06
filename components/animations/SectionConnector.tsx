"use client";

import { motion } from "framer-motion";

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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          max-w-4xl
          mx-auto
          text-center
          px-6
        "
      >
        {/* Luxury Divider */}
        <div
          className="
            w-px
            h-20
            mx-auto
            bg-gradient-to-b
            from-transparent
            via-[#d4af37]/50
            to-transparent
            mb-10
          "
        />

        <p
          className="
            uppercase
            tracking-[0.4em]
            text-[10px]
            text-rosegold
            mb-5
          "
        >
          {subtitle}
        </p>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-serif
            text-champagne
            leading-[1.15]
          "
        >
          {title}
        </h2>

        <p
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
        </p>

        <div
          className="
            w-24
            h-px
            mx-auto
            mt-10
            bg-gradient-to-r
            from-transparent
            via-[#d4af37]/60
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}