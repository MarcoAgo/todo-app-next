import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import type { NextPage } from 'next'
import get, { BASE_URL } from "../api/methods/get";
import { resolvedUrlFromParams } from "../api/utils/path-resolver";
import { getDocument } from "../utils/pages/get-document/get-current-document";
import { Navigation } from "../utils/pages/get-document";
interface ICatchAllPageProps {
    dehydratedState: DehydratedState
    error?: Partial<Error>
}

const SwitchController: NextPage<ICatchAllPageProps> = () => {
    

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
    const { params, locale } = ctx
    const currentPath = resolvedUrlFromParams(ctx)

    try {
        const navigationRequestParams = {
            url: `${BASE_URL}/navigation/render/main-navigation`,
            params: { locale, type: 'RFR' }
        }
        const navigation = await get(navigationRequestParams)
        const navArray = Object.values(navigation.pages) as Navigation[]
        const document = getDocument(navArray, currentPath)
        
        const page = await get({ url: `${BASE_URL}/${document}?populate=deep` })

        queryClient.setQueryData([document], page)
        
        return {
            props: {
                dehydratedState: dehydrate(queryClient)
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