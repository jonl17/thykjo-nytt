import React, { useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import '@src/data/fragments/page'
import { pageResolver } from '@src/data/resolvers'
import SliceMapping from '@cmp/slices/sliceMapping'
import cn from 'classnames'
import Head from '@cmp/site/Head'
import FeaturedImage from '@cmp/site/FeaturedImage'
import { Helmet } from 'react-helmet'
import { useEyeballs } from '@src/context/eyeBallContext'
import useGetMenu from '@src/hooks/useGetMenu'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

const handleMouse = (x: number, pageWidth: number) => {
  const pos = (x / pageWidth) * 2
  const xCord = pos * 50 - 58
  return xCord
}

const Page = ({ data, pageContext }: { data: any; pageContext: any }) => {
  const page = pageResolver(data.prismicPage)

  let pageRef = useRef<HTMLDivElement>(null)

  const { updateX } = useEyeballs()

  // total width of current page has to be subtracted by the total width of vertical menu items
  const menu = useGetMenu(pageContext.lang)
  const MENU_ITEM_WIDTH = 100
  const MENU_OFFSET = (menu.pages.length - 1) * MENU_ITEM_WIDTH

  return (
    <>
      {page.title && page.title !== 'Þykjó' && (
        <Helmet>{<title>{`Þykjó - ${page.title}`}</title>}</Helmet>
      )}

      <div
        className={cn('page h-100 m-auto position-relative', {
          'page--inverted': page.uid === 'frontpage',
          'pt-3 pr-2 container': page.uid !== 'frontpage',
        })}
        onMouseMove={e =>
          updateX(handleMouse(e.clientX, window.innerWidth - MENU_OFFSET))
        }
        ref={pageRef}
      >
        {page.title && page.showHeader && (
          <Head title={page.title} description={page.subtitle} />
        )}
        {page.featuredImage.url && <FeaturedImage {...page.featuredImage} />}
        <div className='d-flex flex-wrap'>
          {page.body.map((slice, i) => (
            <SliceMapping key={i} slice={slice} />
          ))}
        </div>
      </div>
    </>
  )
}

export default withPrismicPreview(Page)

export const query = graphql`
  query($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      ...pageFragmentFull
    }
  }
`
