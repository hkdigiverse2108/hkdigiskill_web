import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";
import { HTTP_STATUS } from "../Constants/HttpStatus";

async function Post<TInput, TResponse>(url: string, data?: TInput, isToken: boolean = true): Promise<TResponse> {
  const authToken = "dsfsd";

  const isFormData = data instanceof FormData;

  const config: AxiosRequestConfig = {
    method: "POST",
    url,
    headers: {
      ...(isToken ? { Authorization: authToken } : {}),
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
    data,
  };

  try {
    const response = await axios(config);
    const resData = response?.data;

    if (response.status === HTTP_STATUS.OK) {
      console.log("Success", resData?.message);
      return resData;
    } else {
      return null as TResponse;
    }
  } catch (error) {
    const axiosError = error as AxiosError<any>;

    const responseData = axiosError?.response?.data as { message: string };
    const message = responseData?.message || axiosError.message || "Something Went Wrong";

    throw new Error(message);
  }
}

export default Post;
