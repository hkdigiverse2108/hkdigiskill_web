import type { MessageStatus } from "./Common";

export interface Testimonial {
    _id: string;
    name: string;
    designation: string;
    description: string;
    image: string;
    rate: number;
    isFeatured: Boolean;
    type: "course" | "instructor";
}


export interface TestimonialResponse extends MessageStatus {
    data: {
        testimonial_data: Testimonial[];
    };
}