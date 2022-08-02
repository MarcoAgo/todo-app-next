export type ImageDataType = {
    data: {
        id: number
        attributes: {
            name: string
            alternativeText: string
            url: string
            provider: string
            height: number
            width: number
            ext: string 
        }
    }
}