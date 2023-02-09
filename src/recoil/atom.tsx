/* eslint-disable @typescript-eslint/no-explicit-any */
import { CardInterface } from "@/interfaces/cardInterface";
import { atom } from "recoil";

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

export const cardState = atom<CardStateInterface>({
    key: "card",
    default: {},
    effects: [localStorageEffect("card")],
});
