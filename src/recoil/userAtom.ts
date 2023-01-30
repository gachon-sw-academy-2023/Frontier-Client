import { User } from "@/interfaces/userInterface";
import { atom } from "recoil";

export const userAtom = atom<User>({
    key: "user",
    default: {
        name: "",
        id: "",
    },
});
