import { graphql } from 'gatsby'
import './member'
import './project'

export const fragment = graphql`
  fragment pageFragmentFull on PrismicPage {
    id
    uid
    url
    lang
    tags
    data {
      show_header
      page_title {
        text
      }
      subtitle
      featured_image {
        alt
        url
        gatsbyImageData
      }
      body {
        ... on PrismicPageDataBodyProgram {
          ...programSliceFragment
        }
        ... on PrismicPageDataBodyRichText {
          ...richTextSliceFragment
        }
        ... on PrismicPageDataBodyMembers {
          ...membersSliceFragment
        }
        ... on PrismicPageDataBodyHeading {
          ...pageHeadingSlice
        }
        ... on PrismicPageDataBodyProjects {
          ...pageProjectsSlice
        }
        ... on PrismicPageDataBodyMedia {
          ...pageMediaSlice
        }
        ... on PrismicPageDataBodyFeature {
          ...pageFeatureSlice
        }
      }
    }
  }

  fragment pageFeatureSlice on PrismicPageDataBodyFeature {
    slice_type
    id
    primary {
      image_right
      text {
        html
      }
    }
    items {
      image {
        alt
        url
        gatsbyImageData
      }
      caption {
        html
      }
    }
  }

  fragment pageMediaSlice on PrismicPageDataBodyMedia {
    slice_type
    id
    primary {
      smaller
      image {
        url
        alt
        gatsbyImageData
      }
    }
  }

  fragment pageProjectsSlice on PrismicPageDataBodyProjects {
    slice_type
    id
    items {
      project {
        document {
          ... on PrismicProject {
            ...projectFragmentFull
          }
        }
      }
    }
  }

  fragment pageHeadingSlice on PrismicPageDataBodyHeading {
    slice_type
    primary {
      heading {
        text
      }
    }
  }

  fragment membersSliceFragment on PrismicPageDataBodyMembers {
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

  fragment richTextSliceFragment on PrismicPageDataBodyRichText {
    slice_type
    primary {
      font_size
      paragraph_style
      text {
        html
      }
    }
  }

  fragment programSliceFragment on PrismicPageDataBodyProgram {
    slice_type
    primary {
      program_name
    }
  }
`
