import type { Hero } from "./HomePageContent";

export type CakesPageContent = {
  hero: Hero;
  cakeBuilder: CakeBuilderSection;
  pricingGuide: PricingGuideSection;
  signatures: SignatureCakesSection;
  tastingBox: TastingBoxSection;
};

export type CakeBuilderSection = {
  ctaLabel: string;
  smallTitle: string;
  title: string;
  description: string;
  groups: CakeIngredientGroup[];
};

export type CakeIngredientGroup = {
  title: string;
  description: string;
  options: CakeIngredient[];
};

export type CakeIngredient = {
  id: string;
  label: string;
  className: string;
};

export type PricingGuideSection = {
  title: string;
  description: string;
  tiers: PricingTier[];
};

export type PricingTier = {
  title: string;
  price: string;
  serves?: string;
};

export type SignatureCakesSection = {
  title: string;
  smallTitle: string;
  description: string;
  ctaLabel: string;
  ingredientStyles: Record<string, string>;
  signatureCakes: SignatureCake[];
};

export type SignatureCake = {
  name: string;
  summary: string;
  cakeFlavor: SignatureIngredient;
  fillings: SignatureIngredient[];
  toppings: SignatureIngredient[];
};

export type SignatureIngredient = {
  id: string;
  label: string;
};

export type TastingBoxSection = {
  title: string;
  smallTitle: string;
  description: string;
  image: string;
  included: {
    title: string;
    items: string[];
  };
  cta: {
    href: string;
    label: string;
  };
};
