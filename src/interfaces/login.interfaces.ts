// eslint-disable-next-line import/no-extraneous-dependencies
import { ResponseComposition, RestContext, RestRequest } from "msw";

export interface LoginRequestProps {
    email: string;
    password: string;
}

export interface LoginResponseProps {
    id: string;
}

export interface LoginMock {
    req: RestRequest<LoginRequestProps>;
    res: ResponseComposition<LoginResponseProps>;
    ctx: RestContext;
}
