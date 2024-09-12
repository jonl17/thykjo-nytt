import React from 'react'
import Frontpage from '@cmp/site/Frontpage'

type Props = {
  programName: string
}

const Program = ({ programName }: Props) => {
  const types: { [key: string]: React.ElementType } = {
    Frontpage,
  }

  const SelectedProgram = types[programName]

  if (!SelectedProgram) return null

  return <SelectedProgram />
}

export default Program
