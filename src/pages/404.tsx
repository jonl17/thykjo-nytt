import React from 'react'
import {
  withPrismicUnpublishedPreview,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import linkResolver from '../data/resolvers/link'
import PageTemplate from '../components/templates/Page/Page'
import ProjectTemplate from '../components/templates/Project/Project'
import WorkshopTemplate from '../components/templates/Workshop/Workshop'

const PageNotFound = () => {
  return <p className='text-center'>404 | þessi síða fannst ekki</p>
}

export default withPrismicUnpublishedPreview(PageNotFound, [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME || '',
    linkResolver,
    componentResolver: componentResolverFromMap({
      page: PageTemplate,
      project: ProjectTemplate,
      workshop: WorkshopTemplate,
    }),
  },
])
