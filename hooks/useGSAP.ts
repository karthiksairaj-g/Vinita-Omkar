"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export function useGSAP(
  callback: () => gsap.Context | void,
  deps: unknown[] = []
) {
  useEffect(() => {
    const result = callback();

    return () => {
      if (result) {
        result.revert();
      }
    };
  }, deps);
}