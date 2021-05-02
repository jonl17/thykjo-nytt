import React from 'react'
import cn from 'classnames'
import { Fade } from 'react-reveal'

type Props = {
  html: string
  paragraphStyle: 'wide' | 'slim' | 'center'
  fontSize: 'normal' | 'large' | 'small'
}

const RichText = ({ html, paragraphStyle, fontSize }: Props) => {
  console.log(paragraphStyle, fontSize)
  return (
    <Fade up distance='25px' duration={500}>
      <div
        className={cn(
          'rich-text mb-lg-3 pr-lg-3',
          `parag--${fontSize}`,
          `rich-text--${paragraphStyle}`
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Fade>
  )
}

export default RichText
