export interface LoginReqBody {
    email: string;
    password: string;
}

export interface LoginResBody {
    id: string;
    email: string;
    name: string;
    profileImage: string;
}

export interface RegisterReqBody {
    email: string;
    name: string;
    password: string;
}
