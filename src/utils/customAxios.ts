import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const { BASE_URL } = import.meta.env;

const baseAxios: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    return {
        ...config,
        headers: { Authorization: user?.id || "" },
    };
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.interceptors.request.use(onRequest, onRequestError);
    instance.interceptors.response.use(onResponse, onResponseError);

    return instance;
};

const customAxios = setInterceptors(baseAxios);

export default customAxios;
