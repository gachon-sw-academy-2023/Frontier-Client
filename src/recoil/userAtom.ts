import { atom, AtomEffect, DefaultValue } from "recoil";
import { GetUserResBody } from "@/interfaces/userInterface";

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

export const userAtom = atom<GetUserResBody>({
    key: "user",
    default: {
        name: "",
        id: "",
        profileImage: "",
        email: "",
    },
    effects: [localStorageEffect<GetUserResBody>("user")],
});
