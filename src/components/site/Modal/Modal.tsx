import React, { createContext, useContext, useEffect, useState } from 'react'
import Icon from '@cmp/site/Icon'
import { FluidObject } from 'gatsby-image'
import Img from 'gatsby-image'

export type ModalImageType = {
  alt: string
  url: string
  caption: {
    html: string
  }
  fluid: FluidObject
}

const ModalContext = createContext<{
  image: ModalImageType | null
  updateImage: (modalImage: ModalImageType | null) => void
}>({ image: null, updateImage() {} })

const ModalProvider: React.FC = ({ children }) => {
  const [image, setImage] = useState<ModalImageType | null>(null)

  const updateImage = (modalImage: ModalImageType | null) =>
    setImage(modalImage)

  return (
    <ModalContext.Provider value={{ image, updateImage }}>
      {children}
    </ModalContext.Provider>
  )
}

const Modal: React.FC = ({ children }) => {
  const { updateImage, image } = useModal()

  useEffect(() => {
    if (document) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <button
      className='modal-window__close-btn'
      onClick={() => updateImage(null)}
    >
      <div className='modal-window noise'>
        <Icon className='modal-window__close-btn' type='burgerEx' />

        {image && (
          <div className='p-4 modal-window__image-container'>
            <div className='modal-window__image'>
              <Img
                className='h-100 w-100'
                fluid={image.fluid}
                alt={image.alt}
              />
            </div>
            <p>HELLo</p>
          </div>
        )}
      </div>
    </button>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal, Modal }
