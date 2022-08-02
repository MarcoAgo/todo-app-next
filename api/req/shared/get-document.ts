import get, { BASE_URL } from "../../methods/get"

export const getDocumentQuery = async (document: string) => {
    const url = `${BASE_URL}/${document}`
    const params = { populate: 'deep' }
    return await get({ url, params })
}