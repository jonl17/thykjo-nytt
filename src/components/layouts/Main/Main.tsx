import React, { useEffect, useState } from 'react'
import Menu from '@cmp/site/Menu'
import cn from 'classnames'
import MobileMenu from '@cmp/site/MobileMenu'
import SEO from '@cmp/site/SEO'
import { Helmet } from 'react-helmet'
import { Modal, useModal } from '@cmp/site/Modal'
import { useLocation } from '@reach/router'

type PageProps = {
  pageContext: {
    id: string
    uid: string
    url: string
    tags: string[]
    type: string
    lang: string
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

  const { image, updateImage } = useModal()

  const { pathname } = useLocation()

  useEffect(() => {
    updateImage(null)
  }, [pathname])

  return (
    <>
      <SEO lang={pageContext.lang} />
      <Helmet>
        <html
          lang='is'
          className={cn(`page__${bg} noise`, {
            'page__bg-red noise': pageContext.type === 'project',
            'page__bg-yellow noise': pageContext.type === 'workshop',
          })}
        />
        <body
          className={cn(`page__${bg} noise`, {
            'page__bg-red noise': pageContext.type === 'project',
            'page__bg-yellow noise': pageContext.type === 'workshop',
          })}
        />
      </Helmet>
      {image && <Modal />}
      <main>
        {/* this menu is only available on desktop */}
        <div className='d-none d-lg-block'>
          <Menu ctx={pageContext}>{children}</Menu>
        </div>

        {/* mobile version has a more traditional style */}
        <div
          className={cn('d-block d-lg-none', 'page', {
            'page__bg-red noise': pageContext.type === 'project',
          })}
        >
          <MobileMenu lang={pageContext.lang} />
          <div className='mobile-page'>{children}</div>
        </div>
      </main>
    </>
  )
}

export default MainLayout
