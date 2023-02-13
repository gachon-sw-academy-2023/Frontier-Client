export interface DefaultCard {
    id: string;
    listId: string;
    createdBy: string;
    modifiedAt: string;
    title: string;
    description: string;
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