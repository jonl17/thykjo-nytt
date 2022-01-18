import React from 'react'
import { ProjectInterface, projectResolver } from '@src/data/resolvers'
import { useStaticQuery, graphql } from 'gatsby'
import '@src/data/fragments/project'
import { Fade } from 'react-reveal'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

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
        <Link to={project.url} key={i}>
          <Fade duration={350} up distance='10px'>
            <GatsbyImage
              className='tilt mb-2 image'
              image={project.featuredImage.gatsbyImageData}
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
