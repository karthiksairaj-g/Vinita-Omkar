"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { GalleryItem } from "./GalleryData";

interface Props {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: Props) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-lg flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white"
          >
            <X size={28} />
          </button>

          <button
            onClick={onPrev}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={onNext}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={40} />
          </button>

          <motion.div
            className="max-w-6xl w-full"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-8 text-center">
              <p className="uppercase tracking-[0.3em] text-white/50 text-xs">
                {item.location}
              </p>

              <h3 className="text-white text-3xl mt-3">
                {item.title}
              </h3>

              <p className="text-white/70 mt-4 italic">
                {item.quote}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}