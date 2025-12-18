import { KEYS } from "../Constants/Keys";
import { URL_KEYS } from "../Constants/Url";
import type { AppQueryOptions, UploadResponse } from "../Types";
import { Get } from "./Methods";
import { useQueries } from "./ReactQuery";

export const Queries = {
    useGetHeroBannerImage: (options?: AppQueryOptions<UploadResponse>) => useQueries<UploadResponse>([KEYS.HERO_BANNER], () => Get(URL_KEYS.HERO_BANNER.ALL), options)
}