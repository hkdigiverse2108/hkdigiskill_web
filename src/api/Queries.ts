import { KEYS } from "../Constants/Keys";
import { URL_KEYS } from "../Constants/Url";
import type { AllCourseApiResponse, AppQueryOptions, BlogListApiResponse, CourseApiResponse, CourseCategoryResponse, FaqResponse, GalleryListApiResponse, HeroBannerResponse, LegalityApiResponse, QueryParams, SettingsApiResponse, TestimonialResponse, TrustedPartnerResponse } from "../Types";
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
    useGetAllCourses: (params?: QueryParams, options?: AppQueryOptions<AllCourseApiResponse>) => useQueries<AllCourseApiResponse>([KEYS.COURSE, params], () => Get(URL_KEYS.COURSE.ALL, params), options),
    useGetSingleCourse: (id?: string) => useQueries<CourseApiResponse>([KEYS.COURSE_ONE], () => Get(`${URL_KEYS.COURSE.ONE}${id}`)),

    // ******************* Courses *******************
    useGetCourseCurriculum: (id?: string) => useQueries<any>([KEYS.COURSE_CURRICULUM], () => Get(`${URL_KEYS.COURSE.CURRICULUM}${id}`)),


    // ******************* Legality *******************
    useGetLegality: (typeFilter: string, options?: AppQueryOptions<LegalityApiResponse>) => useQueries<LegalityApiResponse>([KEYS.LEGALITY, typeFilter], () => Get(`${URL_KEYS.LEGALITY}?typeFilter=${typeFilter}`), options),

    // ******************* BLogs *******************
    useGetAllBlogs: (params?: QueryParams, options?: AppQueryOptions<BlogListApiResponse>) => useQueries<BlogListApiResponse>([KEYS.BLOG, params], () => Get(URL_KEYS.BLOG.ALL, params), options),

    // ******************* Settings *******************
    useGetAllSettings: (options?: AppQueryOptions<SettingsApiResponse>) => useQueries<SettingsApiResponse>([KEYS.SETTINGS], () => Get(URL_KEYS.SETTINGS), options),

    // ******************* Gallary *******************
    useGetAllGallary: (options?: AppQueryOptions<GalleryListApiResponse>) => useQueries<GalleryListApiResponse>([KEYS.GALLARY], () => Get(URL_KEYS.GALLARY), options),
}