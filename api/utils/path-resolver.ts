import { GetStaticPropsContext } from "next/types"

/**
 * Returns builded path by context params
 * 
 * @param params 
 * @returns 
 */
export const resolvedUrlFromParams = (context: GetStaticPropsContext) => {
    const { params } = context
    const paths = params?.path as string[]
    return paths ? `/${paths.join('/')}` : '/'
}