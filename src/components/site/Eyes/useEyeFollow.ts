import { useEffect } from 'react'

const useEyeFollow = (eyballClass: string, pupilClass: string) => {
  useEffect(() => {
    const eyeBall: SVGCircleElement = document.querySelector(eyballClass)!
    const pupil: SVGCircleElement = document.querySelector(pupilClass)!
    const eyeArea = eyeBall.getBoundingClientRect()

    const pupilArea = pupil.getBoundingClientRect()
    const R = eyeArea.width / 2
    const r = pupilArea.width / 2
    const centerX = eyeArea.left + R
    const centerY = eyeArea.top + R

    const callback = (e: MouseEvent) => {
      const x = e.clientX - centerX
      const y = e.clientY - centerY
      const theta = Math.atan2(y, x)
      const angle = (theta * 180) / Math.PI + 360

      pupil.style.transform = `translateX(${R - r + 'px'}) rotate(${
        angle + 'deg'
      })`
      pupil.style.transformOrigin = `${r + 'px'} center`
    }

    document.addEventListener('mousemove', e => callback(e))

    return document.removeEventListener('mousemove', e => callback(e))
  })
}

export default useEyeFollow
