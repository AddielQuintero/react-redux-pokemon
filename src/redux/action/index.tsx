import { SET_LOADER, SET_POKEMONS, SET_FAVORITE, TOGGLE_FAVORITE, TPokemon, TPokemonDetail } from '@types'
import { TSetLoader, TSetPokemon, TSetFavorite, TToggleFavorite, TPokemonFavorite, Action } from '@types'
import { getPokemonDetail } from '@services'
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

export const toggleFavorite = (payload: TPokemonFavorite): TToggleFavorite => ({
  type: TOGGLE_FAVORITE,
  payload,
})

export const setFavorite = (payload: TPokemonFavorite[]): TSetFavorite => ({
  type: SET_FAVORITE,
  payload,
})

export const getPokemonDetailAction =
  (pokemons: TPokemon[] = []) =>
  async (dispatch: Dispatch<Action>) => {
    const pokemonsDetail = await getPokemonDetail(pokemons)

    dispatch(setPokemons(pokemonsDetail))
    dispatch(setLoading(false))
  }
