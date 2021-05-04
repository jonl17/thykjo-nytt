import { useEffect } from 'react'

const useLockBodyScroll = () => {
  useEffect(() => {
    if (document) {
      document.body.style.overflowY = 'hidden'
    }

    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [])
}

export default useLockBodyScroll
