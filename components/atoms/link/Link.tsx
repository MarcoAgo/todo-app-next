import Link from "next/link"
import {CSSProperties, FC} from "react"
import { styled } from "../../../styles/styled/stitches.config"
import {ComponentAtomLink} from "../../../graphql/generated/graphql-generated";

export interface ILinkProps extends ComponentAtomLink {
    isSelected?: boolean
    className?: string
    style?: CSSProperties
}

const StyledLink = styled('div', {
    textTransform: 'uppercase',
    fontFamily: '$primary',
    width: '100%',
    textAlign: 'center',

    'a': {
        color: '$text',
        textDecoration: 'none',
        fontWeight: '$medium',

        '&:hover': {
            color: 'lightgrey',
        }
    },

    variants: {
        isSelected: {
            true: {
                'a': {
                    color: 'lightgrey',
                }
            }
        }
    }
})

const LinkAtom: FC<ILinkProps> = (props) => {
    const { label, url, isSelected, style, className } = props

    return (
        <StyledLink isSelected={isSelected} className={className} style={style}>
            <Link href={url}>
                {label}
            </Link>
        </StyledLink>
    )
}

export default LinkAtom
