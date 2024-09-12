const {
  defaultFrontpageTag,
  defaultLanguage,
} = require('../../../prismic-config')

const linkResolver = doc => {
  const isFrontpage = doc.tags && doc.tags.indexOf(defaultFrontpageTag) !== -1
  const project = doc.type === 'project'
  const workshop = doc.type === 'workshop'

  const lang = doc.lang.slice(0, 2)

  // icelandic!
  if (lang === defaultLanguage) {
    if (isFrontpage) {
      return '/'
    } else if (project) {
      return `/verkefni/${doc.uid}`
    } else if (workshop) {
      return `/smidjur/${doc.uid}`
    } else {
      return `/${doc.uid}`
    }
  } else {
    if (isFrontpage) {
      return '/' + lang
    } else if (project) {
      return `/${lang}/projects/${doc.uid}`
    } else if (workshop) {
      return `/workshops/${doc.uid}`
    } else {
      return `/${lang}/${doc.uid}`
    }
  }
}

module.exports = linkResolver
