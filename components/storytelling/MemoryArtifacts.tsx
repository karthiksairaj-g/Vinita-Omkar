"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import VoiceWave from "./VoiceWave";

const artifactCardClass = `
  group
  rounded-[32px]
  border
  border-white/10
  bg-white/[0.03]
  backdrop-blur-sm
  shadow-[0_0_80px_rgba(255,215,180,0.08)]
  transition-all
  duration-700
  hover:border-rosegold/30
  hover:shadow-[0_0_120px_rgba(255,215,180,0.18)]
`;

export default function MemoryArtifacts() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  /**
   * Phase 2.8 Scroll Motion
   *
   * Photo  -> strongest movement
   * Quote  -> subtle rotation
   * Date   -> gentle rise
   * Voice  -> delayed reveal
   */

  const photoY = useTransform(
    scrollYProgress,
    [0, 1],
    [24, -24]
  );

  const quoteRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-0.3, 0.8]
  );

  const dateY = useTransform(
    scrollYProgress,
    [0, 1],
    [10, -10]
  );

  const voiceY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [24, 0]
  );

  const voiceOpacity = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, 1]
  );

  return (
    <div
      ref={containerRef}
      className="
        chapter-media
        mt-24
        grid
        gap-6
        md:grid-cols-2
      "
    >
      {/* Photo Memory Artifact */}

      <motion.div
        style={{ y: photoY }}
        className={`
          ${artifactCardClass}
          relative
          overflow-hidden
          p-8
          min-h-[340px]
          hover:-translate-y-3
          hover:scale-[1.025]
        `}
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-rosegold/5
            to-transparent
            opacity-0
            transition-opacity
            duration-700
            group-hover:opacity-100
          "
        />

        <div className="relative flex h-full flex-col">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-rosegold
            "
          >
            Memory Frame
          </p>

          <div
            className="
              mt-6
              flex-1
              rounded-[24px]
              border
              border-dashed
              border-white/10
              flex
              items-center
              justify-center
              text-sm
              uppercase
              tracking-[0.2em]
              text-neutral-500
              transition-all
              duration-700
              group-hover:-translate-y-2
              group-hover:scale-[1.02]
            "
          >
            Future Photograph
          </div>

          <p
            className="
              mt-6
              text-2xl
              font-serif
              text-ivory
            "
          >
            Vinita & Omkar
          </p>
        </div>
      </motion.div>

      {/* Quote Artifact */}

      <motion.div
        style={{
          rotate: quoteRotate,
        }}
        className={`
          ${artifactCardClass}
          min-h-[340px]
          p-10
          flex
          items-center
          hover:-translate-y-1
          hover:rotate-[0.5deg]
        `}
      >
        <div>
          <p
            className="
              mb-8
              text-xs
              uppercase
              tracking-[0.35em]
              text-rosegold
            "
          >
            Memory Quote
          </p>

          <div
            className="
              text-7xl
              leading-none
              text-rosegold/20
              transition-all
              duration-700
              group-hover:scale-110
              group-hover:text-rosegold/30
            "
          >
            “
          </div>

          <blockquote
            className="
              text-3xl
              md:text-4xl
              font-serif
              leading-relaxed
              text-ivory
            "
          >
            Every love story is beautiful,
            <br />
            but this one is our favorite.
          </blockquote>

          <p
            className="
              mt-8
              text-xs
              uppercase
              tracking-[0.2em]
              text-neutral-400
            "
          >
            Future Memory
          </p>
        </div>
      </motion.div>

      {/* Date Artifact */}

      <motion.div
        style={{
          y: dateY,
        }}
        className={`
          ${artifactCardClass}
          min-h-[280px]
          p-10
          hover:-translate-y-1
        `}
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-rosegold
          "
        >
          Wedding Day
        </p>

        <div
          className="
            relative
            mt-6
            h-px
            overflow-hidden
            bg-white/10
          "
        >
          <div
            className="
              artifact-shimmer
              absolute
              inset-y-0
              w-24
              bg-gradient-to-r
              from-transparent
              via-rosegold/70
              to-transparent
            "
          />
        </div>

        <div className="mt-10">
          <h3
            className="
              text-4xl
              md:text-5xl
              font-serif
              text-ivory
            "
          >
            15 March 2026
          </h3>

          <p
            className="
              mt-8
              max-w-sm
              leading-8
              text-neutral-300
            "
          >
            A memory waiting to become timeless.
          </p>
        </div>
      </motion.div>

      {/* Voice Note Artifact */}

      <motion.div
        style={{
          y: voiceY,
          opacity: voiceOpacity,
        }}
        className={`
          ${artifactCardClass}
          min-h-[280px]
          p-10
        `}
      >
        <p
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-rosegold
          "
        >
          Voice Note
        </p>

        <div className="mt-10 flex items-center gap-5">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-lg
              text-ivory
              transition-all
              duration-500
              animate-pulse
              group-hover:scale-110
              group-hover:border-rosegold/30
            "
          >
            ▶
          </div>

          <div>
            <p
              className="
                text-lg
                font-medium
                text-ivory
              "
            >
              00:00
            </p>

            <p
              className="
                mt-1
                text-neutral-400
              "
            >
              A message from the future.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <VoiceWave />
        </div>

        <div
          className="
            mt-10
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
          "
        />
      </motion.div>
    </div>
  );
}