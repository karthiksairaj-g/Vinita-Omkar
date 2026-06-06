"use client";

import { motion } from "framer-motion";

type TimelineEventProps = {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
  align: "left" | "right";
};

export default function TimelineEvent({
  year,
  title,
  description,
  isLast = false,
  align,
}: TimelineEventProps) {
  const initialX = align === "left" ? -40 : 40;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialX,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.35,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        grid
        md:grid-cols-2
        gap-12
        items-center
        py-24
      "
    >
      {/* Content Side */}

      <div
        className={`
          ${align === "left" ? "md:text-right" : "md:order-2"}
        `}
      >
        <p
          className="
            uppercase
            tracking-[0.35em]
            text-sm
            text-rose-300
            mb-4
          "
        >
          {year}
        </p>

        <h3
          className="
            text-4xl
            md:text-5xl
            font-light
            mb-6
          "
        >
          {title}
        </h3>

        <p
          className="
            text-stone-400
            leading-relaxed
            max-w-lg
            mx-auto
          "
        >
          {description}
        </p>
      </div>

      {/* Empty Column */}

      <div />

      {/* Timeline Marker */}

      <motion.div
        initial={{
          scale: 0.6,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.35,
        }}
        transition={{
          duration: 0.6,
          delay: 0.15,
        }}
        className="
          hidden
          md:block
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        {isLast ? (
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                bg-rose-300/30
                blur-2xl
                scale-[2.5]
                rounded-full
              "
            />

            <div
              className="
                relative
                h-6
                w-6
                rounded-full
                bg-rose-200
              "
            />
          </div>
        ) : (
          <div
            className="
              h-5
              w-5
              rounded-full
              bg-rose-300
            "
          />
        )}
      </motion.div>
    </motion.div>
  );
}