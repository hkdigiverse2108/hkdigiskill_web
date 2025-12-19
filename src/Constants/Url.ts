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
  HERO_BANNER: { ALL: "hero-banner/all?type=web" },
  COURSE_CATEGORY: { ALL: "course-category/all" },
  TESTIMONIALS: { ALL: "testimonial/all" },
  FAQ: { ALL: "faq/all" },
} as const;
