import { dehydrate, DehydratedState, QueryClient, useQuery, UseQueryResult } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import type { NextPage } from 'next'
import { resolvedUrlFromParams } from "../api/utils/path-resolver";
import { getDocument } from "../utils/pages/get-document/get-current-document";
import { LocalesEnum, Navigation } from "../utils/pages/get-document";
import { getDocumentQuery } from "../api/req/shared/get-document";
import { getNavigationQuery } from "../api/req/shared/get-navigation";
import Controller from "../components/controller/Controller";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/organisms/header/Header";

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
    const { push, asPath } = useRouter()

    useEffect(() => {
        if (document === 'homepage' && asPath !== '/') {
            push('/')
        }
    }, [asPath, push])

    return (
        <div>
            {/* ricordarsi di mettere la next head basata sui dati di pagina (og: tags e seo data) */}
            <Header />
            <div className="container">
                <Controller document={document} />
            </div>
        </div>
    )
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const queryClient = new QueryClient()
    const { locale } = ctx
    const currentPath = resolvedUrlFromParams(ctx)

    try {
        const start = performance.now()
        // prefetch navigation data
        await queryClient.prefetchQuery(['navigation'], () => getNavigationQuery(locale as LocalesEnum))
        const navigation = queryClient.getQueryData(['navigation']) as NavQueryData
        const navArray = Object.values(navigation.pages)

        // prefetch document data
        const document = getDocument(navArray, currentPath)
        await queryClient.prefetchQuery([document], () => getDocumentQuery(document, locale as LocalesEnum))

        const end = performance.now()

        console.log(`page request took ${end - start} ms`)
        
        return {
            props: {
                dehydratedState: dehydrate(queryClient),
                document,
            },
            revalidate: 60,
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