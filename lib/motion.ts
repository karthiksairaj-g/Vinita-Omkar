// src/lib/motion.ts

export const MOTION = {
  ease: [0.22, 1, 0.36, 1] as const,

  duration: {
    micro: 0.6,
    card: 0.8,
    content: 1.0,
    section: 1.2,
    cinematic: 1.4,
    reveal: 1.8,
  },

  distance: {
    subtle: 24,
    normal: 40,
    large: 80,
    dramatic: 120,
  },

  scale: {
    subtle: 0.98,
    reveal: 0.95,
    cinematic: 0.9,
  },
} as const;