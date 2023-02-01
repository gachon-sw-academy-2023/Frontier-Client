import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useRecoilValue } from "recoil";
import { userAtom } from "@/recoil/userAtom";

const { BASE_URL } = import.meta.env;

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const token = useRecoilValue(userAtom);

    return { ...config, headers: { Authorization: token.id } };
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.interceptors.request.use(onRequest, onRequestError);
    instance.interceptors.response.use(onResponse, onResponseError);

    return instance;
};

const customAxios = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
    });

    return setInterceptors(instance);
};

export default customAxios;
