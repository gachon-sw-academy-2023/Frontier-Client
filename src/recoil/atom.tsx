/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom } from "recoil";

export interface CardInterface {
    id: number;
    text: string;
}

export interface CardStateInterface {
    [key: string]: CardInterface[];
}

const localStorageEffect = (key: string) => {
    return ({ setSelf, onSet }: any) => {
        const savedValue = localStorage.getItem(key);
        if (savedValue != null) {
            setSelf(JSON.parse(savedValue));
        }

        onSet((newValue: any, _: any, isReset: boolean) => {
            if (isReset) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(newValue));
            }
        });
    };
};

export const cardState = atom<CardStateInterface>({
    key: "card",
    default: {
        Todo: [
            { id: 1, text: "11" },
            { id: 2, text: "22" },
            { id: 3, text: "33" },
            { id: 4, text: "44" },
        ],
        Doing: [],
        Done: [],
    },
    effects: [localStorageEffect("card")],
});
