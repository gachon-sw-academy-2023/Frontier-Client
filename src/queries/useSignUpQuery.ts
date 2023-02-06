import { AxiosError, AxiosResponse } from "axios";
import customAxios from "@/utils/customAxios";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { UserSignUp, User } from "@/interfaces/userInterface";

export const API_URL = "/auth/signup";

const fetcher = async (user: UserSignUp): Promise<AxiosResponse<User>> => {
    const data = await customAxios.post<UserSignUp, AxiosResponse<User>>(API_URL, user);

    return data;
};

const useSignUpQuery = (
    options?: UseMutationOptions<AxiosResponse<User>, AxiosError, UserSignUp>,
) => useMutation(fetcher, { ...options });

export default useSignUpQuery;
