import { atom } from "recoil";
import { Category, CategoryEntity } from "../../../graphql/generated/graphql-generated";

export const categoriesAtom = atom<CategoryEntity[]>({
    key: "categories",
    default: [],
})