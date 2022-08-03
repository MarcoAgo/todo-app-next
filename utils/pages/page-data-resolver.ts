import { GetStaticPropsContext } from "next"
import { AuthorDocument, HomepageDocument, I18NLocale, MainNavigationDocument, NavigationItem } from "../../graphql/generated/graphql-generated"
import { graphqlRequestClient } from "../../graphql/utils/graphql-client"

export enum PagesEnum {
    HOMEPAGE = 'homepage',
    AUTHOR = 'author',
    WHY = 'why',
    CONTACTS = 'contacts',
    APP = 'app',
    APP_TODOS = 'app_todos',
    APP_CATEGORIES = 'app_categories',
}

const PagesQuery = {
    [PagesEnum.HOMEPAGE]: HomepageDocument,
    [PagesEnum.AUTHOR]: AuthorDocument,
    [PagesEnum.WHY]: HomepageDocument,
    [PagesEnum.CONTACTS]: HomepageDocument,
    [PagesEnum.APP]: HomepageDocument,
    [PagesEnum.APP_TODOS]: HomepageDocument,
    [PagesEnum.APP_CATEGORIES]: HomepageDocument,
}

export const resolvePath = (params: any) => {
    return params.path ? `/${params.path.join('/')}` : '/'
} 

// TODO: Manage nested items path match
export const pageQueryResolver = async (locale: I18NLocale, ctx: GetStaticPropsContext) => {
    const { params } = ctx
    
    const path = resolvePath(params)

    if (path !== '/') {
        const { renderNavigation } = await graphqlRequestClient.request(MainNavigationDocument, { locale, path }) || {}
        const itemKey = renderNavigation[0].page_id
        return { pageQuery: PagesQuery[itemKey as PagesEnum], pageQueryName: itemKey}
    }

    return { pageQuery: PagesQuery[PagesEnum.HOMEPAGE], pageQueryName: PagesEnum.HOMEPAGE }
}