import { useQuery } from "@tanstack/react-query"
import { BASE_URL } from "../../api/methods/get"
import { getDocumentQuery } from "../../api/req/shared/get-document"

export const useDocument = (document: string) => {
    return useQuery([document], () => getDocumentQuery(document))
}