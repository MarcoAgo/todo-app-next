import { useQuery } from "@tanstack/react-query"
import dynamic from "next/dynamic"
import { FC, useEffect, useState } from "react"
import { graphqlRequestClient } from "../../graphql/utils/graphql-client"

// imports
const Header = dynamic(import('../organisms/header/Header'), { ssr: true })
const HeroOpener = dynamic(import('../organisms/hero-opener/HeroOpener'), { ssr: true })
const TitleDescriptionImage = dynamic(import('../organisms/title-description-image/TitleDescriptionImage'), { ssr: true })
const Title = dynamic(import('../atoms/title/Title'), { ssr: true })

export enum ComponentDesignEnum {
    ORGANISMS = 'organisms',
    ATOM = 'atom',
    TEMPLATES = 'templates',
    MOLECULES = 'molecules',
}

const renderComponent = (component: any) => {
    if (!component?.componentName) return null

    const { componentName } = component

    switch (componentName) {
        case 'title':
            return <Title {...component} />
        case 'header':
            return <Header { ...component } />
        case 'heroOpener':
            return <HeroOpener { ...component } />
        case 'titleDescriptionImage':
            return <TitleDescriptionImage {...component} />

        default:
            return null
    }
} 

const Controller: FC<{ pageQuery: string, pageQueryName: string }> = (props): JSX.Element => {
    const [componentsList, setComponentsList] = useState<any[]>([]);
    const { data: page } = useQuery([props.pageQueryName], () => graphqlRequestClient.request(props.pageQuery))

    console.log(page)

    useEffect(() => {
        if (page[props.pageQueryName]?.data?.attributes) {
            setComponentsList(page[props.pageQueryName]?.data?.attributes.components)
        }
    }, [JSON.stringify(page)])


    return (
        <div>{componentsList.map((component: any, index: number) => {
            return (
                <div key={`${component.componentName}-${index}`}>
                    {renderComponent(component)}
                </div>
            )
        })}</div>
    )
}

export default Controller