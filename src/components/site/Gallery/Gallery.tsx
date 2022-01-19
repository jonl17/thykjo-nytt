import React, { useState } from 'react'
import Icon from '@cmp/site/Icon'
import { useModal } from '@cmp/site/Modal'
import { GatsbyImage } from 'gatsby-plugin-image'
import { ModalImageType } from '../Modal/Modal'
import cn from 'classnames'

type Props = {
  images: ModalImageType[]
}

const Gallery = ({ images }: Props) => {
  const [selected, setSelected] = useState(0)

  const { updateImage } = useModal()

  const focusedImage = images[selected]

  return (
    <>
      <div className='gallery mb-4'>
        <button className='w-100' onClick={() => updateImage(images[selected])}>
          <div className='gallery__image-wrap'>
            {images.map((image, key) => (
              <div
                key={key}
                className={cn('tilt gallery__image w-100', {
                  'gallery__image--active': key === selected,
                })}
              >
                <GatsbyImage
                  className='h-100 w-100'
                  image={image.gatsbyImageData}
                  alt={image.alt ?? ''}
                />
              </div>
            ))}
          </div>
        </button>
        <div className='gallery__controls w-100 d-flex justify-content-center align-items-center'>
          {images.length > 1 &&
            images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className='p-1'
              >
                <Icon type={selected === index ? 'dotFill' : 'dotNoFill'} />
              </button>
            ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
