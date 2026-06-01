"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@/hooks/useGSAP";

interface StoryChapterProps {
  title: string;
  subtitle?: string;
  content?: string;
}

export default function StoryChapter({
  title,
  subtitle,
  content,
}: StoryChapterProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".chapter-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".chapter-title", {
        opacity: 0,
        y: 80,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".chapter-content", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

      gsap.from(".chapter-media", {
        opacity: 0,
        scale: 0.95,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });
    }, sectionRef);

    return ctx;
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        min-h-screen
        flex
        items-center
        py-32
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >
        <div>
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

          {content && (
            <p
              className="
                chapter-content
                mt-10
                text-lg
                leading-9
                text-neutral-300
                max-w-xl
              "
            >
              {content}
            </p>
          )}
        </div>

        <div
          className="
            chapter-media
            aspect-[4/5]
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
          Future Memory
        </div>
      </div>
    </section>
  );
}