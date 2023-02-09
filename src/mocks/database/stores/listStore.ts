import { Table } from "dexie";

interface ListModel {
    id: string;
    boardId: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
    position: number;
}

export interface ListTable {
    list: Table<ListModel>;
}

export const listSchema = {
    list: "id, boardId",
};
