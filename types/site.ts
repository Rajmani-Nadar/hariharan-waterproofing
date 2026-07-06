export type SectionTheme = "default" | "muted" | "accent";

export interface SectionProps {
  id?: string;
  theme?: SectionTheme;
  className?: string;
  children: React.ReactNode;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
