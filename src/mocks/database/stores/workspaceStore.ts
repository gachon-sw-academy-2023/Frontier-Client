import { Table } from "dexie";

interface MemberCollection {
    id: string;
    role: string;
}

interface WorkspaceCollection {
    id: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
    member: MemberCollection[];
}

export interface WorkspaceTable {
    workspace: Table<WorkspaceCollection>;
}

export const workspaceSchema = {
    workspace: "id, member.id",
};
