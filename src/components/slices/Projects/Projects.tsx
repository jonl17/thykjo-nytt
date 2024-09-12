import React from 'react'
import { ProjectInterface } from '@src/data/resolvers'
import '@src/data/fragments/project'
import { Fade } from 'react-reveal'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import AllCustomTypes from '@cmp/site/AllCustomTypes'

interface Props {
  projects: ProjectInterface[]
}

const Projects = ({ projects }: Props) => {
  return (
    <AllCustomTypes
      items={projects.map(project => ({
        url: project.url,
        image: project.featuredImage,
        description: project.shortDescription,
        title: project.title.text,
        type: project.type,
      }))}
    />
  )
}

export default Projects
