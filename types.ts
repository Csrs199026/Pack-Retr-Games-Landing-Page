
export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
