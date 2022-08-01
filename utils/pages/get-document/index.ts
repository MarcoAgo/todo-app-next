export type NavigationType = 'INTERNAL' | 'EXTERNAL'
export type AudienceType = any[]
export enum LocalesEnum {
    IT = 'it',
    EN = 'en'
}

export type ParentType = {
    id: number,
    title: string
    type: NavigationType
    path: string
    externalPath: string | null
    uiRouterKey: string
    menuAttached: boolean
    order: number
    collapsed: boolean
    additionalFields: any
    createdAt: string
    updatedAt: string
}

export type Navigation = {
    id: number
    title: string
    path: string
    externalPath?: string
    templateName: string
    menuAttached: boolean
    slug: string
    parent: ParentType | null
    related: {
      id: number
      contentType: string
    }
  }