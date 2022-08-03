import { GetStaticPropsContext } from "next"
import { AuthorDocument, ContactsDocument, HomepageDocument, I18NLocale, MainNavigationDocument, NavigationItem, WhyDocument } from "../../graphql/generated/graphql-generated"
import { graphqlRequestClient } from "../../graphql/utils/graphql-client"

export enum PagesEnum {
    HOMEPAGE = 'homepage',
    AUTHOR = 'author',
    WHY = 'why',
    CONTACTS = 'contact',
    APP = 'app',
    APP_TODOS = 'app_todos',
    APP_CATEGORIES = 'app_categories',
}

const PagesQuery = {
    [PagesEnum.HOMEPAGE]: HomepageDocument,
    [PagesEnum.AUTHOR]: AuthorDocument,
    [PagesEnum.WHY]: WhyDocument,
    [PagesEnum.CONTACTS]: ContactsDocument,
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