import { Table } from "dexie";

interface UserModel {
    id: string;
    name: string;
    email: string;
    password: string;
    profileImage?: string;
}

export interface UserTable {
    user: Table<UserModel>;
}

export const userSchema = {
    user: "id",
};
