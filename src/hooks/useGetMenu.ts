import { menuResolver } from '@src/data/resolvers'
import { useStaticQuery, graphql } from 'gatsby'
import '@src/data/fragments/menu'

const useGetMenu = () => {
  const data = useStaticQuery(graphql`
    {
      prismicMenu(tags: { in: "MAIN_MENU" }) {
        ...menuFragmentFull
      }
    }
  `)
  return menuResolver(data.prismicMenu)
}

export default useGetMenu
