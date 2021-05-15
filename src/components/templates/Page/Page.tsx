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

const handleMouse = (x: number, pageWidth: number) => {
  const pos = (x / pageWidth) * 2
  const xCord = pos * 50 - 58
  return xCord
}

const Page = ({ data }: { data: any }) => {
  const page = pageResolver(data.prismicPage)

  let pageRef = useRef()

  const { updateX } = useEyeballs()

  return (
    <>
      {page.title && page.title !== 'Þykjó' && (
        <Helmet>{<title>{`Þykjó - ${page.title}`}</title>}</Helmet>
      )}

      <div
        className={cn('page h-100 m-auto position-relative', {
          'page--inverted': page.uid === 'frontpage',
          'pt-3 container': page.uid !== 'frontpage',
        })}
        onMouseMove={e =>
          updateX(handleMouse(e.clientX, window.innerWidth - 200))
        }
        ref={pageRef}
      >
        {page.title && <Head title={page.title} description={page.subtitle} />}
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

export default Page

export const query = graphql`
  query($id: String) {
    prismicPage(id: { eq: $id }) {
      ...pageFragmentFull
    }
  }
`
