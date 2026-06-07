export type ProductType =
  | "cake-tasting-box"
  | "signature-cake"
  | "cookie"
  | "cookie-class"
  | "event";

export interface Product {
  id: string;
  name: string;
  slug: string;
  type: ProductType;
  description: string;
  imageKey?: string;

  priceType: "fixed" | "starting-at" | "quote";
  price?: number;
  startingPrice?: number;

  active: boolean;
  featured?: boolean;
  sortOrder: number;
}

// Cakes

export type CakeOptionType = "cake-flavor" | "filling" | "buttercream";

export interface CakeOption {
  id: string;
  name: string;
  type: CakeOptionType;
  active: boolean;
  sortOrder: number;
}

export interface CakePricingTier {
  id: string;
  name: string;
  servings: string;
  startingPrice: number;
  description?: string;
  sortOrder: number;
}
