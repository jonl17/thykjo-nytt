import React from 'react'
import { IImage } from '@src/data/resolvers'
import '@src/data/fragments/project'
import { Fade } from 'react-reveal'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

type Props = {
  items: {
    url: string
    image: IImage
    title: string
    type: string
    description: {
      html: string
    }
  }[]
}

const AllCustomTypes = ({ items }: Props) => {
  return (
    <div className='all-projects slice-gap mt-0'>
      {items.map((item, i) => (
        <Link to={item.url} key={i}>
          <Fade duration={350} up distance='10px'>
            <div className='mb-2 image'>
              <GatsbyImage
                className='h-100 w-100 tilt'
                image={item.image.gatsbyImageData}
                alt={item.image.alt ?? ''}
              />
            </div>
            <div>
              <h3 className='mb-1'>{item.title}</h3>
              {item.type !== 'page' && <h4 className='mb-2'>{item.type}</h4>}
              <div
                dangerouslySetInnerHTML={{
                  __html: item.description.html,
                }}
              />
            </div>
          </Fade>
        </Link>
      ))}
    </div>
  )
}

export default AllCustomTypes
