import '@root/src/styles/main.scss'
import { ModalProvider } from '@cmp/site/Modal'
import React from 'react'
import { EyeballProvider } from '@src/context/eyeBallContext'

export const wrapRootElement = ({ element }) => (
  <ModalProvider>
    <EyeballProvider>{element}</EyeballProvider>
  </ModalProvider>
)
