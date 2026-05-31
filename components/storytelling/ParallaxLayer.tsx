"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

interface Props {
  speed?: number;
  children: React.ReactNode;
}

export default function ParallaxLayer({
  speed = 0.5,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    gsap.to(element, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });
  }, [speed]);

  return <div ref={ref}>{children}</div>;
}