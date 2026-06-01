"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dateRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
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

      // Scroll animation
      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1.5,
          pin: true,
          anticipatePin : 1,
        },
      })
        .to(titleRef.current, {
          scale: 1.08,
          y: -80,
          ease : "none",
        })
        .to(
          subtitleRef.current,
          {
            opacity: 0,
            y: -40,
            ease : "none",
          },
          0
        )
        .to(
          dateRef.current,
          {
            opacity: 0,
            y: -20,
            ease : "none",
          },
          0
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
      {/* Background Gradient */}
      <div
        className="
          absolute
          inset-0
          bg-linear-to-b
          from-midnight
          via-black
          to-midnight
        "
      />

      {/* Glow Effect */}
      <div
        className="
          absolute
          w-150
          h-150
          rounded-full
          bg-rosegold/10
          blur-3xl
        "
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
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