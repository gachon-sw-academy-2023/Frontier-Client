import { AxiosError, AxiosResponse } from "axios";
import customAxios from "@/utils/customAxios";
import { useMutation, UseMutationOptions } from "react-query";
import { UserLogin, User } from "@/interfaces/userInterface";

export const API_URL = "/login";

const fetcher = async (user: UserLogin): Promise<AxiosResponse<User>> => {
    const data = await customAxios.post<UserLogin, AxiosResponse<User>>(API_URL, user);

    return data;
};

const useLoginQuery = (options?: UseMutationOptions<AxiosResponse<User>, AxiosError, UserLogin>) =>
    useMutation(fetcher, { ...options });

export default useLoginQuery;
