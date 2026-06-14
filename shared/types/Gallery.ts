import type { OccasionType } from "./Event";
import type { Hero } from "./HomePageContent";

type GalleryCategory =
  | "birthday"
  | "baby-shower"
  | "wedding"
  | "graduation"
  | "corporate"
  | "holiday";

type GalleryImage = {
  id: string;
  category: GalleryCategory;
  image: string;
  title?: string;
  description?: string;
  featured?: boolean;
  occasionTypes?: OccasionType[];
};

export type GalleryPageContent = {
  hero: Hero;
  images: GalleryImageLean[];
};

export type GalleryCategoryItem = {
  id: string;
  title: string;
  description?: string;
  images: GalleryImage[];
};

export type GalleryImageLean = {
  src: string;
  alt: string;
};
