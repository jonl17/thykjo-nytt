const { PRISMIC_REPO_NAME, PRISMIC_ACCESS_TOKEN } = process.env

const schemas = {
  page: require('./src/data/schemas/page.json'),
  member: require('./src/data/schemas/member.json'),
  contact_information: require('./src/data/schemas/contact_information.json'),
  menu: require('./src/data/schemas/menu.json'),
  project: require('./src/data/schemas/project.json'),
  seo: require('./src/data/schemas/seo.json'),
}

module.exports = {
  repositoryName: PRISMIC_REPO_NAME,
  accessToken: PRISMIC_ACCESS_TOKEN,
  defaultLanguage: 'en-us',
  langs: ['en-us'],
  defaultFrontpageTag: 'FRONTPAGE',
  schemas,
}
