import { OccasionType } from "./event";

export interface Review {
  id: string;
  customerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;

  occasionType?: OccasionType;
  eventType?: ReviewEventType;

  featured?: boolean;

  createdAt?: string;
}

export type ReviewEventType =
  | "birthday"
  | "baby-shower"
  | "wedding"
  | "graduation"
  | "corporate"
  | "holiday"
  | "general";
