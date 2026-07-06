export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

export function getResponsiveClassNames(base: string, classes: Partial<Record<keyof typeof breakpoints, string>>) {
  return [base, Object.entries(classes).map(([key, value]) => `${key}:${value}`).join(" ")].join(" ");
}
