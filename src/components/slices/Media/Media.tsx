import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import cn from 'classnames'

export type MediaProps = {
  image: {
    url: string
    alt: string
    gatsbyImageData: IGatsbyImageData
  }
  smaller?: boolean
}

const Media = ({ image, smaller = false }: MediaProps) => {
  return (
    <div
      className={cn('media mb-3 mt-n3 mt-lg-0', {
        'col-lg-7': smaller,
      })}
    >
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
