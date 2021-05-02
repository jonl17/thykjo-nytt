import React from 'react'
import Menu from '@cmp/site/Menu'
import cn from 'classnames'

type PageProps = {
  pageContext: {
    id: string
    uid: string
    url: string
    tags: string[]
  }
}

const MainLayout: React.FC<PageProps> = ({ children, pageContext }) => {
  const bg =
    pageContext.tags.find((tag: string) => tag.includes('bg-')) ?? 'bg-yellow'
  return (
    <main>
      {/* this menu is only available on desktop */}
      <div className='d-none d-lg-block'>
        <Menu ctx={pageContext}>{children}</Menu>
      </div>

      {/* mobile version has a more traditional style */}
      <div className={cn('d-block d-lg-none', `page__${bg} noise`)}>
        {children}
      </div>
    </main>
  )
}

export default MainLayout
