export interface Board {
    id: string;
    workspaceId: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
}

export interface GetWorkspaceResBody {
    id: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
    board?: Board[];
}

export interface PostWorkspaceReqBody {
    title: string;
}

export interface PostWorkspaceResBody {
    data: string;
}
