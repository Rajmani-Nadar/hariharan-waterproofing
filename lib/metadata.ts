import type { Metadata } from "next";

export const siteConfig = {
  name: "Hariharan Waterproofing",
  shortName: "Hariharan",
  description:
    "Premium waterproofing solutions for roofs, basements, terraces, and wet areas with transparent diagnostics, premium materials, and lasting protection.",
  url: "https://hariharan-waterproofing.com",
  ogImage: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  keywords: [
    "waterproofing",
    "premium waterproofing",
    "roof waterproofing",
    "basement waterproofing",
    "terrace waterproofing",
    "leak repair",
    "building protection",
    "water leak solution",
  ],
} as const;

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
}): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    keywords: [...siteConfig.keywords],
  };
}

export const defaultMetadata = createMetadata({
  title: `${siteConfig.name} — Premium Waterproofing Expertise`,
});
