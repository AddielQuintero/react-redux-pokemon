import { SET_POKEMONS, SET_LOADER, TOGGLE_FAVORITE, TSetPokemon, TSetLoader, TToggleFavorite, initialState, State, Action, SET_FAVORITE, TSetFavorite } from '@types'

export const PokemonsReducer = (state: State = initialState, action: Action) => {
  const actions = {
    [SET_LOADER]: () => ({ ...state, isLoader: (action as TSetLoader).payload }),
    [SET_POKEMONS]: () => ({ ...state, pokemons: (action as TSetPokemon).payload }),
    [SET_FAVORITE]: () => ({ ...state, favorites: (action as TSetFavorite).payload }),
    [TOGGLE_FAVORITE]: () => {
      const { payload } = action as TToggleFavorite
      const newPokemons = [...state.pokemons]
      const newFavorites = [...state.favorites]
      const pokemonIndex = newPokemons.findIndex((pokemon) => pokemon.id === payload.id)

      if (pokemonIndex < 0) {
        return state
      }

      newPokemons[pokemonIndex].favorite = payload.favorite
      const favorites = payload.favorite
      ? [...newFavorites, payload]
      : newFavorites.filter((favorite) => favorite.id !== payload.id)
      localStorage.setItem('FAVORITES_V1', JSON.stringify(favorites))
      return { ...state, pokemons: newPokemons, favorites: favorites }
    },
  }
  return actions[action.type]?.() || state
}

















// const favorites = newPokemons.filter((pokemon) => pokemon.favorite)

// SOLUTION #1
// [TOGGLE_FAVORITE ]: () => {
//   const { payload } = action as TToggleFavorite
//   const newPokemons = [...state.pokemons]
//   const pokemonIndex = newPokemons.findIndex((pokemon) => pokemon.id === payload)

//   if (pokemonIndex < 0) {
//     return state
//   }

//   newPokemons[pokemonIndex].favorite = !newPokemons[pokemonIndex].favorite
//   const favorites = newPokemons.filter((pokemon) => pokemon.favorite)
//   localStorage.setItem('FAVORITES_V1', JSON.stringify(favorites))
//   return { ...state, pokemons: newPokemons }
// },


// SOLUTION #2
// [TOGGLE_FAVORITE ]: () => {
//   const { payload } = action as TToggleFavorite
//   const newPokemons = state.pokemons.map(pokemon => {
//     if (pokemon.id === payload) {
//       return { ...pokemon, favorite: !pokemon.favorite }
//     }
//     return pokemon
//   })

//   const favorites = newPokemons.filter(pokemon => pokemon.favorite)
//   localStorage.setItem('FAVORITES_V1', JSON.stringify(favorites))
//   return { ...state, pokemons: newPokemons }
// },


// SOLUTION #3
// [TOGGLE_FAVORITE ]: () => {
//   const { payload } = action as TToggleFavorite
//   const pokemonIndex = state.favorites.findIndex((favorite) => favorite.id === payload)

//   if (pokemonIndex >= 0) {
//     const newFavorites = [...state.favorites]
//     newFavorites.splice(pokemonIndex, 1)
//     return { ...state, favorites: newFavorites }
//   }

//   const newFavorites = [...state.favorites, { id: payload }]
//   return { ...state, favorites: newFavorites }
// },