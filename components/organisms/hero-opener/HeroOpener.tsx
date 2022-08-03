import { FC } from "react";
import { BASE_UPLOADS_URL } from "../../../api/methods/get";
import { ImageDataType } from "../../../types/generic";
import Description, { IDescriptionProps } from "../../atoms/description/Description";
import Title, { ITitleProps } from "../../atoms/title/Title";
import * as Styles from './HeroOpener.styles'

interface IHeroOpenerProps {
    title: ITitleProps
    description: IDescriptionProps
    bg_media: ImageDataType
}

const HeroOpener: FC<IHeroOpenerProps> = (props): JSX.Element => {
    const { bg_media, title, description } = props

    return (
        <Styles.Container>
            <Styles.BgImage 
                layout="fill"
                src={`${BASE_UPLOADS_URL}${bg_media.data.attributes.url}`}
            />
            <Title {...title} />
            <Styles.TextContainer>
                <Description {...description} />
            </Styles.TextContainer>
        </Styles.Container>
    )
}

export default HeroOpener