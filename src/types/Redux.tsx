import { TPokemon, TPokemonFavorite, TPokemonFilteredDetail } from '@types'

export interface TStore {
  data: {
    isLoader: boolean
    pokemons: TPokemon[]
    pokemonFilteredDetail: TPokemonFilteredDetail
    favorites: TPokemonFavorite[]
  }
}

export interface State {
  isLoader: boolean
  pokemons: TPokemon[]
  pokemonFilteredDetail: TPokemonFilteredDetail
  favorites: TPokemonFavorite[]
}

export const initialState: State = {
  isLoader: true,
  pokemons: [],
  pokemonFilteredDetail: {} as TPokemonFilteredDetail,
  favorites: [],
}

export type TSetPokemon = { type: 'data/setPokemons'; payload: TPokemon[] }
export type TSetPokemonFilteredDetail = {  type: 'data/setPokemonFilteredDetail', payload: TPokemonFilteredDetail }
export type TSetLoader = { type: 'data/setLoading'; payload: boolean }
export type TSetFavorite = { type: 'data/setFavorite'; payload: TPokemonFavorite[] }
export type TToggleFavorite = { type: 'data/toggleFavorite'; payload: TPokemonFavorite }

export type Action = TSetPokemon | TSetPokemonFilteredDetail | TSetLoader | TSetFavorite | TToggleFavorite
