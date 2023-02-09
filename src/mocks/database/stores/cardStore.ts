import { Table } from "dexie";

interface MemberCollection {
    id: string;
    name: string;
    profileImage: string;
}

interface LabelCollection {
    isChecked: boolean;
    color: string;
    title: string;
}

interface ChecklistCollection {
    isChecked: boolean;
    title: string;
}

interface DateCollection {
    from: string;
    to: string;
}

interface CardContentCollection {
    members: MemberCollection[];
    labels: LabelCollection[];
    checklist: ChecklistCollection[];
    dates: DateCollection;
    attachments: string;
    markdown: string;
}

interface CardCollection {
    id: string;
    listId: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
    title: string;
    description: string;
    position: number;
    contents?: Partial<CardContentCollection>;
}

export interface CardTable {
    card: Table<CardCollection>;
}

export const cardSchema = {
    card: "id, listId, [listId+title+description+position]",
};
