import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment projectFragmentFull on PrismicProject {
    id
    uid
    url
    tags
    lang
    data {
      title {
        text
        html
      }
      featured_image {
        alt
        url
      }
      short_description {
        text
        html
      }
      type
      body {
        ... on PrismicProjectBodyRichText {
          ...projectRichTextSlice
        }
        ... on PrismicProjectBodyGallery {
          ...projectGallerySlice
        }
        ... on PrismicProjectBodyHeading {
          ...projectHeadingSlice
        }
        ... on PrismicProjectBodyFeature {
          ...projectFeatureSlice
        }
      }
    }
  }

  fragment projectFeatureSlice on PrismicProjectBodyFeature {
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
        fluid {
          ...GatsbyPrismicImageFluid
        }
      }
      caption {
        html
      }
    }
  }

  fragment projectHeadingSlice on PrismicProjectBodyHeading {
    slice_type
    primary {
      heading {
        text
      }
    }
  }

  fragment projectGallerySlice on PrismicProjectBodyGallery {
    slice_type
    items {
      image {
        alt
        url
        fluid {
          ...GatsbyPrismicImageFluid
        }
      }
      caption {
        text
        html
      }
    }
  }

  fragment projectRichTextSlice on PrismicProjectBodyRichText {
    slice_type
    primary {
      font_size
      paragraph_style
      text {
        html
        text
      }
    }
  }
`
