import React from 'react'
import { ProjectInterface } from '@src/data/resolvers'
import '@src/data/fragments/project'
import { Fade } from 'react-reveal'
import { Link } from 'gatsby'

interface Props {
  projects: ProjectInterface[]
}

const AllProjects = ({ projects }: Props) => {
  return (
    <div className='all-projects slice-gap mt-0'>
      {projects.map((project, i) => (
        <Link to={project.url} key={i}>
          <Fade duration={350} up distance='10px'>
            <img
              className='tilt mb-2'
              src={project.featuredImage.url}
              alt={project.featuredImage.alt}
            />
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
