import { atom } from "jotai";
import { CategoryEntity } from "../../../graphql/generated/graphql-generated";

export const categoriesAtom = atom<CategoryEntity[]>([])