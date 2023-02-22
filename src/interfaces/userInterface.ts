export interface GetUserResBody {
    id: string;
    name: string;
    email: string;
    profileImage: string;
}

export interface PatchUserReqBody {
    profileImage: string;
}
