import { Dispatch } from 'redux'
import { Action, TPokemonDetail } from '@types'
import { setFavorite } from '@redux'

export const logger = () => (next: Dispatch<Action>) => (action: Action) => {
  console.log('🚀  action:', action)
  next(action)
}

export const prefix = () => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type === 'SET_POKEMONS') {
    const prefix = action.payload.map((pokemon) => ({ ...pokemon, name: 'poke-' + pokemon.name }))
    const updateAction = { ...action, payload: prefix }
    next(updateAction)
  } else {
    next(action)
  }
}

export const localStorageFavorites = () => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type === 'SET_POKEMONS') {
    const favoriteStorage = localStorage.getItem('FAVORITES_V1')
    const parseFavorite: TPokemonDetail[] = favoriteStorage ? JSON.parse(favoriteStorage) : []

    const updatedPokemonsDetail = action.payload.map((pokemon) => {
      const favoritePokemon = parseFavorite.find((favPokemon) => favPokemon.id === pokemon.id)
      return favoritePokemon ? { ...pokemon, isFavorite: favoritePokemon.isFavorite } : pokemon
    })

    const updateAction = { ...action, payload: updatedPokemonsDetail }
    next(updateAction)

    const setFavoritesAction = setFavorite(parseFavorite)
    next(setFavoritesAction)
  } else {
    next(action)
  }
}
