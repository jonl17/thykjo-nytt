import React from 'react'
import { graphql } from 'gatsby'
import '@src/data/fragments/project'
import { projectResolver } from '@src/data/resolvers'
import Head from '@cmp/site/Head'
import SliceMapping from '@cmp/slices/sliceMapping'
import FeaturedImage from '@cmp/site/FeaturedImage'
import { Helmet } from 'react-helmet'
import { Modal, useModal } from '@cmp/site/Modal'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

const Project = ({ data }: { data: any }) => {
  const project = projectResolver(data.prismicProject)

  return (
    <>
      <Helmet>
        <title>{`${project.title.text} - Þykjó`}</title>
        <meta property='description' content={project.shortDescription.text} />
        <meta
          property='og:description'
          content={project.shortDescription.text}
        />
        <meta property='image' content={project.featuredImage.url} />
        <meta property='og:image' content={project.featuredImage.url} />
      </Helmet>
      <div className='page h-100 m-auto position-relative pt-3 container'>
        <Head title={project.title.text} description={project.type} />
        <FeaturedImage {...project.featuredImage} />
        <div className='d-flex flex-wrap w-100'>
          {project.body.map((slice, i) => (
            <SliceMapping key={i} slice={slice} />
          ))}
        </div>
      </div>
    </>
  )
}

export default withPrismicPreview(Project)

export const query = graphql`
  query($id: String) {
    prismicProject(id: { eq: $id }) {
      _previewable
      ...projectFragmentFull
    }
  }
`
