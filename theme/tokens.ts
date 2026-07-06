export const colorTokens = {
  background: "#f6f3eb",
  foreground: "#10141b",
  surface: "#ffffff",
  surfaceMuted: "#f2efe8",
  border: "#e1d9ca",
  primary: "#0f4c5c",
  primaryForeground: "#f9f6f0",
  accent: "#2d6a4f",
  accentForeground: "#f2f7f3",
  muted: "#6e7480",
} as const;

export const typographyScale = {
  display: "text-5xl font-semibold tracking-[-0.03em] sm:text-6xl lg:text-7xl",
  h1: "text-4xl font-semibold tracking-[-0.025em] sm:text-5xl",
  h2: "text-3xl font-semibold tracking-[-0.02em] sm:text-4xl",
  h3: "text-2xl font-semibold tracking-[-0.01em]",
  body: "text-base leading-8 text-slate-600",
  small: "text-sm leading-7 text-slate-500",
} as const;

export const spacingScale = {
  section: "py-24 sm:py-28 lg:py-36",
  container: "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12",
} as const;

export const motionTokens = {
  easing: [0.22, 1, 0.36, 1] as const,
  duration: {
    fast: 0.25,
    normal: 0.45,
    slow: 0.75,
  },
} as const;
