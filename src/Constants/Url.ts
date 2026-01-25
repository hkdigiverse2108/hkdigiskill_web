export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const URL_KEYS = {
  AUTH: {
    LOGIN: "auth/login",
    REGISTER: "auth/signup",
    FORGOT_PASSWORD: "auth/forgot-password",
    VERIFY_OTP: "auth/otp/verify",
    RESEND_OTP: "auth/resend-otp",
    RESET_PASSWORD: "auth/reset-password",
    CHANGE_PASSWORD: "auth/change-password",
  },
  NEWSLETTER: {
    ADD: "newsletter/add",
  },
  CONTACT: {
    ADD: "get-in-touch/add"
  },
  BLOG: {
    ALL: "blog/all",
    ONE: "blog/"
  },
  HERO_BANNER: { ALL: "hero-banner/all?type=web" },
  COURSE_CATEGORY: { ALL: "course-category/all" },
  TESTIMONIALS: { ALL: "testimonial/all" },
  FAQ: { ALL: "faq/all" },
  TRUSTED_PARTNER: { ALL: "trusted-partner/all" },
  COURSE: {
    ALL: "course/all",
    ONE: "course/",
    CURRICULUM: "course-curriculum/all?courseId="
  },
  INSTRUCTOR: { ALL: "instructor/all" },
  LEGALITY: "legality",
  SETTINGS: "settings/all",
  GALLARY: "gallery/all",
  USER: {
    ONE: "user/"
  }

} as const;
