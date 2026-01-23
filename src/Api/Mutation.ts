import { KEYS } from "../Constants/Keys";
import { URL_KEYS } from "../Constants/Url";
import type { AddNewsletterPayload, LoginPayload, RegisterPayload } from "../Types";
import { Post } from "./Methods";
import { useMutations } from "./ReactQuery";


export const Mutation = {
    // ============= auth =============
    useLogin: () => useMutations<LoginPayload, any>([KEYS.LOGIN], (input) => Post(URL_KEYS.AUTH.LOGIN, input)),
    useRegister: () => useMutations<RegisterPayload, any>([KEYS.REGISTER], (input) => Post(URL_KEYS.AUTH.REGISTER, input)),
    // ============= newsletter =============
    useAddNewsLetter: () => useMutations<AddNewsletterPayload, any>([KEYS.NEWSLETTER], (input) => Post(URL_KEYS.NEWSLETTER.ADD, input)),
    // ============= newsletter =============
    useAddContact: () => useMutations<AddNewsletterPayload, any>([KEYS.CONTACT], (input) => Post(URL_KEYS.CONTACT.ADD, input))
}