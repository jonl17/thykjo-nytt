import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment seoFragment on PrismicSeo {
    lang
    data {
      description
      keywords
      title
      image {
        url
      }
      favicon {
        url
      }
    }
  }
`
