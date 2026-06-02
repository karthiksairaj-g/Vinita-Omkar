"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";
import ParallaxLayer from "./ParallaxLayer";

interface StoryChapterProps {
  title: string;
  subtitle?: string;

  intro?: string;
  memoryLabel?: string;
  memoryCaption?: string;
  outro?: string;
}

export default function StoryChapter({
  title,
  subtitle,
  intro,
  memoryLabel,
  memoryCaption,
  outro,
}: StoryChapterProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;

      if (!section) return;

      const subtitleElement =
        section.querySelector(".chapter-subtitle");

      const titleElement =
        section.querySelector(".chapter-title");

      const introElement =
        section.querySelector(".chapter-intro");

      const memoryElement =
        section.querySelector(".chapter-memory");

      const outroElement =
        section.querySelector(".chapter-outro");

      const mediaElement =
        section.querySelector(".chapter-media");

      if (subtitleElement) {
        gsap.from(subtitleElement, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        });
      }

      if (titleElement) {
        gsap.from(titleElement, {
          opacity: 0,
          y: 80,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          },
        });
      }

      if (introElement) {
        gsap.from(introElement, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introElement,
            start: "top 85%",
          },
        });
      }

      if (memoryElement) {
        gsap.from(memoryElement, {
          opacity: 0,
          y: 80,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: memoryElement,
            start: "top 85%",
          },
        });
      }

      if (outroElement) {
        gsap.from(outroElement, {
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: outroElement,
            start: "top 85%",
          },
        });
      }

      if (mediaElement) {
        gsap.from(mediaElement, {
          opacity: 0,
          scale: 0.9,
          y: 120,
          duration: 1.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: mediaElement,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return ctx;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        py-32
        overflow-hidden
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[700px]
            rounded-full
            bg-rosegold/20
            blur-[160px]
          "
        />
      </div>

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          px-8
        "
      >
        {subtitle && (
          <p
            className="
              chapter-subtitle
              uppercase
              tracking-[0.35em]
              text-rosegold
              text-sm
            "
          >
            {subtitle}
          </p>
        )}

        <h2
          className="
            chapter-title
            mt-6
            text-5xl
            md:text-7xl
            font-serif
            text-ivory
            leading-tight
          "
        >
          {title}
        </h2>

        {intro && (
          <p
            className="
              chapter-intro
              mt-12
              text-xl
              leading-10
              text-neutral-300
              max-w-3xl
            "
          >
            {intro}
          </p>
        )}

        {(memoryLabel || memoryCaption) && (
          <ParallaxLayer speed={0.08}>
            <div
              className="
                chapter-memory
                mt-24
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                px-10
                py-16
                text-center
                shadow-[0_0_80px_rgba(255,215,180,0.08)]
              "
            >
              {memoryLabel && (
                <p
                  className="
                    uppercase
                    tracking-[0.35em]
                    text-rosegold
                    text-xs
                  "
                >
                  {memoryLabel}
                </p>
              )}

              {memoryCaption && (
                <p
                  className="
                    mt-6
                    text-3xl
                    md:text-4xl
                    font-serif
                    text-ivory
                  "
                >
                  {memoryCaption}
                </p>
              )}
            </div>
          </ParallaxLayer>
        )}

        {outro && (
          <p
            className="
              chapter-outro
              mt-24
              text-xl
              leading-10
              text-neutral-300
              max-w-3xl
            "
          >
            {outro}
          </p>
        )}

        <ParallaxLayer speed={0.12}>
          <div
            className="
              chapter-media
              mt-24
              aspect-[16/9]
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-sm
              flex
              items-center
              justify-center
              text-neutral-500
              text-sm
              tracking-[0.25em]
              uppercase
            "
          >
            Future Memory Experience
          </div>
        </ParallaxLayer>
      </div>
    </section>
  );
}