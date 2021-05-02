import { graphql } from 'gatsby'
import './page'

export const fragment = graphql`
  fragment menuFragmentFull on PrismicMenu {
    tags
    id
    data {
      pages {
        page {
          document {
            ... on PrismicPage {
              ...pageFragmentFull
            }
          }
        }
      }
    }
  }
`
