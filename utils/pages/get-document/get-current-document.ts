import { Navigation } from ".";

export const getDocument = (navigation: Navigation[], currentPath: string) => {
    const navItem = navigation.find(nav => nav.path === currentPath)
    if (navItem?.related.contentType) {
        return navItem.related.contentType.split('.')[1]
    }

    return 'homepage'
}