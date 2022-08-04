import {CSSProperties, FC} from "react";
import { styled } from "../../../styles/styled/stitches.config";
import {ComponentAtomTitle} from "../../../graphql/generated/graphql-generated";

export interface ITitleProps extends ComponentAtomTitle {
    className?: string
    style?: CSSProperties
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