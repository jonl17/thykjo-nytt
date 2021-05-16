import React from 'react'
import Icon from '@cmp/site/Icon'
import ContactInformation from '@cmp/site/ContactInformation'
import { useEyeballs } from '@src/context/eyeBallContext'
import Eyes from '@cmp/site/Eyes'

const Frontpage = () => {
  const { useMoveEyes } = useEyeballs()

  useMoveEyes('.eye-ball')

  return (
    <div className='frontpage h-100 w-100'>
      <div className='frontpage__grid'>
        <div className='frontpage__desktop-logos my-3'>
          <Eyes />
          <Icon className='frontpage__desktop-logos--book' type='bookLogo' />
        </div>
        <div className='text-center w-100 d-flex d-lg-none flex-column justify-content-center align-items-center'>
          <Icon className='w-75' type='eyes' />
          <Icon className='w-75 w-lg-100 mb-md-3' type='logo' />
        </div>
        <ContactInformation />
      </div>
    </div>
  )
}

export default Frontpage
