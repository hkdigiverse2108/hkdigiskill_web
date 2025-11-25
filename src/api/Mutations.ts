import { KEYS } from "../Constants/Keys";
import { URL_KEYS } from "../Constants/Url";
import type { NewsLetterType } from "../Types";
import useApiPost from "./hook/useApiPost";
import Post from "./Post";

const Mutations = {
  useNewsletter: () => useApiPost<NewsLetterType, any>([KEYS.NEWSLETTER], (input) => Post(URL_KEYS.NEWSLETTER.ADD, input, false)),
};

export default Mutations;
