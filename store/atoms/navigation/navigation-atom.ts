import { atom } from "jotai";
import { MenusMenuEntity } from "../../../graphql/generated/graphql-generated";

const navigationAtom = atom<Partial<MenusMenuEntity[]>>([])

export default navigationAtom