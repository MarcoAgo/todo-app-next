import { styled } from "../../../styles/styled/stitches.config";

export const Container = styled('div', {
    minHeight: 64
})

export const StyledInput = styled('input', {
    cursor: 'pointer',
    border: '1px solid $text',
    color: '$text',
    outline: 'none',
    fontSize: '12px',
    height: 24,
    width: '100%',
    padding: 8,
    letterSpacing: 1,

    '&:focus': {
        border: '1px solid darkgrey',
    },

    '&:hover': {
        border: '1px solid darkgrey',
    },

    variants: {
        error: {
            true: {
                border: '1px solid red',
            }
        }
    }
})

export const Label = styled('label', {
    fontSize: '12px',
    color: 'darkgray',
    display: 'block',
    marginBottom: 4,
    letterSpacing: 1
})

export const InputError = styled('p', {
    fontSize: '$s',
    color: 'red',
})
