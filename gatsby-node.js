const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // templates
  const pageTemplate = path.resolve(
    __dirname,
    './src/components/templates/Page/Page.tsx'
  )

  const projectTemplate = path.resolve(
    __dirname,
    './src/components/templates/Project/Project.tsx'
  )

  const workshopTemplate = path.resolve(
    __dirname,
    './src/components/templates/Workshop/Workshop.tsx'
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

  const projects = await graphql(`
    {
      allPrismicProject {
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

  const workshops = await graphql(`
    {
      allPrismicWorkshop {
        nodes {
          uid
          tags
          lang
          url
          id
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

  projects.data.allPrismicProject.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: projectTemplate,
      context: {
        ...node,
      },
    })
  })

  workshops.data.allPrismicWorkshop.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: workshopTemplate,
      context: {
        ...node,
      },
    })
  })
}
