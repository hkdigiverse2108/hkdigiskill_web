import type { MessageStatus } from "./Common";

export interface HeroBannerData {
    title: string;
    description: string;
    type: string;
    images: string[];
}

export interface HeroBannerResponse extends MessageStatus {
    data: {
        hero_banner_data: HeroBannerData[];
    };
}