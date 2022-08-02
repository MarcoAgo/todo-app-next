import { LocalesEnum } from "../../../utils/pages/get-document"
import get, { BASE_URL } from "../../methods/get"

export const getDocumentQuery = async (document: string, locale: LocalesEnum) => {
    const url = `${BASE_URL}/${document}`
    const params = { populate: 'deep', locale }
    return await get({ url, params })
}