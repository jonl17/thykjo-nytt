import React, { useState } from 'react'
import Icon from '@cmp/site/Icon'
import { Fade } from 'react-reveal'
import { Modal, useModal } from '@cmp/site/Modal'

type Props = {
  images: {
    alt: string
    url: string
    caption: {
      html: string
    }
  }[]
}

const Gallery = ({ images }: Props) => {
  const [selected, setSelected] = useState(0)

  const { updateImage } = useModal()

  return (
    <>
      <div className='gallery'>
        <Fade spy={selected} duration={500}>
          <button onClick={() => updateImage(images[selected])}>
            <img
              className='w-100'
              src={images[selected].url}
              alt={images[selected].alt}
            />
          </button>
        </Fade>
        <div className='gallery__controls w-100 d-flex justify-content-center align-items-center'>
          {images.length > 1 &&
            images.map((item, index) => (
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
