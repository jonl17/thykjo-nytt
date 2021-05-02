import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment memberFragmentFull on PrismicMember {
    data {
      name {
        text
        html
      }
      portrait {
        alt
        url
      }
      role
      website_label
      website_url {
        url
      }
      bio {
        html
        text
      }
    }
  }
`
