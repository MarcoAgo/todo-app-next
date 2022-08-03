import Image from "next/image";
import { styled } from "../../../styles/styled/stitches.config";
import Title from "../../atoms/title/Title";

export const Container = styled('div', {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden'
}) 

export const BgImage = styled(Image, {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: '$behind',
    opacity: 0.7,
    userSelect: 'none'
})

export const TextContainer = styled('div', {
    maxWidth: '40vw',
    display: "flex",
    flexDirection: 'column',
    textAlign: 'center',
})