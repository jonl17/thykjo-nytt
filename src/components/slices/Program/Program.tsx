import React from 'react'
import Eyes from '@cmp/site/Eyes'
import Frontpage from '@cmp/site/Frontpage'
import AllProjects from '@cmp/site/AllProjects'

type Props = {
  programName: string
}

const Program = ({ programName }: Props) => {
  const types: { [key: string]: React.ElementType } = {
    Eyes,
    Frontpage,
    AllProjects,
  }

  const SelectedProgram = types[programName]

  if (!SelectedProgram) return null

  return <SelectedProgram />
}

export default Program
