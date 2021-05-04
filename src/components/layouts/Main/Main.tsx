import React, { useEffect, useState } from 'react'
import Menu from '@cmp/site/Menu'
import cn from 'classnames'
import MobileMenu from '@cmp/site/MobileMenu'

type PageProps = {
  pageContext: {
    id: string
    uid: string
    url: string
    tags: string[]
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
    <main>
      {/* this menu is only available on desktop */}
      <div className='d-none d-lg-block'>
        <Menu ctx={pageContext}>{children}</Menu>
      </div>

      {/* mobile version has a more traditional style */}
      <div className={cn('d-block d-lg-none', `page page__${bg} noise`)}>
        <MobileMenu />
        <div className='mobile-page pt-2'>{children}</div>
      </div>
    </main>
  )
}

export default MainLayout
