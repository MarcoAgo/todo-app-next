import { dehydrate, DehydratedState, QueryClient, useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import type { NextPage } from 'next'
import { resolvedUrlFromParams } from "../api/utils/path-resolver";
import { getDocument } from "../utils/pages/get-document/get-current-document";
import { LocalesEnum, Navigation } from "../utils/pages/get-document";
import { getDocumentQuery } from "../api/req/shared/get-document";
import { getNavigationQuery } from "../api/req/shared/get-navigation";
import { useNavigation } from "../hooks/queries/use-navigation";
import { useDocument } from "../hooks/queries/use-document";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { documentAtom } from "../store/atoms/document/document-atom";
import navigationAtom from "../store/atoms/navigation/navigation-atom";

type NavQueryData = {
    pages: Navigation[]
    root: any
}
interface ICatchAllPageProps {
    dehydratedState: DehydratedState
    error?: Partial<Error>
    document: string
}

const SwitchController: NextPage<ICatchAllPageProps> = (props) => {
    const { document } = props
    const navigation = useNavigation()
    const page = useDocument(document)

    // store
    const [, setDocument] = useAtom(documentAtom)
    const [, setNavigation] = useAtom(navigationAtom)

    useEffect(() => {
        if (navigation.data) setNavigation(navigation.data as Navigation[])
        if (page.data) setDocument(page.data)
    }, [navigation.data, page.data])

    return (
        <div>
            {/* ricordarsi di mettere la next head basata sui dati di pagina (og: tags e seo data) */}
            <div className="header"></div>
            <div className="container">
                Component controller
            </div>
        </div>
    )
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const queryClient = new QueryClient()
    const { locale } = ctx
    const currentPath = resolvedUrlFromParams(ctx)

    try {
        // prefetch navigation data
        await queryClient.prefetchQuery(['navigation'], () => getNavigationQuery(locale as LocalesEnum))
        const navigation = queryClient.getQueryData(['navigation']) as NavQueryData
        const navArray = Object.values(navigation.pages)

        // prefetch document data
        const document = getDocument(navArray, currentPath)
        await queryClient.prefetchQuery([document], () => getDocumentQuery(document))
        
        return {
            props: {
                dehydratedState: dehydrate(queryClient),
                document,
            }
        }
      } catch (e: any) {
        console.log('error', e)
        return { props: { error: { ...e } } }
      }
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [],
    fallback: true
})

export default SwitchController