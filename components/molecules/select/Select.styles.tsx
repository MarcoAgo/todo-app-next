import {styled} from "../../../styles/styled/stitches.config";
import * as SelectPrimitive from '@radix-ui/react-select';

export const SelectTrigger = styled(SelectPrimitive.SelectTrigger, {
    border: 'none',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: 'orange',
    fontSize: '$m',
    fontWeight: 700,
    cursor: 'pointer',

    '&:focus': {
        outline: 'none',
        border: 'none',
    },

    '&:hover': {
        outline: 'none',
        border: 'none',
    }
})

export const SelectContent = styled(SelectPrimitive.Content, {
    marginTop: '48px'
})

export const SelectItem = styled(SelectPrimitive.Item, {
    cursor: 'pointer',
    textTransform: 'uppercase',
    marginTop: '8px',

    '&:focus': {
        outline: 'none',
        border: 'none',
    },
    '&:hover': {
        outline: 'none',
        border: 'none',
    }
})