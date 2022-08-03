import { FC, useEffect, useState } from "react"
import { useDocument } from "../../hooks/queries/use-document"
import AtomsController from "./AtomsController"
import OrganismsController from "./OrganismsController"

export enum ComponentDesignEnum {
    ORGANISMS = 'organisms',
    ATOM = 'atom',
    TEMPLATES = 'templates',
    MOLECULES = 'molecules',
}

const renderComponent = (component: any, index: number) => {
    const [componentDesign, componentName] = component.__component.split('.')

    switch (componentDesign) {
        case ComponentDesignEnum.ATOM:
            return (
                <div key={`${component.__component}-${index}`}>
                    <AtomsController atomName={componentName} componentProps={component} />
                </div>
            )

        case ComponentDesignEnum.MOLECULES:
            return <div key={`${component.__component}-${index}`}>molecules</div>

        case ComponentDesignEnum.ORGANISMS:
            return (
                <div key={`${component.__component}-${index}`}>
                    <OrganismsController organismName={componentName} componentProps={component} />
                </div>
            )

        case ComponentDesignEnum.TEMPLATES:
            return <div>templates</div>

        default:
            return null
    }
} 

const Controller: FC<{ document: string }> = (props) => {
    const [componentsList, setComponentsList] = useState<any[]>([]);
    const { data: page } = useDocument(props.document)

    useEffect(() => {
        const components = page?.data?.attributes?.components
        if (components && components.length) {
            setComponentsList(components)
        }
    }, [JSON.stringify(page)])

    return (
        <div>{componentsList.map(renderComponent)}</div>
    )
}

export default Controller