/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInterface } from "@/interfaces/cardInterface";
import { BoardInterface } from "@/interfaces/boardInterface";
import { atom } from "recoil";

export interface CardStateInterface {
    [key: string]: CardInterface[];
}

export interface BoardStateInterface {
    [key: string]: BoardInterface[];
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

export const cardState = atom<CardStateInterface>({
    key: "card",
    default: {},
    effects: [localStorageEffect("card")],
});

export const boardState = atom<CardStateInterface[]>({
    key: "board",
    default: [],
});
