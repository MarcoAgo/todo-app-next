import Image from "next/image"
import Link from "next/link"
import LinkAtom from "../../atoms/link/Link"
import { FC, useCallback } from "react"
import * as Styles from "./Header.styles"
import { useRouter } from "next/router"
import { NavigationItem, useMainNavigationQuery } from "../../../graphql/generated/graphql-generated"
import { graphqlRequestClient } from "../../../graphql/utils/graphql-client"
import { BASE_UPLOADS_URL } from "../../../utils/api/base-api-utils"
import Select from "../../molecules/select/Select";

const Header: FC = (): JSX.Element => {
    const { locale, push, asPath } = useRouter()
    const { data } = useMainNavigationQuery(graphqlRequestClient, { locale })
    const navigation = data?.renderNavigation as NavigationItem[]

    const handleSelectItemChange = useCallback((item: string) => {
        push('/', undefined, { locale: item }).then()
    }, [push])

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
                        alt="Site logo link"
                        height={56} 
                        width={56}
                    />
                </Styles.Logo>
            </Link>
            <Styles.LinksLangSection>
                <Styles.Links>
                    {navigation?.map(renderLink)}
                </Styles.Links>
                <Styles.Lang>
                    <Select
                        items={[{ label: 'It', value: 'it' }, { label: 'En', value: 'en' }]}
                        onSelectItem={handleSelectItemChange}
                        defaultValue={locale as string}
                    />
                </Styles.Lang>
            </Styles.LinksLangSection>
        </Styles.Container>
    )
}

export default Header