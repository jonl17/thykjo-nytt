import '@root/src/styles/main.scss'
import { ModalProvider } from '@cmp/site/Modal'
import React from 'react'

export const wrapRootElement = ({ element }) => (
  <ModalProvider>{element}</ModalProvider>
)
