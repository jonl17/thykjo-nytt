import React, { createContext, useContext, useState, useEffect } from 'react'

const EyeBallContext = createContext<{
  x: number
  updateX: (cord: number) => void
  useMoveEyes: (selector: string) => void
}>({ x: 0, updateX() {}, useMoveEyes() {} })

const EyeballProvider: React.FC = ({ children }) => {
  const [x, setX] = useState(0)
  const updateX = (num: number) => setX(num)

  const useMoveEyes = (selector: string) => {
    useEffect(() => {
      const eyes = document.querySelectorAll<SVGPathElement>(selector)
      const eyeArr: SVGPathElement[] = Array.from(eyes)
      if (eyeArr.length > 0) {
        eyeArr[0].style.transform = `translateX(${x}px)`
        eyeArr[1].style.transform = `translateX(${x}px)`
      }
    }, [x])
  }

  return (
    <EyeBallContext.Provider value={{ x, updateX, useMoveEyes }}>
      {children}
    </EyeBallContext.Provider>
  )
}

const useEyeballs = () => useContext(EyeBallContext)

export { EyeballProvider, useEyeballs }
