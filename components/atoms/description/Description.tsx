import {CSSProperties, FC} from "react";
import { styled } from "../../../styles/styled/stitches.config";
import {ComponentAtomText} from "../../../graphql/generated/graphql-generated";

export interface IDescriptionProps extends ComponentAtomText {
    className?: string
    style?: CSSProperties
}

const StyledDescription = styled('div', {
    fontFamily: '$primary',
    fontSize: '$m',
    color: '$text',
    lineHeight: '24px'
})

const Description: FC<IDescriptionProps> = (props): JSX.Element => {
    const { text, className, style } = props

    return (
        <StyledDescription className={className} style={style}>
            <p>{text}</p>
        </StyledDescription>
    )
}

export default Description
