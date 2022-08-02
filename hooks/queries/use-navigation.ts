import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { getNavigationQuery } from "../../api/req/shared/get-navigation"
import { LocalesEnum } from "../../utils/pages/get-document"


export const useNavigation = (): UseQueryResult => {
    const { locale } = useRouter()
    return useQuery(['navigation'], () => getNavigationQuery(locale as LocalesEnum))
} 
