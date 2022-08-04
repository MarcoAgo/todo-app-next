import { FC } from "react";
import { BASE_UPLOADS_URL } from "../../../utils/api/base-api-utils";
import Description  from "../../atoms/description/Description";
import Title from "../../atoms/title/Title";
import * as Styles from './HeroOpener.styles'
import {
    ComponentOrganismsHeroOpener
} from "../../../graphql/generated/graphql-generated";

const HeroOpener: FC<ComponentOrganismsHeroOpener> = (props): JSX.Element => {
    const { bg_media, title, description } = props

    return (
        <Styles.Container>
            <Styles.BgImage 
                layout="fill"
                src={`${BASE_UPLOADS_URL}${bg_media?.data?.attributes?.url}`}
            />
            <Title {...title} />
            <Styles.TextContainer>
                <Description {...description} />
            </Styles.TextContainer>
        </Styles.Container>
    )
}

export default HeroOpener