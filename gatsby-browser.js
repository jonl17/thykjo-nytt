import '@root/src/styles/main.scss'
import { ModalProvider } from '@cmp/site/Modal'
import React from 'react'
import { EyeballProvider } from '@src/context/eyeBallContext'
import linkResolver from './src/data/resolvers/link'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'
import PageTemplate from './src/components/templates/Page/Page.tsx'
import ProjectTemplate from './src/components/templates/Project/Project.tsx'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: 'thykjo',
        linkResolver,
        componentResolver: componentResolverFromMap({
          page: PageTemplate,
        }),
      },
    ]}
  >
    <ModalProvider>
      <EyeballProvider>{element}</EyeballProvider>
    </ModalProvider>
  </PrismicPreviewProvider>
)
