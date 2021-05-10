const {
  defaultFrontpageTag,
  defaultLanguage,
} = require('../../../prismic-config')

const linkResolver = doc => {
  const props = doc._meta || doc
  const isFrontpage = doc.tags && doc.tags.indexOf(defaultFrontpageTag) !== -1
  const project = doc.type === 'project'

  if (isFrontpage) {
    return '/'
  } else if (project) {
    return `/verkefni/${doc.uid}`
  } else return `/${doc.uid}`
}

module.exports = linkResolver
