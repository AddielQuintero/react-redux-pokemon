import { getPokemonDetail } from '@/services'
import { SET_LOADER, SET_POKEMONS, TOGGLE_FAVORITE, TPokemon, TPokemonDetail, SET_FAVORITE, TSetFavorite } from '@types'
import { TSetLoader, TSetPokemon, TToggleFavorite, Action } from '@types'
import { Dispatch } from 'redux'
import type {} from 'redux-thunk/extend-redux'

export const setPokemons = (payload: TPokemonDetail[]): TSetPokemon => ({
  type: SET_POKEMONS,
  payload,
})

export const setLoading = (payload: boolean): TSetLoader => ({
  type: SET_LOADER,
  payload,
})

export const toggleFavorite = (payload: number): TToggleFavorite => ({
  type: TOGGLE_FAVORITE,
  payload,
})

export const setFavorite = (payload: TPokemonDetail[]): TSetFavorite => ({
  type: SET_FAVORITE,
  payload,
})

export const getPokemonDetailAction =
  (pokemons: TPokemon[] = []) =>
  async (dispatch: Dispatch<Action>) => {
    // const favoriteStorage = localStorage.getItem('FAVORITES_V1')
    // const parseFavorite: TPokemonDetail[] = favoriteStorage ? JSON.parse(favoriteStorage) : []

    const pokemonsDetail = await getPokemonDetail(pokemons)

    // const updatedPokemonsDetail = pokemonsDetail.map((pokemon) => {
      // const favoritePokemon = parseFavorite.find((favPokemon) => favPokemon.id === pokemon.id)
      // return favoritePokemon ? { ...pokemon, isFavorite: favoritePokemon.isFavorite } : pokemon
    // })

    // dispatch(setFavorite(parseFavorite))
    dispatch(setPokemons(pokemonsDetail))
    dispatch(setLoading(false))
  }
