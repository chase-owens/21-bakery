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

export interface OccasionCard {
  id: OccasionType;

  title: string;
  description: string;

  imageKey: string;

  href: string;

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
