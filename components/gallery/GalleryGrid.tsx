"use client";

import GalleryCard from "./GalleryCard";
import { galleryItems } from "./GalleryData";

export default function GalleryGrid() {
  return (
    <section
      className="
        relative
        py-32
        px-6
        max-w-7xl
        mx-auto
      "
    >
      <div className="text-center mb-24">
        <p
          className="
            uppercase
            tracking-[0.35em]
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
            mt-6
            text-white
          "
        >
          A Story In Moments
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {galleryItems.map((item) => (
          <GalleryCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}