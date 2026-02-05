import { KEYS } from "../Constants/Keys";
import { URL_KEYS } from "../Constants/Url";
import type {
  AddNewsletterPayload,
  ForgotPasswordPayload,
  LoginPayload,
  PurchaseCoursePayload,
  RegisterPayload,
  ResetPasswordPayload,
  ResendOtpPayload,
  VerifyOtpPayload,
  VerifyCoursePayload,
} from "../Types";

import { Post } from "./Methods";
import { useMutations } from "./ReactQuery";

export const Mutation = {
  // ============= auth =============
  useLogin: () =>
    useMutations<LoginPayload, any>([KEYS.LOGIN], (input) =>
      Post(URL_KEYS.AUTH.LOGIN, input),
    ),
  useRegister: () =>
    useMutations<RegisterPayload, any>([KEYS.REGISTER], (input) =>
      Post(URL_KEYS.AUTH.REGISTER, input),
    ),
  useForgotPassword: () =>
    useMutations<ForgotPasswordPayload, any>([KEYS.FORGOT_PASSWORD], (input) =>
      Post(URL_KEYS.AUTH.FORGOT_PASSWORD, input),
    ),
  useVerifyOtp: () =>
    useMutations<VerifyOtpPayload, any>([KEYS.VERIFY_OTP], (input) =>
      Post(URL_KEYS.AUTH.VERIFY_OTP, input),
    ),
  useResendOtp: () =>
    useMutations<ResendOtpPayload, any>([KEYS.RESEND_OTP], (input) =>
      Post(URL_KEYS.AUTH.RESEND_OTP, input),
    ),
  useResetPassword: () =>
    useMutations<ResetPasswordPayload, any>([KEYS.RESET_PASSWORD], (input) =>
      Post(URL_KEYS.AUTH.RESET_PASSWORD, input),
    ),
  // ============= newsletter =============
  useAddNewsLetter: () =>
    useMutations<AddNewsletterPayload, any>([KEYS.NEWSLETTER], (input) =>
      Post(URL_KEYS.NEWSLETTER.ADD, input),
    ),
  // ============= newsletter =============
  useAddContact: () =>
    useMutations<AddNewsletterPayload, any>([KEYS.CONTACT], (input) =>
      Post(URL_KEYS.CONTACT.ADD, input),
    ),
  // ============= course =============
  usePurchaseCourse: () =>
    useMutations<PurchaseCoursePayload, any>([KEYS.PURCHASE_COURSE], (input) =>
      Post(URL_KEYS.COURSE.PURCHASE, input),
    ),
  useVerifyCourse: () =>
    useMutations<VerifyCoursePayload, any>([KEYS.VERIFY_COURSE], (input) =>
      Post(URL_KEYS.COURSE.VERIFY, input),
    ),
};
