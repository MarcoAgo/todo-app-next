import Link from "next/link"
import { FC } from "react"
import { styled } from "../../../styles/styled/stitches.config"

export interface ILinkProps {
    id: number
    label: string
    url: string
    isSelected: boolean
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
    const { label, url, isSelected } = props
    
    return (
        <StyledLink isSelected={isSelected}>
            <Link href={url}>
                {label}
            </Link>
        </StyledLink>
    )
}

export default LinkAtom