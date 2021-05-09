import React from 'react'

type Props = {
  title: string
  description: string
}

const Head = ({ title, description }: Props) => {
  return (
    <div className='container mx-auto head mb-2'>
      <h2 className='mb-2'>{title}</h2>
      <h4>{description}</h4>
    </div>
  )
}

export default Head
