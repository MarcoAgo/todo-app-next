import { atom } from "jotai";

export type Page = {
    data: {
        attributes: {
            components: any[]
        }
    }
}

export const documentAtom = atom<Partial<Page>>({})