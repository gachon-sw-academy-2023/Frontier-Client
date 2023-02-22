/* eslint-disable @typescript-eslint/no-explicit-any */
import { atom, atomFamily } from "recoil";

export interface ICard {
    id: number;
    title: string;
    text: string;
    date: string;
}

export interface CardStateInterface {
    [key: string]: ICard[];
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
    id: number;
    date: string;
    description: string;
    title: string;
}

export interface IWorkspace {
    [key: string]: IBoard[];
}

export const workspaceState = atom<IWorkspace>({
    key: "board",
    default: {
        workspace1: [{ id: 123123, date: "1-1-1", description: "1", title: "1" }],
    },
    effects: [localStorageEffect("board")],
});
