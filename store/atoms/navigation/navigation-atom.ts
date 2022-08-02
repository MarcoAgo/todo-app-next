import { atom } from "jotai";
import { Navigation } from "../../../utils/pages/get-document";

const navigationAtom = atom<Navigation[] | never[]>([])

export default navigationAtom