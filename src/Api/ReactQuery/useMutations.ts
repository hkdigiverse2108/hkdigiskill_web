import { useMutation, useQueryClient, type InvalidateOptions, type InvalidateQueryFilters, type QueryKey, type UseMutationOptions } from "@tanstack/react-query";
import type { CombinedErrorResponse } from "../../Types";
import { useAppDispatch } from "../../Store/Hook";
import { useNavigate } from "react-router-dom";
import { HTTP_STATUS } from "../../Constants/HttpStatus";

export function useMutations<TInput, TResponse>(mutationKey: QueryKey, callBack: (input: TInput) => Promise<TResponse>, options?: UseMutationOptions<TResponse, CombinedErrorResponse, TInput>) {

    const q = useQueryClient();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return useMutation<TResponse, CombinedErrorResponse, TInput>({
        mutationKey,
        mutationFn: callBack,
        ...options,
        onSuccess: (data, variables, context, mutationContext) => {
            for (let i = 1; i < mutationKey.length; i++) {
                q.invalidateQueries({ queryKey: [mutationKey[i]] } as InvalidateQueryFilters)
            }
            options?.onSuccess?.(data, variables, context, mutationContext)
        },
        onError: (error: CombinedErrorResponse) => {
            switch (error.status) {
                case HTTP_STATUS.UNAUTHORIZED:
                    // dispatch(setSignOut());
                    // navigate(ROUTES.AUTH.SIGNIN + `?returnUrl=${window.location.pathname}`, {
                    //     replace: true,
                    // });
                    break;
                default:
                    // ShowNotification(ErrorMessage(error), "error");
                    break;
            }
        },
    })

}