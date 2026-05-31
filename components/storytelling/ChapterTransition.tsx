"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
}

export default function ChapterTransition({
  title,
}: Props) {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
        }}
        className="
          text-6xl
          md:text-8xl
          font-serif
          text-champagne
        "
      >
        {title}
      </motion.h2>
    </div>
  );
}