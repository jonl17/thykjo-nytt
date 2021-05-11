import React, { useState } from 'react'
import Icon from '@cmp/site/Icon'
import cn from 'classnames'
import { Fade } from 'react-reveal'

type Props = {
  url: string
  alt: string | null
}

const FeaturedImage = ({ url, alt }: Props) => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      {/* desktop */}
      <div
        className={cn('featured-image-desktop', {
          'featured-image-desktop--hide': !visible,
        })}
      >
        <button className='tilt' onClick={() => setVisible(false)}>
          <Fade duration={250} delay={300} up distance='10px'>
            <div className='position-relative'>
              <Icon
                className='featured-image-desktop__close-button'
                type='burgerEx'
              />
              <img
                className='object-cover object-center w-full h-full'
                src={url}
                alt={alt ?? ''}
              />
            </div>
          </Fade>
        </button>
      </div>
      {/* mobile */}
      <div className='d-block d-lg-none featured-image-mobile pb-3'>
        <img src={url} />
      </div>
    </>
  )
}

export default FeaturedImage
