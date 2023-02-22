import { AxiosError, AxiosResponse } from "axios";
import customAxios from "@/utils/customAxios";
import { useMutation, UseMutationOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetListResBody, PostListResBody, PostListReqBody } from "@/interfaces/listInterface";

const { VITE_API_PREFIX_LIST } = import.meta.env;

export const QUERY_KEY = "list";

export const api = {
    get: async (listId: string): Promise<AxiosResponse<GetListResBody>> => {
        const data = await customAxios.get<GetListResBody>(`${VITE_API_PREFIX_LIST}/${listId}`);

        return data;
    },
    post: async (req: PostListReqBody): Promise<AxiosResponse<PostListResBody>> => {
        const data = await customAxios.post<PostListResBody>(`${VITE_API_PREFIX_LIST}`, req);

        return data;
    },
    delete: async (listId: string): Promise<AxiosResponse> => {
        const data = await customAxios.delete(`${VITE_API_PREFIX_LIST}/${listId}`);

        return data;
    },
};

export const useGetListQuery = (listId: string) => {
    useQuery([QUERY_KEY, listId], () => api.get(listId));
};

export const usePostListQuery = (
    req: PostListReqBody,
    options?: UseMutationOptions<AxiosResponse<PostListResBody>, AxiosError, PostListReqBody>,
) => {
    const queryClient = useQueryClient();

    return useMutation(() => api.post(req), {
        ...options,
        onSuccess: (res) => {
            queryClient.invalidateQueries([QUERY_KEY, res.data]);
        },
    });
};

export const useDeleteListQuery = (
    listId: string,
    options?: UseMutationOptions<AxiosResponse, AxiosError>,
) => {
    const queryClient = useQueryClient();

    return useMutation(() => api.delete(listId), {
        ...options,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY, listId]);
        },
    });
};
