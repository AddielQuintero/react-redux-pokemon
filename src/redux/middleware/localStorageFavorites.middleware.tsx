import { Dispatch } from 'redux'
import { Action, TPokemonFavorite } from '@types'
import { setFavorite } from '@redux'

export const localStorageFavorites = () => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type === 'data/setPokemons') {
    const favoriteStorage = localStorage.getItem('FAVORITES_V1')
    const parseFavorite: TPokemonFavorite[] = favoriteStorage ? JSON.parse(favoriteStorage) : []

    const updatedPokemonsDetail = action.payload.map((pokemon) => {
      const favorite = parseFavorite.some((favPokemon) => favPokemon.id === pokemon.id)
      return { ...pokemon, favorite }
    })

    const updateAction = { ...action, payload: updatedPokemonsDetail }
    next(updateAction)

    const setFavoritesAction = setFavorite(parseFavorite)
    next(setFavoritesAction)
  } else {
    next(action)
  }
}
