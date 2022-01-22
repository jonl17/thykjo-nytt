const {
  defaultFrontpageTag,
  defaultLanguage,
} = require('../../../prismic-config')

const linkResolver = doc => {
  const props = doc._meta || doc
  const isFrontpage = doc.tags && doc.tags.indexOf(defaultFrontpageTag) !== -1
  const project = doc.type === 'project'

  if (isFrontpage) {
    return doc.lang === defaultLanguage ? '/' : `/${doc.lang}`
  } else if (project) {
    return doc.lang === defaultLanguage
      ? `/verkefni/${doc.uid}`
      : `/${doc.lang}/projects/${doc.uid}`
  } else
    return doc.lang === defaultLanguage
      ? `/${doc.uid}`
      : `/${doc.lang}/${doc.uid}`
}

module.exports = linkResolver
