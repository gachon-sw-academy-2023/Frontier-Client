/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInterface } from "@/interfaces/cardInterface";
import { atom, atomFamily } from "recoil";

export interface CardStateInterface {
    [key: string]: CardInterface[];
}

const localStorageEffect =
    (key: string) =>
    ({ setSelf, onSet }: any) => {
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

export const cardState = atomFamily<CardStateInterface, string>({
    key: "card",
    default: () => ({}),
    effects: (id) => [localStorageEffect(`card${id}`)],
});

export interface IBoard {
    boardId: number;
    date: string;
    boardTitle: string;
}
export interface IBoardState {
    [key: string]: IBoard[];
}
export const boardState = atom<IBoardState>({
    key: "board",
    default: {},
    effects: [localStorageEffect("board")],
});
