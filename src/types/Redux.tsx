import { TPokemon, TPokemonFavorite, TPokemonFilteredDetail } from '@types'

export const SET_POKEMONS = 'SET_POKEMONS'
export const SET_POKEMON_DETAIL = 'SET_POKEMON_DETAIL'
export const SET_LOADER = 'SET_LOADER'
export const SET_FAVORITE = 'SET_FAVORITE'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export interface State {
  isLoader: boolean
  pokemons: TPokemon[]
  pokemonFilteredDetail: TPokemonFilteredDetail
  favorites: TPokemonFavorite[]
}

export const initialState = {
  isLoader: true,
  pokemons: [],
  pokemonFilteredDetail: {} as TPokemonFilteredDetail,
  favorites: [],
}

export type TSetPokemon = { type: 'SET_POKEMONS'; payload: TPokemon[] }
export type TSetPokemonFilteredDetail = { type: 'SET_POKEMON_DETAIL'; payload: TPokemonFilteredDetail }
export type TSetLoader = { type: 'SET_LOADER'; payload: boolean }
export type TSetFavorite = { type: 'SET_FAVORITE'; payload: TPokemonFavorite[] }
export type TToggleFavorite = { type: 'TOGGLE_FAVORITE'; payload: TPokemonFavorite }

export type Action = TSetPokemon | TSetPokemonFilteredDetail | TSetLoader | TSetFavorite | TToggleFavorite
