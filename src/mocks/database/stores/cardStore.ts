import { Table } from "dexie";

interface DefaultMeta {
    id: string;
    title: string;
    createdBy: string;
    createdAt: string;
    modifiedAt: string;
}

interface MemberModel {
    id: string;
    name: string;
    profileImage: string;
}

interface LabelModel {
    isChecked: boolean;
    color: string;
    title: string;
}

interface ChecklistModel {
    isChecked: boolean;
    title: string;
}

interface DateModel {
    from: string;
    to: string;
}

interface CardContentModel {
    members?: MemberModel[];
    labels?: LabelModel[];
    checklist?: ChecklistModel[];
    dates?: DateModel;
    attachments?: string;
    markdown?: string;
}

interface CardModel extends DefaultMeta {
    listId: string;
    description: string;
    position: number;
    contents?: Partial<CardContentModel>;
}

export interface CardTable {
    card: Table<CardModel>;
}

export const cardSchema = {
    card: "id, listId",
};
