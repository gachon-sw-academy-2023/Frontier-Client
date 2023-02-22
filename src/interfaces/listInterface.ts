export interface DefaultCard {
    id: number;
    listId: string;
    date: string;
    title: string;
    text: string;
    createdBy: string;
    modifiedAt: string;
    position: number;
}

export interface DefaultList {
    id: string;
    title: string;
    createdBy: string;
    modifiedAt: string;
    position: number;
    card?: DefaultCard[];
}

export interface GetListResBody extends DefaultList {
    boardId: string;
}

export interface PostListReqBody {
    boardId: string;
    title: string;
}

export interface PostListResBody {
    data: string;
}
