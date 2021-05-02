import React from 'react'
import { Fade } from 'react-reveal'

type Props = {
  heading: string
}

const Heading = ({ heading }: Props) => (
  <Fade left duration={500} distance='25px'>
    <h1 className='mb-8 lg:mb-16 lg:-ml-16 text-h2 lg:text-h1'>{heading}</h1>
  </Fade>
)

export default Heading
