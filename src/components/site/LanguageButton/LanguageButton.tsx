import React from 'react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'

const LanguageButton = () => {
  const { pathname } = useLocation()

  const isEnglish = pathname.includes('/en')

  return (
    <Link to={isEnglish ? '/' : '/en'} className='language-button'>
      <p>{isEnglish ? 'Íslenska' : 'English'}</p>
    </Link>
  )
}

export default LanguageButton
