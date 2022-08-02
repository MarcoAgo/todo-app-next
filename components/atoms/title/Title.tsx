import { FC } from "react";
import { styled } from "../../../styles/styled/stitches.config";

interface ITitleProps {
    id: number
    text: string    
}

export const StyledTitle = styled('div', {
    width: '100vw',
    height: 'auto',
    fontSize: '$xl',
    color: '$text',
    display: 'flex',
    justifyContent: 'center',
    margin: '32px 0'
})

const Title: FC<ITitleProps> = (props) => {
    const { text } = props

    return (
        <StyledTitle>
            <h1>{text}</h1>
        </StyledTitle>
    )
}

export default Title