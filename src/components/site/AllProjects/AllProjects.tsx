import React from 'react'
import { ProjectInterface, projectResolver } from '@src/data/resolvers'
import { useStaticQuery, graphql } from 'gatsby'
import '@src/data/fragments/project'
import { Fade } from 'react-reveal'

const AllProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicProject {
        nodes {
          ...projectFragmentFull
        }
      }
    }
  `)

  const projects: ProjectInterface[] = data.allPrismicProject.nodes.map(
    (node: any) => projectResolver(node)
  )

  return (
    <div className='all-projects slice-gap mt-0'>
      {projects.map((project, i) => (
        <div key={i}>
          <Fade duration={350} up distance='10px'>
            <img
              className='mb-2'
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
        </div>
      ))}
    </div>
  )
}

export default AllProjects
