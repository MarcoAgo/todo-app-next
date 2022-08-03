import Image from "next/image";
import { styled } from "../../../styles/styled/stitches.config";

export const Container = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: "fixed",
    top: 0,
    left: 0,
    width: '100vw',
    height: '88px',
    zIndex: '$overlay'
})

export const Logo = styled('div', {
    padding: '8px 32px',
    maxHeight: 56,
    maxWidth: 56,
    cursor: 'pointer',
})

export const Links = styled('div', {
    display: 'flex',
    padding: '0 32px',

    '& a': {
        paddingRight: '32px'
    }
})