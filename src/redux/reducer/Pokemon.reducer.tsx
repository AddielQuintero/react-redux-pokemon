import { State, Action, SET_POKEMONS, initialState } from '@types'

export const PokemonsReducer = (state: State = initialState, action: Action) => {
  const actions = {
    [SET_POKEMONS]: () => ({ ...state, pokemons: action.payload }),
  }
  return actions[action.type]?.() || state
}
