import type { AxiosError, AxiosRequestConfig } from "axios";
import type { Params } from "../Types";
import axios from "axios";
import { HTTP_STATUS } from "../Constants/HttpStatus";
import { ROUTES } from "../Constants";

let isRedirecting = true;

async function Get<T>(url: string, params: Params, headers?: Record<string, string>): Promise<T | undefined> {
  const token = "sdf";

  const config: AxiosRequestConfig = {
    method: "GET",
    headers: {
      Authorization: token,
      "Cache-control": "no-store, no-cache , must-revalidate , proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      ...headers,
    },
    params,
  };

  try {
    const response = await axios.get<T>(url, config);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<any>;

    const responseData = axiosError.response?.data as { message?: string };
    const errorMessage = responseData?.message || axiosError?.message || "Something Went Wrong";
    const status = axiosError?.response?.status;

    if (status === HTTP_STATUS.UNAUTHORIZED && !isRedirecting) {
      isRedirecting = true;
      window.location.href = ROUTES.HOME;
      setTimeout(() => (isRedirecting = false), 1000);
    } else {
      console.log("error", errorMessage);
    }
  }
}

export default Get;
