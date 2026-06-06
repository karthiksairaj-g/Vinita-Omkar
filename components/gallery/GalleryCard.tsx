"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem } from "./GalleryData";

interface Props {
  item: GalleryItem;
  large?: boolean;
}

export default function GalleryCard({
  item,
  large = false,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -8 }}
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
          backdrop-blur-sm
        "
      >
        <div
          className={`
            relative overflow-hidden
            ${large ? "aspect-[4/5]" : "aspect-[4/4]"}
          `}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.8 }}
            className="h-full w-full"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        <div className="p-8 md:p-10">
          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[11px]
              text-white/50
            "
          >
            {item.location}
          </p>

          <h3
            className={`
              mt-4 text-white
              ${
                large
                  ? "text-3xl md:text-4xl"
                  : "text-2xl md:text-3xl"
              }
            `}
          >
            {item.title}
          </h3>

          <p
            className="
              mt-5
              text-white/70
              italic
              leading-relaxed
            "
          >
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
            shadow-[0_0_100px_rgba(212,175,55,0.12)]
          "
        />
      </div>
    </motion.article>
  );
}