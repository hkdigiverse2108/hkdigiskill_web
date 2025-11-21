export const ROUTES = {
  HOME: "/",
  AUTH: {
    LOGIN: "/login",
    FORGOT_PASSWORD: "/forgot-password",
    VERIFY_OTP: "/verify-otp",
    Reset_PASSWORD: "/reset-password",
    CHANGE_PASSWORD: "/change-password",
  },

  WORKSHOP: {
    BASE: "/workshop",
    DETAILS: "/workshop/details/:id",
    REGISTER: "/workshop/register",
    PAYMENT: "/workshop/payment",
  },
  COURSE: {
    BASE: "/course",
    DETAILS: "/course/details/:id",
    REGISTER: "/course/register",
    PAYMENT: "/course/payment",
  },
  BLOG: {
    BASE: "/blog",
    DETAILS: "/blog/details/:id",
  },
  CONTACT: {
    BASE: "/contact",
  },
} as const;
