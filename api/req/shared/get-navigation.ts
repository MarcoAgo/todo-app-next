import { LocalesEnum } from "../../../utils/pages/get-document"
import get, { BASE_URL } from "../../methods/get"

export const getNavigationQuery = async (locale: LocalesEnum) => {
    const navigationRequestParams = {
        url: `${BASE_URL}/navigation/render/main-navigation`,
        params: { locale, type: 'RFR' }
    }
    return await get(navigationRequestParams)
}