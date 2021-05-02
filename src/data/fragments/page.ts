import { graphql } from 'gatsby'
import './member'

export const fragment = graphql`
  fragment pageFragmentFull on PrismicPage {
    id
    uid
    url
    lang
    tags
    data {
      page_title {
        text
      }
      subtitle
      featured_image {
        alt
        url
      }
      body {
        ... on PrismicPageBodyProgram {
          ...programSliceFragment
        }
        ... on PrismicPageBodyRichText {
          ...richTextSliceFragment
        }
        ... on PrismicPageBodyMembers {
          ...membersSliceFragment
        }
        ... on PrismicPageBodyHeading {
          ...pageHeadingSlice
        }
      }
    }
  }

  fragment pageHeadingSlice on PrismicPageBodyHeading {
    slice_type
    primary {
      heading {
        text
      }
    }
  }

  fragment membersSliceFragment on PrismicPageBodyMembers {
    slice_type
    primary {
      title {
        html
        text
      }
    }
    items {
      member {
        document {
          ... on PrismicMember {
            ...memberFragmentFull
          }
        }
      }
    }
  }

  fragment richTextSliceFragment on PrismicPageBodyRichText {
    slice_type
    primary {
      font_size
      paragraph_style
      text {
        html
      }
    }
  }

  fragment programSliceFragment on PrismicPageBodyProgram {
    slice_type
    primary {
      program_name
    }
  }
`
