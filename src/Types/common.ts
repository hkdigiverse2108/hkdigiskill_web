export interface MenuItem {
  Title: string;
  link?: string;
  child?: MenuItem[];
}

export interface Params {
  [key: string]: any;
}

export type AddNewsletterPayload = {
  email: string;
};