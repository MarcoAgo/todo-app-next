import Link from "next/link";
import {CSSProperties, FC} from "react";
import { styled } from "../../../styles/styled/stitches.config";
import {ComponentAtomButton} from "../../../graphql/generated/graphql-generated";

export interface IButtonProps extends ComponentAtomButton { 
    className?: string
    style?: CSSProperties
 }

const StyledButton = styled('div', {
    height: 32,
    width: 'auto',
    padding: '0 32px',
    border: '2px solid $text',
    display: 'flex',
    alignItems: 'center',

    'a': {
        color: '$text',
        textDecoration: 'none'
    }
})

const Button: FC<IButtonProps> = (props): JSX.Element => {
    const { label, url, style, className } = props

    return (
        <StyledButton className={className} style={style}>
            <Link href={url || ''}>{label}</Link>
        </StyledButton>
    )
}

export default Button