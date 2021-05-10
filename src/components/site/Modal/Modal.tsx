import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext<{ open: boolean; triggerModal: () => void }>(
  { open: false, triggerModal() {} }
)

const ModalProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false)

  const triggerModal = () => setOpen(!open)

  return (
    <ModalContext.Provider value={{ open, triggerModal }}>
      {children}
    </ModalContext.Provider>
  )
}

const Modal: React.FC = ({ children }) => {
  return <div className='modal'>{children}</div>
}

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal, Modal }
