import type { OccasionCard } from "./Event";

export interface Cta {
  href: string;
  label: string;
  variant: "primary" | "secondary" | "text";
}
export type Hero = {
  imageCaption: string;
  heroImage: string;
  heroImageAlt: string;
  title: string;
  subTitle: string;
  description: string;
  ctas: Cta[];
};

export interface HomePageContent {
  hero: Hero;

  featuredCakeIds?: string[];
  featuredCookieIds?: string[];

  featuredReviewIds?: string[];

  activeEventTypes?: OccasionCard[];
}
