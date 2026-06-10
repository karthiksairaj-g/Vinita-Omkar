"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MOTION } from "@/lib/motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          transition={{
            duration: MOTION.duration.content,
            ease: MOTION.ease,
          }}
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          className="
            fixed
            bottom-8
            right-8
            z-[999]
            w-14
            h-14
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-md
            text-rosegold
            shadow-[0_0_30px_rgba(255,215,180,0.15)]
            flex
            items-center
            justify-center
          "
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}