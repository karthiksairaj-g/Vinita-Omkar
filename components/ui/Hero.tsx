"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const backgroundRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      const intro = gsap.timeline();

      intro
        .from(titleRef.current, {
          opacity: 0,
          y: 80,
          duration: 1.4,
          ease: "power3.out",
        })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          dateRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.6"
        );

      // Scroll Story Timeline
      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      })

      // Background Depth
      .to(
        backgroundRef.current,
        {
          scale: 1.1,
          ease: "none",
        },
        0
      )

      // Glow Expansion
      .to(
        glowRef.current,
        {
          scale: 1.4,
          opacity: 0.2,
          ease: "none",
        },
        0
      )

      // Hero Title
      .to(
        titleRef.current,
        {
          scale: 1.08,
          y: -80,
          ease: "none",
        },
        0
      )

      // Subtitle Fade
      .to(
        subtitleRef.current,
        {
          opacity: 0,
          y: -40,
          ease: "none",
        },
        0
      )

      // Date Fade
      .to(
        dateRef.current,
        {
          opacity: 0,
          y: -20,
          ease: "none",
        },
        0
      )

      // Entire Hero Dissolves
      .to(
        contentRef.current,
        {
          opacity: 0,
          y: -120,
          ease: "none",
        },
        0.6
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >
      {/* Background Layer */}
      <div
        ref={backgroundRef}
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-midnight
          via-black
          to-midnight
        "
      />

      {/* Glow Layer */}
      <div
        ref={glowRef}
        className="
          absolute
          w-[600px]
          h-[600px]
          rounded-full
          bg-rosegold/10
          blur-3xl
        "
      />

      {/* Hero Content */}
      <div
        ref={contentRef}
        className="
          relative
          z-10
          text-center
          px-6
        "
      >
        <p className="uppercase tracking-[0.5em] text-champagne">
          Our Wedding Story
        </p>

        <h1
          ref={titleRef}
          className="
            text-6xl
            md:text-8xl
            lg:text-9xl
            font-bold
            mt-6
          "
        >
          Vinita ❤️ Omkar
        </h1>

        <p
          ref={subtitleRef}
          className="
            mt-8
            text-xl
            md:text-2xl
            text-neutral-300
          "
        >
          A Story Written In Stars
        </p>

        <p
          ref={dateRef}
          className="
            mt-4
            text-champagne
          "
        >
          15 March 2026
        </p>

        <div
          className="
            mt-20
            text-neutral-500
            animate-bounce
          "
        >
          ↓ Scroll To Begin
        </div>
      </div>
    </section>
  );
}