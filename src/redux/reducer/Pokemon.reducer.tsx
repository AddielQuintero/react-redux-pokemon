import {
  SET_POKEMONS,
  SET_POKEMON_DETAIL,
  SET_LOADER,
  TOGGLE_FAVORITE,
  SET_FAVORITE,
  TSetPokemon,
  TSetPokemonFilteredDetail,
  TSetLoader,
  TToggleFavorite,
  TSetFavorite,
  initialState,
  State,
  Action,
} from '@types'

export const PokemonsReducer = (state: State = initialState, action: Action): State => {
  const actions = {
    [SET_LOADER]: () => ({ ...state, isLoader: (action as TSetLoader).payload }),
    [SET_POKEMONS]: () => ({ ...state, pokemons: (action as TSetPokemon).payload }),
    [SET_POKEMON_DETAIL]: () => ({
      ...state,
      pokemonFilteredDetail: (action as TSetPokemonFilteredDetail).payload,
    }),
    [SET_FAVORITE]: () => ({ ...state, favorites: (action as TSetFavorite).payload }),
    [TOGGLE_FAVORITE]: () => {
      const { payload } = action as TToggleFavorite
      const newPokemons = [...state.pokemons]
      const newPokemonsFiltered = { ...state.pokemonFilteredDetail }
      const newFavorites = [...state.favorites]
      const pokemonIndex = newPokemons.findIndex((pokemon) => pokemon.id === payload.id)

      if (!newPokemons.length) {
        const favorites = payload.favorite
          ? [...newFavorites, payload]
          : newFavorites.filter((favorite) => favorite.id !== payload.id)
        localStorage.setItem('FAVORITES_V1', JSON.stringify(favorites))
        return {...state, favorites, pokemonFilteredDetail: { ...newPokemonsFiltered, favorite: payload.favorite }}
      }

      if (pokemonIndex < 0) {
        return state
      }

      newPokemons[pokemonIndex].favorite = payload.favorite
      const favorites = payload.favorite
        ? [...newFavorites, payload]
        : newFavorites.filter((favorite) => favorite.id !== payload.id)
      localStorage.setItem('FAVORITES_V1', JSON.stringify(favorites))
      return {...state, pokemons: newPokemons, favorites: favorites, pokemonFilteredDetail: { ...newPokemonsFiltered, favorite: payload.favorite }}
    },
  }
  return actions[action.type]?.() || state
}


/** IMMER */
// import { produce } from 'immer'

// export const PokemonsReducer = (state: State = initialState, action: Action) => {
//   const actions = {
//     [SET_LOADER]: () => {
//       return produce(state, (draftState) => {
//         draftState.isLoader = action.payload;
//       });
//     },
//     [SET_POKEMONS]: () => {
//       return produce(state, (draftState) => {
//         draftState.pokemons = action.payload;
//       });
//     },
//     [SET_POKEMON_DETAIL]: () => {
//       return produce(state, (draftState) => {
//         draftState.pokemonFilteredDetail = action.payload;
//       });
//     },
//     [SET_FAVORITE]: () => {
//       return produce(state, (draftState) => {
//         draftState.favorites = action.payload;
//       });
//     },
//     [TOGGLE_FAVORITE]: () => {
//       return produce(state, (draftState) => {
//         const { payload } = action as TToggleFavorite;
//         const pokemonIndex = draftState.pokemons.findIndex((pokemon) => pokemon.id === payload.id);

//         if (pokemonIndex >= 0) {
//           draftState.pokemons[pokemonIndex].favorite = payload.favorite;
//         }

//         if (payload.favorite) {
//           draftState.favorites.push(payload);
//         } else {
//           draftState.favorites = draftState.favorites.filter((favorite) => favorite.id !== payload.id);
//         }

//         localStorage.setItem('FAVORITES_V1', JSON.stringify(draftState.favorites));
//         draftState.pokemonFilteredDetail.favorite = payload.favorite;
//       });
//     },
//   };

//   return actions[action.type]?.() || state;
// };

// return {...state, pokemonFilteredDetail: {...newPokemonsFiltered, favorite: payload.favorite }}

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
