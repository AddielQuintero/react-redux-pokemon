import { CSSProperties } from 'react'

export interface CardLinkProps {
  to: string
  label: string
  classLink: string
  styleLink: any
}

// Card
export interface CardProps {
  style?: CSSProperties
  className?: string
  classHeader?: string
  classTitle?: string
  classSubTitle?: string
  classContentLink?: string
  classBody?: string
  classBodyTitle?: string
  classBodyDescription?: string
  classImg?: string
  classContentImg?: string
  classText?: string
  classFooter?: string
  links?: CardLinkProps[]
  styleLink?: any
  children?: React.ReactNode
  variant?: string
  header?: string
  title?: string
  subTitle?: string
  bodyTitle?: string
  bodyDescription?: string
  text?: string
  footer?: string
  src?: string
  alt?: string
  hr?: boolean
}
