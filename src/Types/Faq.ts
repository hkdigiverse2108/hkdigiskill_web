export interface FaqCardType {
  question: string;
  answer: string;
}

export interface FaqCardProp {
  faq: FaqCardType;
}

export interface FaqItem {
  q: string;
  a: string;
}

export type FaqCategory =
  | "general"
  | "regular"
  | "advanced"
  | "policies"
  | "payment"
  | "terms";

export type FaqData = Record<FaqCategory, FaqItem[]>;