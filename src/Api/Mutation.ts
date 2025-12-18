import { KEYS } from "../Constants/Keys";
import { URL_KEYS } from "../Constants/Url";
import type { AddNewsletterPayload } from "../Types";
import { Post } from "./Methods";
import { useMutations } from "./ReactQuery";


export const Mutation = {
    // ============= newsletter =============
    useAddNewsLetter: () => useMutations<AddNewsletterPayload, any>([KEYS.NEWSLETTER], (input) => Post(URL_KEYS.NEWSLETTER.ADD, input))
}