import Image from "next/image";
import { FC } from "react";
import { BASE_UPLOADS_URL } from "../../../utils/api/base-api-utils";
import Button  from "../../atoms/button/Button";
import * as Styles from './TitleDescriptionImage.styles'
import {ComponentOrganismsTitleDescriptionImage} from "../../../graphql/generated/graphql-generated";

const TitleDescriptionImage: FC<ComponentOrganismsTitleDescriptionImage> = (props): JSX.Element => {
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
                    src={`${BASE_UPLOADS_URL}${image?.media_image?.data?.attributes?.url}`}
                    alt=""
                    height={300}
                    width={300}
                />
            </Styles.ImageWrapper>
        </Styles.Container>
    )
}

export default TitleDescriptionImage
