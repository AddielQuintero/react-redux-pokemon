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
      state.pokemons = [...state.pokemons, ...action.payload]
    },
    setFavorite: (state, action) => {
      state.favorites = action.payload
    },
    setPokemonFilteredDetail: (state, action) => {
      state.pokemonFilteredDetail = action.payload
    },
    toggleFavorite: (state, action) => {
      const pokemon = action.payload
      const pokemonIndex = state.pokemons.findIndex((pokemon) => pokemon.id === action.payload.id)
      const isAlreadyFavorite = state.favorites.some((favorite) => favorite.id === pokemon.id)

      const updatedFavorites = isAlreadyFavorite
        ? state.favorites.filter((favorite) => favorite.id !== pokemon.id)
        : [...state.favorites, pokemon]

      localStorage.setItem('FAVORITES_V1', JSON.stringify(updatedFavorites))
      state.favorites = updatedFavorites
      if (pokemonIndex >= 0) {
        state.pokemons[pokemonIndex].favorite = pokemon.favorite
      }
      state.pokemonFilteredDetail.favorite = pokemon.favorite
    },
  },
})

export const { setLoading, setPokemons, setFavorite, setPokemonFilteredDetail, toggleFavorite } =
  DataSlice.actions

export default DataSlice.reducer
