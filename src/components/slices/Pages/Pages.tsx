import React from 'react'
import { PageInterface } from '@src/data/resolvers'
import '@src/data/fragments/project'
import AllCustomTypes from '@cmp/site/AllCustomTypes'

interface Props {
  pages: PageInterface[]
}

const Projects = ({ pages }: Props) => {
  return (
    <AllCustomTypes
      items={pages.map(page => ({
        url: page.url,
        image: page.featuredImage,
        description: { html: page.subtitle },
        title: page.title,
        type: 'page',
      }))}
    />
  )
}

export default Projects
