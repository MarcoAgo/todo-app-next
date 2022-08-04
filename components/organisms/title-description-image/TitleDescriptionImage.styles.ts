import { styled } from "../../../styles/styled/stitches.config";
import Description from "../../atoms/description/Description";
import Title from "../../atoms/title/Title";


export const Container = styled('div', {
    height: '100vh',
    width: '100vw',
    display: 'flex',
})

export const ImageWrapper = styled('div', {
    width: '30vw',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
})

export const TitleOverride = styled(Title, {
    width: 'auto'
})

export const DescriptionOvveride = styled(Description, {
    paddingRight: '160px'
})

export const TextWrapper = styled('div', {
    width: '70vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '0 10vw',
})
