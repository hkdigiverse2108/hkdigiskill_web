import { useMutation, useQueryClient, type InvalidateQueryFilters, type QueryKey, type UseMutationOptions } from "@tanstack/react-query";
import type { CombinedErrorResponse } from "../../Types";
import { useAppDispatch } from "../../Store/Hook";
import { useNavigate } from "react-router-dom";
import { HTTP_STATUS } from "../../Constants/HttpStatus";
import { ROUTES } from "../../Constants";

function useApiPost<TInput, TResponse>(mutationKey: QueryKey, callback: (input: TInput) => Promise<TResponse>, options?: UseMutationOptions<TResponse, CombinedErrorResponse, TInput>) {
  const q = useQueryClient();
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation<TResponse, CombinedErrorResponse, TInput>({
    mutationKey,
    mutationFn: callback,
    ...options,
    onSuccess: (data, variables, context) => {
      for (let i = 1; i < mutationKey.length; i++) {
        q.invalidateQueries({ queryKey: [mutationKey[i]] } as InvalidateQueryFilters);
      }
      options?.onSuccess?.(data, variables, context);
    },
    onError: (error: CombinedErrorResponse) => {
      switch (error.status) {
        case HTTP_STATUS.UNAUTHORIZED:
          //   dispatch(logout());
          navigate(ROUTES.HOME + `returnUrl=${window.location.pathname}`, {
            replace: true,
          });
          break;
        default:
          console.log("Erron On Post ");
          break;
      }
    },
  });
}

export default useApiPost;
