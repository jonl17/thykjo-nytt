import React from 'react'
import { graphql } from 'gatsby'
import '@src/data/fragments/page'
import { pageResolver } from '@src/data/resolvers'
import SliceMapping from '@cmp/slices/sliceMapping'
import cn from 'classnames'
import Head from '@cmp/site/Head'
import FeaturedImage from '@cmp/site/FeaturedImage'
import Icon from '@cmp/site/Icon'
import { useLocation, Match } from '@reach/router'

const Page = ({ data }: { data: any }) => {
  const page = pageResolver(data.prismicPage)
  const { pathname } = useLocation()

  return (
    <div
      className={cn('page h-100 m-auto position-relative', {
        'page--inverted': page.uid === 'frontpage',
        'pt-3 container': page.uid !== 'frontpage',
      })}
    >
      {page.title && <Head title={page.title} description={page.subtitle} />}
      {page.featuredImage.url && <FeaturedImage {...page.featuredImage} />}
      <div className='d-flex flex-wrap'>
        {page.body.map((slice, i) => (
          <SliceMapping key={i} slice={slice} />
        ))}
      </div>
    </div>
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
