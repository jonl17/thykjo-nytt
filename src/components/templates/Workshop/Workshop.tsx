import React from 'react'
import { graphql } from 'gatsby'
import '@src/data/fragments/workshop'
import { workshopResolver } from '@src/data/resolvers'
import Head from '@cmp/site/Head'
import SliceMapping from '@cmp/slices/sliceMapping'
import FeaturedImage from '@cmp/site/FeaturedImage'
import { Helmet } from 'react-helmet'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

const Workshop = ({ data }: { data: any }) => {
  const workshop = workshopResolver(data.prismicWorkshop)

  return (
    <>
      <Helmet>
        <title>{`${workshop.title.text} - Þykjó`}</title>
        <meta property='description' content={workshop.shortDescription.text} />
        <meta
          property='og:description'
          content={workshop.shortDescription.text}
        />
        <meta property='image' content={workshop.featuredImage.url} />
        <meta property='og:image' content={workshop.featuredImage.url} />
      </Helmet>
      <div className='page h-100 m-auto position-relative pt-3 container'>
        <Head title={workshop.title.text} description={workshop.type} />
        <FeaturedImage {...workshop.featuredImage} />
        <div className='d-flex flex-wrap w-100'>
          {workshop.body.map((slice, i) => (
            <SliceMapping key={i} slice={slice} />
          ))}
        </div>
      </div>
    </>
  )
}

export default withPrismicPreview(Workshop)

export const query = graphql`
  query($id: String) {
    prismicWorkshop(id: { eq: $id }) {
      _previewable
      ...workshopFragmentFull
    }
  }
`
