import { Table } from "dexie";

interface ListCollection {
    id: string;
    boardId: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
    position: number;
}

export interface ListTable {
    list: Table<ListCollection>;
}

export const listSchema = {
    list: "id, boardId",
};
