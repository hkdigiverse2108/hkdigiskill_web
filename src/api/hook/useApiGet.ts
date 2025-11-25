import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { CombinedErrorResponse } from "../../Types";

function useGetApi<T, P = void>(queryKey: any[], callback: (params?: P) => Promise<T>, options?: Omit<UseQueryOptions<T, CombinedErrorResponse, T, any[]>, "queryKey" | "queryFn">) {
  return useQuery<T, CombinedErrorResponse, T, any[]>({
    queryKey,
    queryFn: async () => await callback(),
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: 1000 * 60,
    ...options,
  });
}

export default useGetApi;
