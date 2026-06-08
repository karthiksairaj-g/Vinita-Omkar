"use client";

import GalleryCard from "./GalleryCard";
import { galleryItems } from "./GalleryData";
import { motion } from "framer-motion";
import { MOTION } from "@/lib/motion";

export default function GalleryGrid() {
  return (
    <section
      className="
        relative
        py-40
        px-6
        max-w-7xl
        mx-auto
      "
    >
      <div className="text-center mb-32">
        <p
          className="
            uppercase
            tracking-[0.4em]
            text-white/40
            text-xs
          "
        >
          Memories
        </p>

        <h2
          className="
            text-5xl
            md:text-7xl
            mt-8
            text-white
          "
        >
          The Moments That
          <br />
          Brought Us Here
        </h2>

        <p
          className="
            mt-8
            max-w-2xl
            mx-auto
            text-white/60
            leading-relaxed
          "
        >
          Every photograph holds a story.
          Every memory carries a feeling.
          Together they tell the journey that
          led to this beautiful day.
        </p>
      </div>

      <div className="space-y-24">
        {galleryItems.map((item, index) => {
          const large = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`
                grid
                lg:grid-cols-12
                gap-10
                items-center
              `}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="lg:col-span-7">
                    <GalleryCard
                      item={item}
                      large
                    />
                  </div>

                  <div className="lg:col-span-5">
                    <motion.div
  initial={{
    opacity: 0,
    y: MOTION.distance.normal,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}
  transition={{
    delay: 0.15,
    duration: MOTION.duration.section,
    ease: MOTION.ease,
  }}
  className="max-w-md mx-auto"
>
                      <p
                        className="
                          text-white/50
                          uppercase
                          tracking-[0.35em]
                          text-xs
                        "
                      >
                        Memory #{String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-5 text-4xl text-white">
                        {item.title}
                      </h3>

                      <p className="mt-6 text-white/70 leading-relaxed">
                        {item.quote}
                      </p>
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:col-span-5 order-2 lg:order-1">
                   <motion.div
  initial={{
    opacity: 0,
    y: MOTION.distance.normal,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: false,
    amount: 0.3,
  }}
  transition={{
    delay: 0.15,
    duration: MOTION.duration.section,
    ease: MOTION.ease,
  }}
  className="max-w-md mx-auto"
>
                      <p
                        className="
                          text-white/50
                          uppercase
                          tracking-[0.35em]
                          text-xs
                        "
                      >
                        Memory #{String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-5 text-4xl text-white">
                        {item.title}
                      </h3>

                      <p className="mt-6 text-white/70 leading-relaxed">
                        {item.quote}
                      </p>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <GalleryCard
                      item={item}
                      large
                    />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}