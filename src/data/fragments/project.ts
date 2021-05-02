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
        ... on PrismicProjectBodyFeatures {
          ...projectFeaturesSlice
        }
      }
    }
  }

  fragment projectFeaturesSlice on PrismicProjectBodyFeatures {
    slice_type
    id
    items {
      name
      text {
        html
      }
      image_one {
        url
        alt
        fluid {
          ...GatsbyPrismicImageFluid
        }
      }
      image_two {
        alt
        url
        fluid {
          ...GatsbyPrismicImageFluid
        }
      }
      image_three {
        alt
        url
        fluid {
          ...GatsbyPrismicImageFluid
        }
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
