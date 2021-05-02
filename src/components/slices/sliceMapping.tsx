import React from 'react'
import Program from './Program'
import Heading from './Heading'
import RichText from './RichText'

type SliceProps = {
  slice_type: string
  primary: any
  items: any[]
}

const findProps = (slice: any) => {
  switch (slice.slice_type) {
    case 'program':
      return {
        programName: slice.primary.program_name,
      }
    case 'heading':
      return {
        heading: slice.primary.heading.text,
      }
    case 'rich_text':
      return {
        html: slice.primary.text.html,
        paragraphStyle: slice.primary.paragraph_style,
        fontSize: slice.primary.font_size,
      }

    default:
      return slice
  }
}

const SliceMapping = ({ slice }: { slice: SliceProps }) => {
  const sliceTypes: { [key: string]: React.ElementType } = {
    program: Program,
    heading: Heading,
    rich_text: RichText,
  }

  const Cmp = sliceTypes[slice.slice_type]

  const props = findProps(slice)

  if (!Cmp) return null

  return <Cmp {...props} />
}

export default SliceMapping
