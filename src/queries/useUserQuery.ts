import { AxiosError, AxiosResponse } from "axios";
import customAxios from "@/utils/customAxios";
import { useMutation, UseMutationOptions, useQuery, useQueryClient } from "@tanstack/react-query";
import { GetUserResBody, PatchUserReqBody } from "@/interfaces/userInterface";

const { VITE_API_PREFIX_USER } = import.meta.env;

export const QUERY_KEY = "user";

export const api = {
    get: async (): Promise<AxiosResponse<GetUserResBody>> => {
        const data = await customAxios.get<GetUserResBody>(`${VITE_API_PREFIX_USER}`);

        return data;
    },
    getAll: async (userId: string): Promise<AxiosResponse<GetUserResBody[]>> => {
        const data = await customAxios.get<GetUserResBody[]>(`${VITE_API_PREFIX_USER}/${userId}`);

        return data;
    },
    patchProfile: async (userId: string, req: PatchUserReqBody): Promise<AxiosResponse> => {
        const data = await customAxios.patch<PatchUserReqBody, AxiosResponse>(
            `${VITE_API_PREFIX_USER}/${userId}`,
            req,
        );

        return data;
    },
};

export const useGetUserQuery = (userId: string) => useQuery([QUERY_KEY, userId], () => api.get());

export const useGetUsersQuery = (userId: string) =>
    useQuery([QUERY_KEY, userId], () => api.getAll(userId));

export const usePatchUserQuery = (
    userId: string,
    req: PatchUserReqBody,
    options?: UseMutationOptions<AxiosResponse, AxiosError, PatchUserReqBody>,
) => {
    const queryClient = useQueryClient();

    return useMutation(() => api.patchProfile(userId, req), {
        ...options,
        onSuccess: () => {
            queryClient.invalidateQueries([QUERY_KEY, userId]);
        },
    });
};
