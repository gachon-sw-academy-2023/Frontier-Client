import { DefaultBoard } from "@/interfaces/boardInterface";

export interface GetWorkspaceResBody {
    id: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
    board?: DefaultBoard[];
}

export interface PostWorkspaceReqBody {
    title: string;
}

export interface PostWorkspaceResBody {
    data: string;
}
