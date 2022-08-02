export type HeaderData = {
    name: string
    value: string
}

export interface IGetRequest {
    url: string,
    additionalHeaders?: HeaderData[]
    additionalRequestParams?: any
    params?: any
}

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:1337/api'
export const BASE_UPLOADS_URL = process.env.NEXT_PUBLIC_BASE_UPLOADS_URL || 'http://localhost:1337'

const get = async ({ url, additionalHeaders, additionalRequestParams = {}, params = null }: IGetRequest) => {
    const query = new URLSearchParams(params)
    
    const requestUrl = `${url}${params ? '?' : ''}${query}`
    const headers = new Headers()

    if (additionalHeaders) {
        additionalHeaders.forEach((header: HeaderData) => headers.append(header.name, header.value))
    }

    const init = { method: 'GET', headers, ...additionalRequestParams }

    return await fetch(requestUrl, init).then(res => res.json())
}

export default get