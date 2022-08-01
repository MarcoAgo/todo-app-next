import { dehydrate, DehydratedState, QueryClient } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import type { NextPage } from 'next'
import { graphqlRequestClient } from "../graphql/utils/graphql-client";
import { getRequestDocumentResolver, MenuLocationEntityData } from "../utils/pages/page-data-resolver";
import { MenusMenuEntity, MenusMenuItemEntity, NavDocument, useNavQuery } from "../graphql/generated/graphql-generated";
import { useAtom } from "jotai";
import navigationAtom from "../store/atoms/navigation/navigation-atom";
import { useEffect } from "react";
import { useCurrentDocumentQuery } from "../hooks/use-current-document-query";
import { documentAtom } from "../store/atoms/document/document-atom";

interface ICatchAllPageProps {
    dehydratedState: DehydratedState
    error?: Partial<Error>
    document: MenuLocationEntityData
}

const SwitchController: NextPage<ICatchAllPageProps> = (props) => {
    const useDocumentQuery = useCurrentDocumentQuery(props.document.key)

    // store
    const [, setNav] = useAtom(navigationAtom)
    const [, setDocument] = useAtom(documentAtom)
    const navigation = useNavQuery(graphqlRequestClient)

    useEffect(() => {
        if (navigation.data) {
            setNav(navigation.data as MenusMenuEntity[])
        }
    }, [JSON.stringify(navigation)])

    useEffect(() => {
        if (props.document.key) {
            setDocument({
                ...props.document,
                useDocumentQuery,
            })
        }
    }, [])

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

    try {
        // request navigation data
        const { menusMenus } = await graphqlRequestClient.request(NavDocument)
        queryClient.setQueryData(['nav'], menusMenus.data)

        const { attributes: navigation } = menusMenus.data.find(
            (menu: MenusMenuItemEntity) => menu.attributes?.title === 'main'
        )        

        // retrieve page data
        const document = getRequestDocumentResolver(ctx, navigation) as MenuLocationEntityData
        
        // do request to get data
        const result = await graphqlRequestClient.request(document.query)
    
        // cache data into query client
        queryClient.setQueryData([document.key], result[document.key].data)
    
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