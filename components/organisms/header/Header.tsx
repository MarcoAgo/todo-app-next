import Image from "next/image"
import Link from "next/link"
import LinkAtom from "../../atoms/link/Link"
import { FC } from "react"
import * as Styles from "./Header.styles"
import { useRouter } from "next/router"
import { NavigationItem, useMainNavigationQuery } from "../../../graphql/generated/graphql-generated"
import { graphqlRequestClient } from "../../../graphql/utils/graphql-client"
import { BASE_UPLOADS_URL } from "../../../utils/api/base-api-utils"

export interface INavigation {
    id: string
    menuAttached: boolean
    path: string
    related: {
        contentType: string
        id: number
    }
    slug: string
    templateName: string
    title: string
}

const Header: FC = (): JSX.Element => {
    const { locale } = useRouter()
    const { data } = useMainNavigationQuery(graphqlRequestClient, { locale })
    const navigation = data?.renderNavigation as NavigationItem[]
    const { asPath } = useRouter()

    const renderLink = (link: NavigationItem) => {
        return (
            <div key={link.title}>
                <LinkAtom
                    id={Number(link.id)} 
                    label={link.title} 
                    url={String(link.path)} 
                    isSelected={asPath === `${link.path}/`}
                />
            </div>
        )
    }

    return (
        <Styles.Container>
                <Link href="/">
                    <Styles.Logo>
                        <Image
                            src={`${BASE_UPLOADS_URL}/uploads/to_do_list_50a594af0d.png`} 
                            height={56} 
                            width={56}
                        />
                    </Styles.Logo>
                </Link>
            <Styles.Links>
                {navigation?.map(renderLink)}
            </Styles.Links>
        </Styles.Container>
    )
}

export default Header