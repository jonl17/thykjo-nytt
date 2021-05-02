import React from 'react'
import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import '@src/data/fragments/menu'
import { menuResolver, PageInterface } from '@src/data/resolvers'
import cn from 'classnames'
import { useLocation } from '@reach/router'
import Icon from '@cmp/site/Icon'
import { IconType } from '../Icon/Icon'

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

const MenuItem: React.FC<{ page: PageInterface }> = ({ page, children }) => {
  const { pathname } = useLocation()

  const active = pathname === page.url || pathname === page.url + '/'

  const findIcon: { [key: string]: IconType } = {
    frontpage: 'verticalEyes',
    verkefni: 'verticalVerkefni',
    thykjo: 'verticalThykjo',
  }

  return (
    <div
      className={cn('menu__item', `page__${page.bg} noise`, {
        'menu__item--active': active,
      })}
      onClick={() => (active ? null : navigate(page.url))}
    >
      {active ? (
        children
      ) : (
        <Link to={page.url}>
          <div>
            <Icon className='menu__item__nav' type={findIcon[page.uid]} />
          </div>
        </Link>
      )}
    </div>
  )
}

const Menu: React.FC<{ ctx: any }> = ({ children, ctx }) => {
  const menu = useGetMenu()

  return (
    <div className='d-flex min-h-screen'>
      {menu.pages.map(page => (
        <MenuItem key={page.id} page={page}>
          {children}
        </MenuItem>
      ))}
      {ctx.type === 'project' && (
        <div className='noise bg-red menu-transition flex-1 text-yellow-2'>
          {children}
        </div>
      )}
    </div>
  )
}

export default Menu
