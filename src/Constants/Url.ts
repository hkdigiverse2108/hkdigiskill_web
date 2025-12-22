export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const URL_KEYS = {
  AUTH: {
    LOGIN: "auth/login",
    FORGOT_PASSWORD: "auth/forgot_password",
    VERIFY_OTP: "auth/verify_otp",
    RESET_PASSWORD: "auth/reset_password",
    CHANGE_PASSWORD: "auth/change-password",
  },
  NEWSLETTER: {
    ADD: "newsletter/add",
  },
  CONTACT: {
    ADD: "get-in-touch/add"
  },
  BLOG: {
    ALL: "blog/all"
  },
  HERO_BANNER: { ALL: "hero-banner/all?type=web" },
  COURSE_CATEGORY: { ALL: "course-category/all" },
  TESTIMONIALS: { ALL: "testimonial/all" },
  FAQ: { ALL: "faq/all" },
  TRUSTED_PARTNER: { ALL: "trusted-partner/all" },
  COURSE: { ALL: "course/all" },
  LEGALITY: "legality"
} as const;
