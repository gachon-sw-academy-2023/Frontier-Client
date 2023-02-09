import { User } from "@/interfaces/userInterface";
import { atom, AtomEffect, DefaultValue } from "recoil";

const localStorageEffect: <T>(key: string) => AtomEffect<T> =
    (key: string) =>
    ({ setSelf, onSet }) => {
        const savedValue = localStorage.getItem(key);
        if (savedValue !== null) {
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue) => {
            if (newValue instanceof DefaultValue) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
        });
    };

export const userAtom = atom<User>({
    key: "user",
    default: {
        name: "",
        id: "",
    },
    effects: [localStorageEffect<User>("user")],
});
