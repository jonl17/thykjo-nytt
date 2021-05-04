import { menuResolver } from '@src/data/resolvers'
import { useStaticQuery, graphql } from 'gatsby'

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
