"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "./GalleryData";

interface Props {
  item: GalleryItem;
}

export default function GalleryCard({ item }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
        "
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={item.image}
              alt={item.title}
               width={1200}
                height={1500}
                className="
                  h-full
                  w-full
                  object-cover
                "
            />
          </motion.div>
        </div>

        <div className="p-8">
          <p
            className="
              uppercase
              tracking-[0.25em]
              text-xs
              text-white/50
            "
          >
            {item.location}
          </p>

          <h3 className="mt-3 text-2xl text-white">
            {item.title}
          </h3>

          <p className="mt-4 text-white/70 italic">
            {item.quote}
          </p>
        </div>

        <div
          className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-500
            pointer-events-none
            rounded-[32px]
            shadow-[0_0_80px_rgba(212,175,55,0.15)]
          "
        />
      </div>
    </motion.article>
  );
}