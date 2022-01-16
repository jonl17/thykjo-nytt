import React from 'react'
import { Link, navigate } from 'gatsby'
import '@src/data/fragments/menu'
import { PageInterface } from '@src/data/resolvers'
import cn from 'classnames'
import { useLocation } from '@reach/router'
import Icon from '@cmp/site/Icon'
import { IconType } from '../Icon/Icon'
import useGetMenu from '@src/hooks/useGetMenu'

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
            {findIcon[page.uid] && (
              <Icon className='menu__item__nav' type={findIcon[page.uid]} />
            )}
          </div>
        </Link>
      )}
    </div>
  )
}

const Menu: React.FC<{ ctx: any }> = ({ children, ctx }) => {
  const menu = useGetMenu()

  return (
    <div className='d-flex'>
      {menu.pages.map(page => (
        <MenuItem key={page.id} page={page}>
          {children}
        </MenuItem>
      ))}
      {ctx.type === 'project' && (
        <div className='noise project page__bg-red'>{children}</div>
      )}
    </div>
  )
}

export default Menu
