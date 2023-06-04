import { TPokemon, TPokemonFavorite } from '@types'

export const SET_POKEMONS = 'SET_POKEMONS'
export const SET_LOADER = 'SET_LOADER'
export const SET_FAVORITE = 'SET_FAVORITE'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export interface State {
  isLoader: boolean
  pokemons: TPokemon[]
  favorites: TPokemonFavorite[]
}

export const initialState = {
  isLoader: true,
  pokemons: [],
  favorites: [],
}

export type TSetPokemon = { type: 'SET_POKEMONS'; payload: TPokemon[] }
export type TSetLoader = { type: 'SET_LOADER'; payload: boolean }
export type TSetFavorite = { type: 'SET_FAVORITE'; payload: TPokemonFavorite[] }
export type TToggleFavorite = { type: 'TOGGLE_FAVORITE'; payload: TPokemonFavorite }

export type Action = TSetPokemon | TSetLoader | TToggleFavorite | TSetFavorite
