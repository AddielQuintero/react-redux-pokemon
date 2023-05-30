import { getPokemonDetail } from '@/services'
import { SET_LOADER, SET_POKEMONS, TPokemon, TPokemonDetail, SetLoader, SetPokemon, Action } from '@types'
import { Dispatch } from 'redux'
import type {} from 'redux-thunk/extend-redux'

export const setPokemons = (payload: TPokemonDetail[]): SetPokemon => ({
  type: SET_POKEMONS,
  payload,
})

export const setLoading = (payload: boolean): SetLoader => ({
  type: SET_LOADER,
  payload,
})

export const getPokemonDetailAction =
  (pokemons: TPokemon[] = []) =>
  async (dispatch: Dispatch<Action>) => {
    const pokemonsDetail = await getPokemonDetail(pokemons)
    dispatch(setPokemons(pokemonsDetail))
    dispatch(setLoading(false))
  }
