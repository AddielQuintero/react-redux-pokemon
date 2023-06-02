import { HookDialogProps } from "@types"

export interface TNavigate {
    name: string
    to: string
    private: boolean
  }
  
  export interface NavigateProps extends Array<TNavigate> {}
  
  export interface HandleClose {
    handleClose?: () => void
  }
  
  export interface MobileMenuProps extends HandleClose, HookDialogProps {
    navigation: NavigateProps
  }

  export interface TLink extends HandleClose {
    children?: React.ReactNode
    className?: string | ((props: { isActive: boolean; isPending: boolean }) => string)
    navigation: NavigateProps
  }
  
  export interface TAuthButton extends HandleClose {
    className?: string
  }