import {FC} from "react";
import {styled} from "../../styles/styled/stitches.config";
import Title from "../atoms/title/Title";
import Description from "../atoms/description/Description";

const NotFoundContainer = styled('div', {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
})

const NotFoundPage: FC = (): JSX.Element => {
    return (
        <NotFoundContainer>
            <Title id="" text="404" componentName="" />
            <Description id="" text="I think you are trying to navigate a page that non exist, use menu instead of url!" />
        </NotFoundContainer>
    )
}

export default NotFoundPage