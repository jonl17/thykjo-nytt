import React from 'react'
import {
  Logo,
  Eyes,
  Facebook,
  Instagram,
  Close,
  VerticalEyes,
  VerticalThykjo,
  VerticalVerkefni,
} from './svg'
import cn from 'classnames'

export type IconType =
  | 'logo'
  | 'eyes'
  | 'facebook'
  | 'instagram'
  | 'close'
  | 'verticalEyes'
  | 'verticalThykjo'
  | 'verticalVerkefni'
interface Props {
  type: IconType
  className?: string
}

const Icon = ({ type, className }: Props) => {
  const icons: { [key in IconType]: React.ElementType } = {
    logo: Logo,
    eyes: Eyes,
    facebook: Facebook,
    instagram: Instagram,
    close: Close,
    verticalEyes: VerticalEyes,
    verticalThykjo: VerticalThykjo,
    verticalVerkefni: VerticalVerkefni,
  }

  const IconSvg = icons[type]

  return <IconSvg className={cn('icon', className)} />
}

export default Icon
