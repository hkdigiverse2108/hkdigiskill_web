import type { BaseType, MessageStatus } from "./Common";

export interface CourseCategory {
  name: string;
  _id: string;
  description: string;
  image: string;
  isFeatured: boolean;
}

export interface CourseCategoryResponse extends MessageStatus {
  data: {
    course_category_data: CourseCategory[];
  };
}

// export interface Course {
//   id: number;
//   title: string;
//   image: string;
//   alt: string;
//   href: string;
//   category: string;
//   categories?: string[]; // optional, since some items include it
//   excerpt: string;
//   mode: string;
//   rating: number; // 0–5 stars
//   ratingCount: number; // number of ratings
//   position: {
//     left: string;
//     top: string;
//   };
// }

export interface Course extends BaseType {
  totalLesson: number;
  classCompleted: number;
  courseCategoryId: CourseCategory;
  courseCurriculumIds: string[]; // or another interface if you have one
  description: string;
  duration: string; // e.g. "3h 20m" or change to number if it's minutes
  enrolledLearners: number;
  language: string;
  image: string; // URL
  mrpPrice: number;
  price: number;
  name: string;
  purchasedCoursesShow: boolean;
  satisfactionRate: number; // e.g. percentage or rating

}

export interface CourseApiData {
  course_data: Course
}


export interface AllCourseApiResponse {
  data: { course_data: Course[], totalData: number }
}

export interface CourseApiResponse {
  data: Course
}


export interface CourseCardProps {
  course: Course;
}


