import { styled } from "../../styles/styled/stitches.config"

const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '$display',
    fontSize: '$xxl',
    height: '100vh',
    width: '100vw'
})

const Loader = () => {
    return (
        <Container>
            <div className="content">
                <p>Mr. Todo App</p>
            </div>
        </Container>
    )
}

export default Loader