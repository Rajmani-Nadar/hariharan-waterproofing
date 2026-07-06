import { siteConfig } from "@/lib/metadata";

export function buildCanonicalUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

export function createPageTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}

export function buildJsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}
