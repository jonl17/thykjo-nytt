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
  Burger,
  BurgerEx,
  Kall,
  Line,
  DotNoFill,
  DotFill,
  OpenEyes,
  ClosedEyes,
  BookLogo,
  DynamicEyes,
  KrakkaradThykjo,
  ThykjoCaps,
  Projects,
  VerticalWorkshops,
  Smidjur,
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
  | 'burger'
  | 'burgerEx'
  | 'kall'
  | 'line'
  | 'dotNoFill'
  | 'dotFill'
  | 'openEyes'
  | 'closedEyes'
  | 'bookLogo'
  | 'dynamicEyes'
  | 'krakkarad'
  | 'thykjoCaps'
  | 'projects'
  | 'workshops'
  | 'smidjur'
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
    burger: Burger,
    burgerEx: BurgerEx,
    kall: Kall,
    line: Line,
    dotNoFill: DotNoFill,
    dotFill: DotFill,
    openEyes: OpenEyes,
    closedEyes: ClosedEyes,
    bookLogo: BookLogo,
    dynamicEyes: DynamicEyes,
    krakkarad: KrakkaradThykjo,
    thykjoCaps: ThykjoCaps,
    projects: Projects,
    workshops: VerticalWorkshops,
    smidjur: Smidjur,
  }

  const IconSvg = icons[type]

  return <IconSvg className={cn('icon', className)} />
}

export default Icon
