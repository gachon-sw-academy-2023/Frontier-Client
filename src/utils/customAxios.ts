import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const { VITE_API_BASE_URL } = import.meta.env;

const baseAxios: AxiosInstance = axios.create({
    baseURL: VITE_API_BASE_URL,
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

/*
Component 외부에서 useNavigate등 hooks 사용 불가로 임시로 window.location.href 사용
*/
const onResponseError = (error: AxiosError): Promise<AxiosError> => {
    if (error.response && error.response.status >= 500) {
        window.location.href = "/error";
        return new Promise(() => {});
    }
    return Promise.reject(error);
};

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.interceptors.request.use(onRequest, onRequestError);
    instance.interceptors.response.use(onResponse, onResponseError);

    return instance;
};

const customAxios = setInterceptors(baseAxios);

export default customAxios;
