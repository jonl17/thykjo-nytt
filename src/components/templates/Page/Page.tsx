import React from 'react'
import { graphql } from 'gatsby'
import '@src/data/fragments/page'
import { pageResolver } from '@src/data/resolvers'
import SliceMapping from '@cmp/slices/sliceMapping'
import cn from 'classnames'

const Page = ({ data }: { data: any }) => {
  const page = pageResolver(data.prismicPage)

  const bg = page.tags.find(tag => tag.includes('bg-'))

  return (
    <div
      className={cn('page h-100 m-auto relative', {
        'page--inverted': page.uid === 'frontpage',
      })}
    >
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
