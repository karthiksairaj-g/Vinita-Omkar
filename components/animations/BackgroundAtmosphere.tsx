"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundAtmosphere() {
  const { scrollYProgress } = useScroll();

  const opacityOne = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6],
    [0.08, 0.12, 0.04]
  );

  const opacityTwo = useTransform(
    scrollYProgress,
    [0.3, 0.7, 1],
    [0, 0.08, 0.14]
  );

  const scaleOne = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.2]
  );

  const scaleTwo = useTransform(
    scrollYProgress,
    [0, 1],
    [1.1, 1.4]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Upper Atmosphere */}
      <motion.div
        style={{
          opacity: opacityOne,
          scale: scaleOne,
        }}
        className="
          absolute
          top-[-20%]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          blur-[180px]
          bg-[#d4af37]
        "
      />

      {/* Lower Atmosphere */}
      <motion.div
        style={{
          opacity: opacityTwo,
          scale: scaleTwo,
        }}
        className="
          absolute
          bottom-[-30%]
          left-1/2
          -translate-x-1/2
          w-[1100px]
          h-[1100px]
          rounded-full
          blur-[220px]
          bg-[#b76e79]
        "
      />
    </div>
  );
}