import { useQuery } from "@tanstack/react-query"
import dynamic from "next/dynamic"
import { FC, useEffect, useState } from "react"
import { graphqlRequestClient } from "../../graphql/utils/graphql-client"
import {useRouter} from "next/router";
import {Variables} from "graphql-request";
import AppRegistrationForm from "../organisms/app/registration-form/AppRegistrationForm";

// imports
const HeroOpener = dynamic(import('../organisms/hero-opener/HeroOpener'), { ssr: true })
const TitleDescriptionImage = dynamic(import('../organisms/title-description-image/TitleDescriptionImage'), { ssr: true })
const Title = dynamic(import('../atoms/title/Title'), { ssr: true })

const renderComponent = (component: any) => {
    if (!component?.__typename) return null
    const { __typename } = component

    switch (__typename) {
    case 'ComponentAtomTitle':
        return <Title {...component} />
    case 'ComponentOrganismsHeroOpener':
        return <HeroOpener { ...component } />
    case 'ComponentOrganismsTitleDescriptionImage':
        return <TitleDescriptionImage {...component} />
    case 'ComponentOrganismsRegistrationForm':
        return <AppRegistrationForm {...component} />

    default:
        return null
    }
} 

const Controller: FC<{ pageQuery: string, pageQueryName: string }> = (props): JSX.Element => {
    const { locale } = useRouter()
    const [componentsList, setComponentsList] = useState<unknown[]>([]);
    const { data: page } = useQuery([props.pageQueryName, { locale }], () => graphqlRequestClient.request(props.pageQuery, { locale }))
    
    useEffect(() => {
        console.log(page)
        if (page?.[props.pageQueryName]?.data?.attributes) {
            setComponentsList(page[props.pageQueryName]?.data?.attributes.components)
        }
    }, [page, setComponentsList, props.pageQueryName])

    return (
        <div>{componentsList.map((component: any, index: number) => {
            return (
                <div key={`${component.__typename}-${index}`}>
                    {renderComponent(component)}
                </div>
            )
        })}</div>
    )
}

export default Controller