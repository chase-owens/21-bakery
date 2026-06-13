import { OccasionCard } from "./event";

export interface HomePageContent {
  heroTitle: string;
  heroSubtitle: string;

  heroImageKey: string;

  featuredCakeIds: string[];
  featuredCookieIds: string[];

  featuredReviewIds: string[];

  activeEventTypes: OccasionCard[];
}
