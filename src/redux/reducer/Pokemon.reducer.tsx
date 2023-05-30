import { State, Action, SET_POKEMONS, initialState, SET_LOADER, SetPokemon, SetLoader } from '@types'

export const PokemonsReducer = (state: State = initialState, action: Action) => {
  const actions = {
    [SET_POKEMONS]: () => ({ ...state, pokemons: (action as SetPokemon).payload }),
    [SET_LOADER]: () => ({ ...state, isLoader: (action as SetLoader).payload }),
  }
  return actions[action.type]?.() || state
}
