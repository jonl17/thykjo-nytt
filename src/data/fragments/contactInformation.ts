import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment contactInformationFragment on PrismicContactInformation {
    data {
      email
      social_media {
        platform
        link {
          url
        }
      }
    }
  }
`
