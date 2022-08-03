import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import type { NextPage } from 'next'
import { fetchNavigation } from "../utils/pages/fetch-navigation";
import { pageQueryResolver } from "../utils/pages/page-data-resolver";
import { I18NLocale } from "../graphql/generated/graphql-generated";
import { graphqlRequestClient } from "../graphql/utils/graphql-client";
import Controller from "../components/controller/Controller";
import Header from "../components/organisms/header/Header";

interface ICatchAllPageProps {
    dehydratedState: DehydratedState
    error?: Partial<Error>
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
                <Controller pageQuery={pageQuery} pageQueryName={pageQueryName} />
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
        const { pageQuery, pageQueryName } = await pageQueryResolver(locale as I18NLocale, ctx)
        const page = await graphqlRequestClient.request(pageQuery)

        queryClient.setQueryData(['mainNavigation', { locale }], navigation)
        queryClient.setQueryData([pageQueryName], page)

        const end = performance.now()

        console.log(`page request took ${end - start} ms`)

        return { 
            props: {
                dehydratedState: dehydrate(queryClient),
                pageQuery,
                pageQueryName,
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