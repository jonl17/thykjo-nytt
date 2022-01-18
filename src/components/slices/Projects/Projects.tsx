import React from 'react'
import { ProjectInterface } from '@src/data/resolvers'
import '@src/data/fragments/project'
import { Fade } from 'react-reveal'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

interface Props {
  projects: ProjectInterface[]
}

const AllProjects = ({ projects }: Props) => {
  return (
    <div className='all-projects slice-gap mt-0'>
      {projects.map((project, i) => (
        <Link to={project.url} key={i}>
          <Fade duration={350} up distance='10px'>
            <div className='mb-2 image'>
              <GatsbyImage
                className='h-100 w-100 tilt'
                image={project.featuredImage.gatsbyImageData}
                alt={project.featuredImage.alt ?? ''}
              />
            </div>
            <div>
              <h3 className='mb-1'>{project.title.text}</h3>
              <h4 className='mb-2'>{project.type}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: project.shortDescription.html,
                }}
              />
            </div>
          </Fade>
        </Link>
      ))}
    </div>
  )
}

export default AllProjects
