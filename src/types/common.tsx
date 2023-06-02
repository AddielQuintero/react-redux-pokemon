import { CSSProperties } from 'react'

// Card
export interface CardLinkProps {
  to: string
  label: string
  classLink: string
  styleLink: any
}

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

//Dialog
export interface StylesProps {
  dialog: string
  panel: string
  title: string
  content: string
  backdrop: string
}

export interface TransitionOption {
  enter: string
  enterFrom: string
  enterTo: string
  leave: string
  leaveFrom: string
  leaveTo: string
}

export interface TransitionProps {
  backdrop?: TransitionOption
  panel?: TransitionOption
}

export interface CustomDialogProps {
  open: boolean
  title?: string
  className?: string
  styles?: StylesProps
  transition: TransitionProps
  children?: React.ReactNode
  onClose: (value: boolean) => void
}

export interface HookDialogProps {
  open: boolean
  onClose: () => void
  closeModal: () => void
}
