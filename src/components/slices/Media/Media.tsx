import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export type MediaProps = {
  image: {
    url: string
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
}

const Media = ({ image }: MediaProps) => {
  return (
    <div className='media mb-3'>
      <GatsbyImage
        className='h-100 w-100'
        image={image.gatsbyImageData}
        alt={image.alt ?? ''}
        objectFit='contain'
      />
    </div>
  )
}

export default Media
