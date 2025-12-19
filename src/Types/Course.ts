import type { MessageStatus } from "./Common";

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