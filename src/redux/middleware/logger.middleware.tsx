import { Dispatch } from 'redux'
import { Action } from '@types'

export const logger = () => (next: Dispatch<Action>) => (action: Action) => {
  console.log('🚀  action:', action)
  next(action)
}
