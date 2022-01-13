import React from 'react'
import { Fade } from 'react-reveal'
import cn from 'classnames'

type Props = {
  imageRight: boolean
  onRenderMedia: () => React.ReactNode
  containerClass?: string
}

const Feature: React.FC<Props> = ({
  children,
  imageRight,
  onRenderMedia,
  containerClass = '',
}) => {
  const animationConfig = {
    distance: '10px',
    duration: 500,
  }

  return (
    <>
      {/* mobile below */}
      <div className={cn('feature mb-5 d-block d-lg-none', containerClass)}>
        <Fade left {...animationConfig}>
          {onRenderMedia()}
        </Fade>
        <div className='w-100 mt-3'>{children}</div>
      </div>
      {/* desktop below */}
      <div className={cn('feature mb-5 d-none d-lg-flex', containerClass)}>
        {!imageRight && (
          <Fade left {...animationConfig}>
            {onRenderMedia()}
          </Fade>
        )}
        <div className='w-100'>{children}</div>
        {imageRight && (
          <Fade right {...animationConfig}>
            {onRenderMedia()}
          </Fade>
        )}
      </div>
    </>
  )
}

export default Feature
