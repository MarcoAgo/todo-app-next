import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { getDocumentQuery } from "../../api/req/shared/get-document"
import { LocalesEnum } from "../../utils/pages/get-document"

export const useDocument = (document: string) => {
    const { locale } = useRouter()
    return useQuery([document], () => getDocumentQuery(document, locale as LocalesEnum))
}