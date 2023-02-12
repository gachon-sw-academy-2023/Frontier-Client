import { Table } from "dexie";

interface UserCollection {
    id: string;
    name: string;
    email: string;
    password: string;
    profileImage: string;
}

export interface UserTable {
    user: Table<UserCollection>;
}

export const userSchema = {
    user: "id, email, [email+password]",
};
