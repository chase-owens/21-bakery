import type { Hero } from "./HomePageContent";

export type EventType =
  | "cookie-class"
  | "cake-class"
  | "private-class"
  | "corporate-class"
  | "birthday-party"
  | "pop-up"
  | "holiday-event";

export interface Event {
  id: string;

  title: string;
  description: string;

  type: EventType;

  imageKey?: string;

  startDateTime: string;
  endDateTime: string;

  location?: string;

  capacity?: number;
  spotsRemaining?: number;

  priceType: "free" | "fixed" | "starting-at" | "inquiry";

  price?: number;
  startingPrice?: number;

  active: boolean;
  featured?: boolean;
}

export interface Occasion {
  title: string;
  description: string;

  image: string;

  href: string;
}

type PerfectForSection = {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
};
export interface OccasionCard extends Occasion {
  id: OccasionType;

  active: boolean;
  sortOrder: number;
}

export type OccasionType =
  | "birthday"
  | "baby-shower"
  | "wedding"
  | "graduation"
  | "corporate"
  | "holiday"
  | "general";

export type EventsPageContent = {
  hero: Hero;
  included: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  perfectFor: PerfectForSection;
  sections: {
    title: string;
    description: string;
    image: string;
    ctaLabel: string;
    inquiryType: "private-class" | "corporate-class";
    imagePosition?: "left" | "right";
  }[];
};
