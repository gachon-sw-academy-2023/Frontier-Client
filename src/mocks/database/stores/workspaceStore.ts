import { Table } from "dexie";

interface WorkspaceCollection {
    id: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
    member: string[];
}

export interface WorkspaceTable {
    workspace: Table<WorkspaceCollection>;
}

export const workspaceSchema = {
    workspace: "id, *member",
};
