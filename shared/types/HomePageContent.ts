import type { OccasionCard } from "./Event";

export type HeroCta =
  | {
      label: string;
      variant: "primary" | "secondary";
      href: string;
      onCtaClick?: never;
    }
  | {
      label: string;
      variant: "primary" | "secondary";
      onCtaClick: () => void;
      href?: never;
    };

export type Hero = {
  imageCaption: string;
  heroImage: string;
  heroImageAlt: string;
  title: string;
  subTitle: string;
  description: string;
  ctas: HeroCta[];
};

type FeaturedDessert = {
  title: string;
  description: string;
  image: string;
  price?: string;
  ctaLabel: string;
  ctaHref: string;
};
export interface HomePageContent {
  hero: Hero;
  featuredDesserts: FeaturedDessert[];

  featuredCakeIds?: string[];
  featuredCookieIds?: string[];

  featuredReviewIds?: string[];

  activeEventTypes?: OccasionCard[];
}
