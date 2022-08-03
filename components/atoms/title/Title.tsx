import { FC } from "react";
import { styled } from "../../../styles/styled/stitches.config";

export interface ITitleProps {
    id: number
    text: string
    className?: string
    style?: any
}

export const StyledTitle = styled('div', {
    width: '100vw',
    height: 'auto',
    fontFamily: '$display',
    fontSize: '$xl',
    color: '$text',
    display: 'flex',
    justifyContent: 'center',
    
    'h1': {
        margin: 0,
    }
})

const Title: FC<ITitleProps> = (props) => {
    const { text, className, style } = props

    return (
        <StyledTitle className={className} style={style}>
            <h1>{text}</h1>
        </StyledTitle>
    )
}

export default Title