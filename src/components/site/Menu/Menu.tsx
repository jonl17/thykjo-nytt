import React from 'react'
import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import '@src/prismic/fragments/menu'
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
      className={cn('menu-transition', {
        'inactive-menu-item cursor-pointer': !active,
        'flex-1 cursor-auto': active,
      })}
      onClick={() => (active ? null : navigate(page.url))}
    >
      {active ? (
        children
      ) : (
        <Link to={page.url}>
          <div className='w-full h-full pt-8 relative flex justify-center rotate'>
            <Icon className='fixed hidden lg:block' type={findIcon[page.uid]} />
            <h2 className='text-yellow-2 lg:hidden'>{page.title}</h2>
          </div>
        </Link>
      )}
    </div>
  )
}

const Menu: React.FC<{ ctx: any }> = ({ children, ctx }) => {
  const menu = useGetMenu()

  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
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
