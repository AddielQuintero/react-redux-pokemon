import { TPokemonDetail } from '@types'

export const SET_POKEMONS = 'SET_POKEMONS'
export const SET_LOADER = 'SET_LOADER'

export interface State {
  pokemons: TPokemonDetail[]
  isLoader: boolean
}

export const initialState = {
  pokemons: [],
  isLoader: true,
}

export type SetPokemon = { type: 'SET_POKEMONS'; payload: TPokemonDetail[] }
export type SetLoader = { type: 'SET_LOADER'; payload: boolean }

export type Action = SetPokemon | SetLoader
