import { OccasionType } from "./event";

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
