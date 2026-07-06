import type { Variants } from "framer-motion";

export const transitionPresets = {
  default: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  quick: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  slow: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
} as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.default,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const reveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: transitionPresets.default,
  },
};
