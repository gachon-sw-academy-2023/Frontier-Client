export interface SignUpRequestBody {
    name: string;
    email: string;
    password: string;
}

export interface SignUpResponseBody {
    id: string;
    name: string;
}
