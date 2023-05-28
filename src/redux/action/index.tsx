import { SET_POKEMONS, TPokemonDetail } from '@types'

export const setPokemons = (payload: TPokemonDetail[]) => ({
  type: SET_POKEMONS,
  payload,
})
