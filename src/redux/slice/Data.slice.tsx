import { createSlice } from '@reduxjs/toolkit'
import { initialState } from '@types'

export const DataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoader = action.payload
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      state.favorites = action.payload
    },
    setPokemonFilteredDetail: (state, action) => {
      state.pokemonFilteredDetail = action.payload
    },
    toggleFavorite: (state, action) => {
      const pokemonIndex = state.pokemons.findIndex((pokemon) => pokemon.id === action.payload.id)

      if (!state.pokemons.length) {
        const favorites = action.payload.favorite
          ? [...state.favorites, action.payload]
          : state.favorites.filter((favorite) => favorite.id !== action.payload.id)

        localStorage.setItem('FAVORITES_V1', JSON.stringify(favorites))
        state.favorites = favorites
        state.pokemonFilteredDetail.favorite = action.payload.favorite
      }

      if (pokemonIndex >= 0) {
        const favorites = action.payload.favorite
          ? [...state.favorites, action.payload]
          : state.favorites.filter((favorite) => favorite.id !== action.payload.id)

        localStorage.setItem('FAVORITES_V1', JSON.stringify(favorites))

        state.favorites = favorites
        state.pokemons[pokemonIndex].favorite = action.payload.favorite
        state.pokemonFilteredDetail.favorite = action.payload.favorite
      }
    },
  },
})

export const { setLoading, setPokemons, setFavorite, setPokemonFilteredDetail, toggleFavorite } =
  DataSlice.actions

export default DataSlice.reducer
