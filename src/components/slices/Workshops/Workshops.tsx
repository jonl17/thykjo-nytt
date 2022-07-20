import { WorkshopInterface } from '@src/data/resolvers'
import React from 'react'
import AllCustomTypes from '@cmp/site/AllCustomTypes'

export interface WorkshopsProps {
  workshops: WorkshopInterface[]
}

const Workshops = ({ workshops }: WorkshopsProps) => {
  console.log(workshops)
  return (
    <AllCustomTypes
      items={workshops.map(workshop => ({
        url: workshop.url,
        image: workshop.featuredImage,
        description: workshop.shortDescription,
        title: workshop.title.text,
        type: workshop.type,
      }))}
    />
  )
}

export default Workshops
