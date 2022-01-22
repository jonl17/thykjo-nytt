import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import '@src/data/fragments/seo'
import { SEOInterface, seoResolver } from '@src/data/resolvers'

type SEOProps = {
  lang: string
}

const SEO = ({ lang }: SEOProps) => {
  const data = useStaticQuery(graphql`
    {
      allPrismicSeo {
        nodes {
          ...seoFragment
        }
      }
    }
  `)

  const metas: SEOInterface[] = data.allPrismicSeo.nodes.map((node: any) =>
    seoResolver(node)
  )

  const meta = metas.find(seo => seo.lang === lang) ?? metas[0]

  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>{meta.title}</title>
      <link rel='icon' href={meta.favicon.url} type='image/png' />

      <meta property='description' content={meta.description} />
      <meta property='keywords' content={meta.keywords} />

      <meta property='og:image' content={meta.image.url} />
      <meta property='og:description' content={meta.description} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image.url} />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default SEO
