import { AxiosError, AxiosResponse } from "axios";
import customAxios from "@/utils/customAxios";
import { useMutation, UseMutationOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetBoardResBody, PostBoardResBody, PostBoardReqBody } from "@/interfaces/boardInterface";

const { VITE_API_PREFIX_BOARD } = import.meta.env;

export const QUERY_KEY = "board";

export const api = {
    get: async (boardId: string): Promise<AxiosResponse<GetBoardResBody>> => {
        const data = await customAxios.get<GetBoardResBody>(`${VITE_API_PREFIX_BOARD}/${boardId}`);

        return data;
    },
    post: async (req: PostBoardReqBody): Promise<AxiosResponse<PostBoardResBody>> => {
        const data = await customAxios.post<PostBoardResBody>(`${VITE_API_PREFIX_BOARD}`, req);

        return data;
    },
    delete: async (boardId: string): Promise<AxiosResponse> => {
        const data = await customAxios.delete(`${VITE_API_PREFIX_BOARD}/${boardId}`);

        return data;
    },
};

export const useGetBoardQuery = (boardId: string) =>
    useQuery([QUERY_KEY, boardId], () => api.get(boardId));

export const usePostBoardQuery = (
    req: PostBoardReqBody,
    options?: UseMutationOptions<AxiosResponse<PostBoardResBody>, AxiosError, PostBoardReqBody>,
) => {
    const queryClient = useQueryClient();

    return useMutation(() => api.post(req), {
        ...options,
        onSuccess: (res) => {
            queryClient.invalidateQueries([QUERY_KEY, res.data]);
        },
    });
};

export const useDeleteBoardQuery = (
    boardId: string,
    options?: UseMutationOptions<AxiosResponse, AxiosError>,
) => {
    const queryClient = useQueryClient();

    return useMutation(() => api.delete(boardId), {
        ...options,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY, boardId]);
        },
    });
};
