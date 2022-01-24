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
        gatsbyImageData
      }
      short_description {
        text
        html
      }
      type
      body {
        ... on PrismicProjectDataBodyRichText {
          ...projectRichTextSlice
        }
        ... on PrismicProjectDataBodyGallery {
          ...projectGallerySlice
        }
        ... on PrismicProjectDataBodyHeading {
          ...projectHeadingSlice
        }
        ... on PrismicProjectDataBodyFeature {
          ...projectFeatureSlice
        }
        ... on PrismicProjectDataBodyMedia {
          ...projectMediaSlice
        }
      }
    }
  }

  fragment projectMediaSlice on PrismicProjectDataBodyMedia {
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

  fragment projectFeatureSlice on PrismicProjectDataBodyFeature {
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

  fragment projectHeadingSlice on PrismicProjectDataBodyHeading {
    slice_type
    primary {
      heading {
        text
      }
    }
  }

  fragment projectGallerySlice on PrismicProjectDataBodyGallery {
    slice_type
    items {
      image {
        alt
        url
        gatsbyImageData
      }
      caption {
        text
        html
      }
    }
  }

  fragment projectRichTextSlice on PrismicProjectDataBodyRichText {
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
