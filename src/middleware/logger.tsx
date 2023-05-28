import { Dispatch } from 'redux'
import { Action } from '@types'

export const logger = () => (next: Dispatch<Action>) => (action: Action) => {
  console.log('🚀  action:', action)
  next(action)
}

export const prefix = () => (next: Dispatch<Action>) => (action: Action) => {
  const prefix = action.payload.map((pokemon) => ({ ...pokemon, name: 'poke-' + pokemon.name }))
  const updateAction = { ...action, payload: prefix }
  next(updateAction)
}
