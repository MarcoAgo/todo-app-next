import Link from "next/link";
import {CSSProperties, FC} from "react";
import { styled } from "../../../styles/styled/stitches.config";
import {ComponentAtomButton} from "../../../graphql/generated/graphql-generated";

export interface IButtonProps extends ComponentAtomButton {
    className?: string
    style?: CSSProperties
    type?: 'submit'
 }

const StyledButtonLink = styled('div', {
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

const StyledButton = styled('button', {
    cursor: 'pointer',
    height: 32,
    width: '100%',
    padding: '0 32px',
    border: '2px solid $text',
    display: 'flex',
    alignItems: 'center',
    color: '$text',
    outline: 'none',
    background: 'transparent',
    textAlign: 'center',
    justifyContent: 'center',

    '&:hover': {
        color: '#fff',
        backgroundColor: '$text'
    }
})

const Button: FC<IButtonProps> = (props): JSX.Element => {
    const { label, url, style, type, className } = props

    return url
        ? (
            <StyledButtonLink className={className} style={style}>
                <Link href={url || ''}>{label}</Link>
            </StyledButtonLink>
        )
        : (
            <StyledButton type={type} className={className} style={style}>
                {label}
            </StyledButton>
        )
}

export default Button
