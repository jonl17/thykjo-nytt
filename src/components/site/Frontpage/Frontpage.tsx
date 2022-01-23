import React from 'react'
import Icon from '@cmp/site/Icon'
import ContactInformation from '@cmp/site/ContactInformation'
import { useEyeballs } from '@src/context/eyeBallContext'
import LanguageButton from '../LanguageButton'

const Frontpage = () => {
  const { useMoveEyes } = useEyeballs()

  useMoveEyes('.eye-ball')

  return (
    <>
      <div className='d-none d-lg-block w-100 h-100'>
        <LanguageButton />
        <div className='frontpage h-100 w-100'>
          <div className='frontpage__grid'>
            <div className='frontpage__desktop-logos my-3'>
              <Icon className='eyes' type='dynamicEyes' />
              <Icon
                className='frontpage__desktop-logos--book'
                type='bookLogo'
              />
            </div>
            <div className='text-center w-100 d-flex d-lg-none flex-column justify-content-center align-items-center'>
              <Icon className='eyes' type='dynamicEyes' />

              <Icon className='w-50 w-lg-100 mb-md-3' type='logo' />
            </div>
            <ContactInformation />
          </div>
        </div>
      </div>
      <div className='d-lg-none mobile-frontpage'>
        <Icon className='eyes position-relative' type='dynamicEyes' />
        <Icon type='logo' className='w-100 px-4' />
        <div className='d-flex w-100 justify-content-center'>
          <ContactInformation />
        </div>
      </div>
    </>
  )
}

export default Frontpage
