import React from 'react'
import { Fade } from 'react-reveal'

type Props = {
  image: {
    url: string
    alt: string
  }
  iterator: number
}

const Feature: React.FC<Props> = ({ children, image, iterator }) => {
  const isOdd = iterator % 2 === 0

  const animationConfig = {
    distance: '10px',
    duration: 500,
  }

  return (
    <div className='feature mb-5'>
      {!isOdd && (
        <Fade left {...animationConfig}>
          <img className='w-100' src={image.url} alt={image.alt} />
        </Fade>
      )}
      <div className='w-100'>{children}</div>
      {isOdd && (
        <Fade right {...animationConfig}>
          <img className='w-100' src={image.url} alt={image.alt} />{' '}
        </Fade>
      )}
    </div>
  )
}

export default Feature
