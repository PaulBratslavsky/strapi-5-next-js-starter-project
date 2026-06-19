import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStrapiURL() {
  return process.env.STRAPI_BASE_URL ?? "http://localhost:1337";
}

// In draft mode Strapi embeds content source maps (invisible zero-width "stega"
// markers) into string fields, including media URLs. Those markers are fine in
// visible text (the preview highlight script reads and cleans them), but in a
// URL they get percent-encoded and break the image request / cause hydration
// mismatches. Strip them before using a URL.
export function stripStegaMarkers(value: string): string {
  return value.replace(/[\u200B-\u200D\u2060\uFEFF]/g, "");
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  const clean = stripStegaMarkers(url);
  if (clean.startsWith("data:")) return clean;
  if (clean.startsWith("http") || clean.startsWith("//")) return clean;
  return `${getStrapiURL()}${clean}`;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}
