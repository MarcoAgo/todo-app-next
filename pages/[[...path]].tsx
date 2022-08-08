import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import type { NextPage } from 'next'
import { fetchNavigation } from "../utils/pages/fetch-navigation";
import { pageQueryResolver } from "../utils/pages/page-data-resolver";
import {I18NLocale, NavigationItem} from "../graphql/generated/graphql-generated";
import { graphqlRequestClient } from "../graphql/utils/graphql-client";
import Controller from "../components/controller/Controller";
import Header from "../components/organisms/header/Header";
import NotFoundPage from "../components/error/404";

interface ICatchAllPageProps {
    dehydratedState: DehydratedState
    error?: Partial<Error>
    navigation?: {
        renderNavigation: NavigationItem[]
    },
    pageQuery: string
    pageQueryName: string
}

const SwitchController: NextPage<ICatchAllPageProps> = (props) => {
    const { pageQuery, pageQueryName } = props

    return (
        <div>
            {/* ricordarsi di mettere la next head basata sui dati di pagina (og: tags e seo data) */}
            <Header />
            <div className="container">
                {pageQuery && pageQueryName
                    ? <Controller pageQuery={pageQuery} pageQueryName={pageQueryName} />
                    : <NotFoundPage />
                }
            </div>
        </div>
    )
}


export const getStaticProps = async (ctx: GetStaticPropsContext) => {
    const { locale } = ctx
    const queryClient = new QueryClient()

    try {
        const start = performance.now()

        const navigation = await fetchNavigation(locale)
        const { pageQuery, pageQueryName } = await pageQueryResolver(locale as I18NLocale, ctx) || {}

        if (pageQuery && pageQueryName) {
            const page = await graphqlRequestClient.request(pageQuery, { locale })
            queryClient.setQueryData([pageQueryName, { locale }], page)
        }

        queryClient.setQueryData(['mainNavigation', { locale }], navigation)

        const end = performance.now()

        console.log(`page request took ${end - start} ms`)

        return {
            props: {
                dehydratedState: dehydrate(queryClient) || {},
                pageQuery: pageQuery || null,
                pageQueryName: pageQueryName || null,
            },
            revalidate: 10000
        }
    } catch (e: unknown) {
        console.log('error', e)
        return { props: { error: e } }
    }
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [],
    fallback: true
})

export default SwitchController