import { AxiosError, AxiosResponse } from "axios";
import customAxios from "@/utils/customAxios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { LoginReqBody, LoginResBody, RegisterReqBody } from "@/interfaces/authInterface";

const { VITE_API_PREFIX_AUTH } = import.meta.env;

export const api = {
    login: async (req: LoginReqBody): Promise<AxiosResponse<LoginResBody>> => {
        const data = await customAxios.post<LoginReqBody, AxiosResponse<LoginResBody>>(
            `${VITE_API_PREFIX_AUTH}/login`,
            req,
        );

        return data;
    },
    register: async (req: RegisterReqBody): Promise<AxiosResponse> => {
        const data = await customAxios.post<RegisterReqBody, AxiosResponse>(
            `${VITE_API_PREFIX_AUTH}/register`,
            req,
        );

        return data;
    },
};

export const useLoginQuery = (
    options?: UseMutationOptions<AxiosResponse<LoginResBody>, AxiosError, LoginReqBody>,
) => useMutation(api.login, { ...options });

export const useRegisterQuery = (
    options?: UseMutationOptions<AxiosResponse, AxiosError, RegisterReqBody>,
) => useMutation(api.register, { ...options });
