import { KEYS } from "../Constants/Keys";
import { URL_KEYS } from "../Constants/Url";
import type { AppQueryOptions, BlogListApiResponse, CourseApiResponse, CourseCategoryResponse, FaqResponse, HeroBannerResponse, LegalityApiResponse, TestimonialResponse, TrustedPartnerResponse } from "../Types";
import { Get } from "./Methods";
import { useQueries } from "./ReactQuery";

export const Queries = {
    // ******************* Hero Banner *******************
    useGetHeroBannerImage: (options?: AppQueryOptions<HeroBannerResponse>) => useQueries<HeroBannerResponse>([KEYS.HERO_BANNER], () => Get(URL_KEYS.HERO_BANNER.ALL), options),

    // ******************* Course Category *******************
    useGetCourseCategory: (options?: AppQueryOptions<CourseCategoryResponse>) => useQueries<CourseCategoryResponse>([KEYS.COURSE_CATEGORY], () => Get(URL_KEYS.COURSE_CATEGORY.ALL), options),

    // ******************* Testimonial *******************
    useGetTestimonials: (options?: AppQueryOptions<TestimonialResponse>) => useQueries<TestimonialResponse>([KEYS.TESTIMONIALS], () => Get(URL_KEYS.TESTIMONIALS.ALL), options),

    // ******************* FAQ *******************
    useGetFaq: (options?: AppQueryOptions<FaqResponse>) => useQueries<FaqResponse>([KEYS.FAQ], () => Get(URL_KEYS.FAQ.ALL), options),

    // ******************* Trusted Partner *******************
    useGetTrutedPartner: (options?: AppQueryOptions<TrustedPartnerResponse>) => useQueries<TrustedPartnerResponse>([KEYS.TRUSTED_PARTNER], () => Get(URL_KEYS.TRUSTED_PARTNER.ALL), options),

    // ******************* Courses *******************
    useGetAllCourses: (options?: AppQueryOptions<CourseApiResponse>) => useQueries<CourseApiResponse>([KEYS.COURSE], () => Get(URL_KEYS.COURSE.ALL), options),

    // ******************* Legality *******************
    useGetLegality: (typeFilter: string, options?: AppQueryOptions<LegalityApiResponse>) => useQueries<LegalityApiResponse>([KEYS.LEGALITY, typeFilter], () => Get(`${URL_KEYS.LEGALITY}?typeFilter=${typeFilter}`), options),

    // ******************* BLogs *******************
    useGetAllBlogs: (options?: AppQueryOptions<BlogListApiResponse>) => useQueries<BlogListApiResponse>([KEYS.BLOG], () => Get(URL_KEYS.BLOG.ALL), options),
}