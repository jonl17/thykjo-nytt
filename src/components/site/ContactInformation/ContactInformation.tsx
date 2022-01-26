import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '@src/data/fragments/contactInformation'
import { contactInformationResolver } from '@src/data/resolvers'
import Icon from '@cmp/site/Icon'

const ContactInformation = () => {
  const data = useStaticQuery(graphql`
    {
      prismicContactInformation {
        ...contactInformationFragment
      }
    }
  `)

  const information = contactInformationResolver(data.prismicContactInformation)

  return (
    <div className='contact-information'>
      <div
        className='contact-information__grid mb-2'
        aria-label='social media links'
      >
        {information.socialMedia.map(item => (
          <a key={item.url} href={item.url} target='_blank'>
            <Icon className='w-100' type={item.platform} />
          </a>
        ))}
      </div>
      <p>{information.email}</p>
    </div>
  )
}

export default ContactInformation
