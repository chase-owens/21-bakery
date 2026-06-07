// shared/types/DisplaySlide.ts

export type DisplayScreen = "main" | "menu" | "classes" | "events" | "promos";

export type DisplaySlideType =
  | "image"
  | "menu"
  | "event"
  | "class"
  | "promo"
  | "announcement";

export interface DisplaySlide {
  id: string;

  title: string;
  subtitle?: string;
  body?: string;

  type: DisplaySlideType;
  screen: DisplayScreen;

  imageKey?: string;
  qrUrl?: string;
  ctaText?: string;

  active: boolean;
  sortOrder: number;
  durationSeconds: number;

  startsAt?: string;
  endsAt?: string;

  createdAt: string;
  updatedAt?: string;
}
