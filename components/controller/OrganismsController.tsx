import dynamic from "next/dynamic"
import { FC } from "react"

interface IOrganismsControllerProps {
    organismName: string
    componentProps: any
}

// imports
const Header = dynamic(import('../organisms/header/Header'), { ssr: true })

export const renderOrganism = (props: IOrganismsControllerProps) => {
    switch (props.organismName.toLowerCase()) {
        case 'header':
            return <Header { ...props.componentProps } />
        default:
            return null
    }
}

const OrganismsController: FC<IOrganismsControllerProps> = (props): JSX.Element | null => {
    return renderOrganism(props)
}

export default OrganismsController
