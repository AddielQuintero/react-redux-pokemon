import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const useNotification = () => {
  const configs: ToastOptions = {
    position: 'top-right',
    autoClose: 2500,
    closeOnClick: true,
    theme: 'dark',
    hideProgressBar: true,
  }

  const triggerSuccessNotification = (message: string) => {
    toast.success(message, configs)
  }

  const triggerErrorNotification = (message: string) => {
    toast.error(message, configs)
  }

  const triggerWarningNotification = (message: string) => {
    toast.warning(message, configs)
  }

  return { triggerErrorNotification, triggerSuccessNotification, triggerWarningNotification }
}
