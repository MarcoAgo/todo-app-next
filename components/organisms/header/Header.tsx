import Image from "next/image"
import Link from "next/link"
import LinkAtom from "../../atoms/link/Link"
import { FC } from "react"
import { BASE_UPLOADS_URL } from "../../../api/methods/get"
import { ILinkProps } from "../../atoms/link/Link"
import * as Styles from "./Header.styles"
import { useNavigation } from "../../../hooks/queries/use-navigation"
import { useRouter } from "next/router"

interface IHeaderProps {}

const Header: FC<IHeaderProps> = (props): JSX.Element => {
    const { data: navigation } = useNavigation()
    const { asPath } = useRouter()

    const renderLink = (link: any) => (
        <LinkAtom
            id={link.id} 
            label={link.title} 
            url={link.path} 
            isSelected={asPath === `${link.path}/`}
        />
    )

    return (
        <Styles.Container>
            <Styles.Logo>
                <Link href="/">
                    <Image
                        src={`${BASE_UPLOADS_URL}/uploads/to_do_list_50a594af0d.png`} 
                        height={56} 
                        width={56}
                    />
                </Link>
            </Styles.Logo>
            <Styles.Links>
                {Object.values(navigation.pages).map(renderLink)}
            </Styles.Links>
        </Styles.Container>
    )
}

export default Header