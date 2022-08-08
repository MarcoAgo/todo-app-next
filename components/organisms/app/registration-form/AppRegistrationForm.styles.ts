import {styled} from "../../../../styles/styled/stitches.config";
import Title from "../../../atoms/title/Title";
import Description from "../../../atoms/description/Description";
import Input from "../../../atoms/input/Input";
import Button from "../../../atoms/button/Button";
import Link from "../../../atoms/link/Link";

export const Container = styled('div', {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$lightBg',
})

export const Bubble = styled('div', {
    height: 'autos',
    width: '35vw',
    backgroundColor: '$background',
    borderRadius: '10px',
    padding: '48px'
})

export const FormTitle = styled(Title, {
    width: 'auto',
    display: 'block',
    fontSize: '$l'
})

export const FormDescription = styled(Description, {
    color: 'darkgray',
    marginBottom: '24px'
})

export const FormInput = styled(Input, {
    marginRight: '16px',
    marginTop: '16px'
})

export const FormButton = styled(Button, {
    marginTop: '48px',
    height: '40px',
    textTransform: 'uppercase',
})

export const BottomLink = styled(Link, {
    marginTop: 32,
    textTransform: 'unset',
    fontWeight: 400,

    'a': {
        color: 'darkgrey',
    }
})
