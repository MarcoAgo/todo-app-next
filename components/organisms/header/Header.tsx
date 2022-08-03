import Image from "next/image"
import Link from "next/link"
import LinkAtom from "../../atoms/link/Link"
import { FC } from "react"
import { BASE_UPLOADS_URL } from "../../../api/methods/get"
import * as Styles from "./Header.styles"
import { useNavigation } from "../../../hooks/queries/use-navigation"
import { useRouter } from "next/router"
import { ParentType } from "../../../utils/pages/get-document"
export interface INavigation {
    id: string
    menuAttached: boolean
    parent: ParentType | null
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
    const { data: navigation } = useNavigation()
    const navArray = Object.values(navigation.pages) as INavigation[]
    const { asPath } = useRouter()

    const renderLink = (link: INavigation) => (
        <div key={link.title}>
            <LinkAtom
                id={Number(link.id)} 
                label={link.title} 
                url={link.path} 
                isSelected={asPath === `${link.path}/`}
            />
        </div>
    )

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
                {navArray.map(renderLink)}
            </Styles.Links>
        </Styles.Container>
    )
}

export default Header