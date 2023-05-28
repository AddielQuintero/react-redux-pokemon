import { TPokemonDetail } from '@types'

export const SET_POKEMONS = 'SET_POKEMONS'

export interface State {
  pokemons: TPokemonDetail[]
}

export const initialState = {
  pokemons: [],
}

export type Action = { type: 'SET_POKEMONS'; payload: TPokemonDetail[] }
