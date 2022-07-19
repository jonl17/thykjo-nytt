import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment workshopFragmentFull on PrismicWorkshop {
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
        ... on PrismicWorkshopDataBodyRichText {
          ...workshopRichTextSlice
        }
        ... on PrismicWorkshopDataBodyGallery {
          ...workshopGallerySlice
        }
        ... on PrismicWorkshopDataBodyHeading {
          ...workshopHeadingSlice
        }
        ... on PrismicWorkshopDataBodyFeature {
          ...workshopFeatureSlice
        }
        ... on PrismicWorkshopDataBodyMedia {
          ...workshopMediaSlice
        }
      }
    }
  }

  fragment workshopMediaSlice on PrismicWorkshopDataBodyMedia {
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

  fragment workshopFeatureSlice on PrismicWorkshopDataBodyFeature {
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

  fragment workshopHeadingSlice on PrismicWorkshopDataBodyHeading {
    slice_type
    primary {
      heading {
        text
      }
    }
  }

  fragment workshopGallerySlice on PrismicWorkshopDataBodyGallery {
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

  fragment workshopRichTextSlice on PrismicWorkshopDataBodyRichText {
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
