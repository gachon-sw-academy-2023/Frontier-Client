import { AxiosError, AxiosResponse } from "axios";
import customAxios from "@/utils/customAxios";
import { useMutation, UseMutationOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    GetWorkspaceResBody,
    PostWorkspaceReqBody,
    PostWorkspaceResBody,
} from "@/interfaces/workspaceInterface";

const { VITE_API_PREFIX_WORKSPACE } = import.meta.env;

export const QUERY_KEY = "workspace";

export const api = {
    get: async (workspaceId: string): Promise<AxiosResponse<GetWorkspaceResBody>> => {
        const data = await customAxios.get<GetWorkspaceResBody>(
            `${VITE_API_PREFIX_WORKSPACE}/${workspaceId}`,
        );

        return data;
    },
    getAll: async (): Promise<AxiosResponse<GetWorkspaceResBody[]>> => {
        const data = await customAxios.get<GetWorkspaceResBody[]>(`${VITE_API_PREFIX_WORKSPACE}`);

        return data;
    },
    post: async (req: PostWorkspaceReqBody): Promise<AxiosResponse<PostWorkspaceResBody>> => {
        const data = await customAxios.post<PostWorkspaceResBody>(`${VITE_API_PREFIX_WORKSPACE}`, req);

        return data;
    },
    delete: async (workspaceId: string): Promise<AxiosResponse> => {
        const data = await customAxios.delete(`${VITE_API_PREFIX_WORKSPACE}/${workspaceId}`);

        return data;
    },
};

export const useGetWorkspaceQuery = (workspaceId: string) =>
    useQuery([QUERY_KEY, workspaceId], () => api.get(workspaceId));

export const useGetWorkspacesQuery = () => useQuery([QUERY_KEY], () => api.getAll());

export const usePostWorkspaceQuery = (
    req: PostWorkspaceReqBody,
    options?: UseMutationOptions<
        AxiosResponse<PostWorkspaceResBody>,
        AxiosError,
        PostWorkspaceReqBody
    >,
) => {
    const queryClient = useQueryClient();

    return useMutation(() => api.post(req), {
        ...options,
        onSuccess: (res) => {
            queryClient.invalidateQueries([QUERY_KEY, res.data]);
        },
    });
};

export const useDeleteWorkspaceQuery = (
    workspaceId: string,
    options?: UseMutationOptions<AxiosResponse, AxiosError>,
) => {
    const queryClient = useQueryClient();

    return useMutation(() => api.delete(workspaceId), {
        ...options,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY, workspaceId]);
        },
    });
};
