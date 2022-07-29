import { GetStaticPropsContext } from "next/types"
import { HomepageDocument, MenusMenu, MenusMenuItemEntity } from "../../graphql/generated/graphql-generated"

export enum PagesEnum {
    HOMEPAGE = 'homepage',
    ABOUT = 'about',
    APP = 'app',
    APP_TODOS = 'app_todos',
    APP_CATEGORIES = 'app_categories',
}

export const resolvePath = (params: any) => {
    return params.path ? `/${params.path.join('/')}` : '/'
}

export interface MenuLocationEntityData extends MenusMenuItemEntity {
    query: string
    key: string
}

export const resolveGraphqlQueryByLocation = (location: MenusMenuItemEntity | undefined) => {
    if (!location ) return {}
    switch (location?.attributes?.title) {
        case PagesEnum.HOMEPAGE:
            return { 
                ...location.attributes, 
                query: HomepageDocument, 
                key: location.attributes.title
            }

        default:
            return {}
    }
}

export const getRequestDocumentResolver = (context: GetStaticPropsContext, navigation: MenusMenu) => {
    const { params = {} } = context
    const path = resolvePath(params)

    const location = navigation.items
        ? navigation.items.data.find((item) => item.attributes?.url === path)
        : {}

    return resolveGraphqlQueryByLocation(location)
}