import { DefaultList } from "@/interfaces/listInterface";

export interface DefaultBoard {
    id: string;
    workspaceId: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
}

export interface GetBoardResBody extends DefaultBoard {
    list?: DefaultList[];
}

export interface PostBoardReqBody {
    workspaceId: string;
    title: string;
}

export interface PostBoardResBody {
    data: string;
}
