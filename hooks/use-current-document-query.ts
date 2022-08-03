import { useMemo } from "react";
import { useAuthorQuery, useHomepageQuery } from "../graphql/generated/graphql-generated";
import { PagesEnum } from "../utils/pages/page-data-resolver";

export const currentDocumentFactory = (key: string) => {
    if (!key) return null;

    switch (key) {
        case PagesEnum.HOMEPAGE:
            return useHomepageQuery

        case PagesEnum.AUTHOR:
            return useAuthorQuery

        default:
            return null
    }
}

export const useCurrentDocumentQuery = (key: string) => {
    return useMemo(() => currentDocumentFactory(key), [key])
}