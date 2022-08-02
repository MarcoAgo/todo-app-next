import dynamic from "next/dynamic"
import { FC } from "react"
import Title from "../atoms/title/Title"

interface IAtomsControllerProps {
    atomName: string
    componentProps: any
}

// imports

export const renderAtom = (props: IAtomsControllerProps) => {
    switch (props.atomName.toLowerCase()) {
        case 'title':
            return <Title {...props.componentProps} />
        default:
            return null
    }
}

const AtomsController: FC<IAtomsControllerProps> = (props): JSX.Element | null => {
    return renderAtom(props)
}

export default AtomsController
