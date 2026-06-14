import type { Hero } from "./HomePageContent";

export type CookiesPageContent = {
  hero: Hero;
  gallerySections: CookieGallerySection[];
};

export type CookieGallerySection = {
  id: string;
  title: string;
  description: string;
  images: CookieImage[];
};

export type CookieImage = {
  src: string;
  alt: string;
};
