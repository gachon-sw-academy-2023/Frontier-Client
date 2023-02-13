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

/* 추후 401 에러, 500번대 에러 처리 구현 예정
1. response code: 401, message: USER_NOT_LOGIN
사용자가 로그인 없이 특정 컨텐츠에 접근 요청한 것이므로 로그인 페이지로 리다이렉트
로그인 성공 시 이전 request를 다시 보내주어야 함 (response.config)
2. response code: 401, message: USER_NOT_AUTHORIZED
사용자가 로그인은 했으나, 특정 컨텐츠에 접근 권한이 없는 것이므로 이전 페이지로 리다이렉트
3. response code >= 500
서버 에러이므로 에러 페이지로 리다이렉트
Axios interceptor 이용 구현 또는 react-query + error boundary 이용 구현? */
const onResponseError = (error: AxiosError): Promise<AxiosError> => Promise.reject(error);

const setInterceptors = (instance: AxiosInstance): AxiosInstance => {
    instance.interceptors.request.use(onRequest, onRequestError);
    instance.interceptors.response.use(onResponse, onResponseError);

    return instance;
};

const customAxios = setInterceptors(baseAxios);

export default customAxios;
