import { FC } from "react";
import { styled } from "../../../styles/styled/stitches.config";

export interface IDescriptionProps {
    id: number
    text: string
    className?: string
    style?: any
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
