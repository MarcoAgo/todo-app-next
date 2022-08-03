import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss, css } = createStitches({
    theme: {
        colors: {
            background: '#fff',
            text: '#474747',
        },
        space: {},
        fontSizes: {
            xs:' 8px',
            s: '12px',
            m: '16px',
            l: '24px',
            xl: '32px',
            xxl: '48px',
            xxxl: '72px',
        },
        fonts: {
            primary: 'Roboto, sans-serif',
            display: 'Mouse Memoirs, sans-serif'
        },
        fontWeights: {
            medium: 500,
            regular: 400,
            bold: 700,
        },
        lineHeights: {},
        letterSpacings: {},
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {},
        shadows: {},
        zIndices: {
            overlay: 100,
            behind: -1
        },
        transitions: {},
    }
})

export const globalStyles = globalCss({
    body: {
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: '#fff',
        color: '#474747',
        padding: 0,
        margin: 0,
        overflowX: 'hidden'
    },
    a: {
        '&: -webkit-any-link': {
            color: '#fff'
        }
    }
})