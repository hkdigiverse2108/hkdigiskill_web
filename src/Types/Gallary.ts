import type { BaseType } from "./Common";

export interface Gallery extends BaseType {
    title: string;
    description: string;
    images: string[];
}

export interface GalleryListApiResponse {
    data: {
        gallery_data: Gallery[];
    };
}