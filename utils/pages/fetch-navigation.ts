import { MainNavigationDocument, NavigationItem } from "../../graphql/generated/graphql-generated"
import { graphqlRequestClient } from "../../graphql/utils/graphql-client"

export type RenderNavigation = {
    renderNavigation: NavigationItem[]
}

export const fetchNavigation = async (locale?: string): Promise<RenderNavigation> => {
    const result: RenderNavigation = await graphqlRequestClient.request(MainNavigationDocument, { locale })
    return result
}