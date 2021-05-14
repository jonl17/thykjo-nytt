import React, { createContext, useContext, useState } from 'react'

const EyeBallContext = createContext<{
  x: number
  updateX: (n: number) => void
}>({ x: 0, updateX() {} })

const EyeballProvider: React.FC = ({ children }) => {
  const [x, setX] = useState(0)
  const updateX = (num: number) => setX(num)

  return (
    <EyeBallContext.Provider value={{ x, updateX }}>
      {children}
    </EyeBallContext.Provider>
  )
}

const useEyeballs = () => useContext(EyeBallContext)

export { EyeballProvider, useEyeballs }
