import useGetMenu from '@src/hooks/useGetMenu'
import React, { useState } from 'react'
import Icon from '@cmp/site/Icon'
import cn from 'classnames'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import ContactInformation from '@cmp/site/ContactInformation'
import useLockBodyScroll from '@src/hooks/useLockBodyScroll'

const MobileMenu = ({ lang }: { lang: string }) => {
  const [open, setOpen] = useState(false)
  const menu = useGetMenu(lang)
  const { pathname } = useLocation()

  const MenuItems = () => {
    useLockBodyScroll()

    return (
      <div className='mobile-menu__items d-flex flex-column'>
        {menu.pages.map(page => (
          <Link
            key={page.url}
            className={cn('mobile-menu-item', `page__${page.bg} noise px-3`)}
            to={page.url}
            onClick={() => setOpen(false)}
          >
            {page.uid === 'frontpage' ? (
              <div className='mobile-menu-item__frontpage'>
                <Icon className='w-75' type='eyes' />
              </div>
            ) : (
              <h2>{page.title}</h2>
            )}
          </Link>
        ))}
        <div className='mobile-menu-item mobile-menu-item--last px-3'>
          <ContactInformation />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn('mobile-menu px-3', {
        'mobile-menu--open noise': open,
      })}
    >
      <div className='mobile-menu__header d-flex align-items-center justify-content-between'>
        {!open && pathname !== '/' ? (
          <Link to='/'>
            <Icon className='mobile-menu__eyes py-2' type='eyes' />
          </Link>
        ) : (
          <span />
        )}
        <button onClick={() => setOpen(!open)} className='mobile-menu__burger'>
          <Icon type={open ? 'burgerEx' : 'burger'} />
        </button>
      </div>
      {open && <MenuItems />}
    </div>
  )
}

export default MobileMenu
