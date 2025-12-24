import type { BaseType } from "./Common";

export interface Blog extends BaseType {

    title: string;
    subTitle: string;
    content: string;

    author: string;
    category: string;

    coverImage: string;
    mainImage: string;

    quote: string | null;

    isFeatured: boolean;

}

export interface BlogListApiResponse {
    data: {
        blog_data: Blog[];
    };
}


export interface BlogCardProps {
  blog: Blog;
  style?: React.CSSProperties;
}