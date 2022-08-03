import Link from "next/link"
import { FC } from "react"
import { styled } from "../../../styles/styled/stitches.config"

export interface ILinkProps {
    id: number
    label: string
    url: string
    isSelected: boolean
    className?: string
    style?: any
}

const StyledLink = styled('div', {
    textTransform: 'uppercase',
    fontFamily: '$primary',

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