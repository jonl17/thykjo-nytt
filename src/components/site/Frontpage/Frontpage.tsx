import React from 'react'
import Icon from '@cmp/site/Icon'
import ContactInformation from '@cmp/site/ContactInformation'

const Frontpage = () => {
  return (
    <div className='frontpage h-100 w-100'>
      <div className='frontpage__grid'>
        <Icon className='w-50 w-lg-100' type='eyes' />
        <div className='text-center w-100'>
          <Icon className='w-75 w-lg-100 mb-md-3' type='logo' />
        </div>
        <ContactInformation />
      </div>
    </div>
  )
}

export default Frontpage
