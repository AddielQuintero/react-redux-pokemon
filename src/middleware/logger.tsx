import { Dispatch } from 'redux'
import { Action, TPokemonFavorite } from '@types'
import { setFavorite } from '@redux'

export const logger = () => (next: Dispatch<Action>) => (action: Action) => {
  console.log('🚀  action:', action)
  next(action)
}

export const prefix = () => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type === 'SET_POKEMONS') {
    const prefix = action.payload.map((pokemon) => ({ ...pokemon, name: 'poke-' + pokemon.pokeName }))
    const updateAction = { ...action, payload: prefix }
    next(updateAction)
  } else {
    next(action)
  }
}

export const localStorageFavorites = () => (next: Dispatch<Action>) => (action: Action) => {
  if (action.type === 'SET_POKEMONS') {
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


// export const prefix = () => (next: Dispatch<Action>) => (action: Action) => {
//   if (action.type === 'SET_POKEMONS') {
//     const prefix = action.payload.map((pokemon) => {
//       const image = pokemon.sprites.other?.dream_world.front_default || imageNotFound
//       const { name: ability } = pokemon.abilities[0].ability
//       const pokemonTypes = pokemon.types.map((item) => item.type.name)
     
//       return { id: pokemon.id, pokeName: 'poke-' + pokemon.name,  ability: ability, pokemonTypes, image, favorite: pokemon.favorite  }
//     })
//     console.log("🚀  action.payload:", action.payload)
//     const updateAction = { ...action, payload: prefix }
//     console.log("🚀  updateAction:", updateAction)
//     next(updateAction)
//   } else {
//     next(action)
//   }
// }