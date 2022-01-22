import { MenuInterface, menuResolver } from '@src/data/resolvers'
import { useStaticQuery, graphql } from 'gatsby'
import '@src/data/fragments/menu'

const useGetMenu = (lang: string) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicMenu(filter: { tags: { in: "MAIN_MENU" } }) {
        nodes {
          lang
          ...menuFragmentFull
        }
      }
    }
  `)
  const menus: MenuInterface[] = data.allPrismicMenu.nodes.map((node: any) =>
    menuResolver(node)
  )
  return menus.find(menu => menu.lang === lang) ?? menus[0]
}

export default useGetMenu
