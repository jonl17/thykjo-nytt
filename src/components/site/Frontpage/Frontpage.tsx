import React, { useEffect } from 'react'
import Icon from '@cmp/site/Icon'
import ContactInformation from '@cmp/site/ContactInformation'
import { useEyeballs } from '@src/context/eyeBallContext'

const Frontpage = () => {
  const { x } = useEyeballs()

  useEffect(() => {
    const eyes = document.querySelectorAll('.eye-ball')
    const eyeArr = Array.from(eyes)
    if (eyeArr.length > 0) {
      eyeArr[0].style.transform = `translateX(${x}px)`
      eyeArr[1].style.transform = `translateX(${x}px)`
    }
  }, [x])

  return (
    <div className='frontpage h-100 w-100'>
      <div className='frontpage__grid'>
        <Icon className='open-eyes' type='openEyes' />
        <div className='text-center w-100'>
          <Icon className='w-75 w-lg-100 mb-md-3' type='logo' />
        </div>
        <ContactInformation />
      </div>
    </div>
  )
}

export default Frontpage
