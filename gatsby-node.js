const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // templates
  const pageTemplate = path.resolve(
    __dirname,
    './src/components/templates/Page/Page.tsx'
  )

  // queries
  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          uid
          tags
          lang
          id
          url
          type
        }
      }
    }
  `)

  // create pages
  pages.data.allPrismicPage.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        ...node,
      },
    })
  })
}
