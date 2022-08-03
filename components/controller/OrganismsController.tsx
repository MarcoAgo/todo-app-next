import dynamic from "next/dynamic"
import { FC } from "react"
interface IOrganismsControllerProps {
    organismName: string
    componentProps: any
}

// imports
const Header = dynamic(import('../organisms/header/Header'), { ssr: true })
const HeroOpener = dynamic(import('../organisms/hero-opener/HeroOpener'), { ssr: true })
const TitleDescriptionImage = dynamic(import('../organisms/title-description-image/TitleDescriptionImage'), { ssr: true })

export const renderOrganism = (props: IOrganismsControllerProps) => {
    switch (props.organismName.toLowerCase()) {
        case 'header':
            return <Header { ...props.componentProps } />

        case 'hero-opener':
            return <HeroOpener { ...props.componentProps } />

        case 'title-description-image':
            return <TitleDescriptionImage {...props.componentProps} />
        default:
            return null
    }
}

const OrganismsController: FC<IOrganismsControllerProps> = (props): JSX.Element | null => {
    return renderOrganism(props)
}

export default OrganismsController
