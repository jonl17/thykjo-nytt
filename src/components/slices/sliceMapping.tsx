import React from 'react'
import Program from './Program'
import Heading from './Heading'
import RichText from './RichText'
import Members from './Members'
import Feature from '@cmp/site/Feature'
import { memberResolver } from '@src/data/resolvers'
import Gallery from '@cmp/site/Gallery'

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
    case 'members':
      return {
        title: slice.primary.title,
        members: slice.items.map((item: any) =>
          memberResolver(item.member.document)
        ),
      }
    case 'feature':
      return {
        imageRight: slice.primary.image_right,
        onRenderMedia: () => (
          <Gallery
            images={slice.items.map((item: any) => ({
              url: item.image.url,
              alt: item.image.alt,
              caption: item.caption,
            }))}
          />
        ),
        children: (
          <div dangerouslySetInnerHTML={{ __html: slice.primary.text.html }} />
        ),
        containerClass: 'slice-gap',
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
    members: Members,
    feature: Feature,
  }

  const Cmp = sliceTypes[slice.slice_type]

  const props = findProps(slice)

  if (!Cmp) return null

  return <Cmp {...props} />
}

export default SliceMapping
