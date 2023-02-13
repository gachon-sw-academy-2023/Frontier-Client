import { Table } from "dexie";

interface BoardCollection {
    id: string;
    workspaceId: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
}

export interface BoardTable {
    board: Table<BoardCollection>;
}

export const boardSchema = {
    board: "id, workspaceId",
};
