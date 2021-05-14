import React, { useEffect, useState } from 'react'
import Menu from '@cmp/site/Menu'
import cn from 'classnames'
import MobileMenu from '@cmp/site/MobileMenu'
import SEO from '@cmp/site/SEO'
import { Modal } from '@cmp/site/Modal'

type PageProps = {
  pageContext: {
    id: string
    uid: string
    url: string
    tags: string[]
    type: string
  }
}

const MainLayout: React.FC<PageProps> = ({ children, pageContext }) => {
  const [bg, setBg] = useState('bg-yellow')

  useEffect(() => {
    if (pageContext.tags) {
      setBg(
        pageContext.tags.find((tag: string) => tag.includes('bg-')) ??
          'bg-yellow'
      )
    }
  }, [pageContext])

  return (
    <>
      <SEO />
      <main className={`page__${bg}`}>
        {/* this menu is only available on desktop */}
        <div className='d-none d-lg-block'>
          <Menu ctx={pageContext}>{children}</Menu>
        </div>

        {/* mobile version has a more traditional style */}
        <div
          className={cn('d-block d-lg-none', `page  noise`, {
            'page__bg-red': pageContext.type === 'project',
          })}
        >
          <MobileMenu />
          <div className='mobile-page'>{children}</div>
        </div>
      </main>
    </>
  )
}

export default MainLayout
