import Image from "next/image";
import { FC } from "react";
import { ImageDataType } from "../../../types/generic";
import { BASE_UPLOADS_URL } from "../../../utils/api/base-api-utils";
import Button, { IButtonProps } from "../../atoms/button/Button";
import { IDescriptionProps } from "../../atoms/description/Description";
import { ITitleProps } from "../../atoms/title/Title";
import * as Styles from './TitleDescriptionImage.styles'

interface ITitleDescriptionImageProps {
    title: ITitleProps
    description: IDescriptionProps
    image: {
        media_image: ImageDataType
    }
    cta: IButtonProps
}

const TitleDescriptionImage: FC<ITitleDescriptionImageProps> = (props): JSX.Element => {
    const { title, description, image, cta } = props

    return (
        <Styles.Container>
            <Styles.TextWrapper>
                <Styles.TitleOverride {...title} />
                <Styles.DescriptionOvveride {...description} />
                <Button {...cta} />
            </Styles.TextWrapper>
            <Styles.ImageWrapper>
                <Image 
                    src={`${BASE_UPLOADS_URL}${image.media_image.data.attributes.url}`}
                    height={window.innerHeight}
                    width={image.media_image.data.attributes.width}
                />
            </Styles.ImageWrapper>
        </Styles.Container>
    )
}

export default TitleDescriptionImage
