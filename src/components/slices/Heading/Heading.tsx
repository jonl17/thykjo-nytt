import React from 'react'
import { Fade } from 'react-reveal'

type Props = {
  heading: string
}

const Heading = ({ heading }: Props) => (
  <Fade left duration={500} distance='25px'>
    <h1 className='mb-2 mb-lg-3'>{heading}</h1>
  </Fade>
)

export default Heading
