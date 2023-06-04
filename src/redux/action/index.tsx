import { SET_LOADER, SET_POKEMONS, SET_FAVORITE, TOGGLE_FAVORITE, TFetchPokemon, TPokemon } from '@types'
import { TSetLoader, TSetPokemon, TSetFavorite, TToggleFavorite, TPokemonFavorite, Action } from '@types'
import { getPokemonDetail } from '@services'
import { Dispatch } from 'redux'
import imageNotFound from '@assets/imageNotFound.webp'
import type {} from 'redux-thunk/extend-redux'

export const setPokemons = (payload: TPokemon[]): TSetPokemon => ({
  type: SET_POKEMONS,
  payload,
})

export const setLoading = (payload: boolean): TSetLoader => ({
  type: SET_LOADER,
  payload,
})

export const toggleFavorite = (payload: TPokemonFavorite): TToggleFavorite => ({
  type: TOGGLE_FAVORITE,
  payload,
})

export const setFavorite = (payload: TPokemonFavorite[]): TSetFavorite => ({
  type: SET_FAVORITE,
  payload,
})

export const getPokemonDetailAction =
  (pokemons: TFetchPokemon[] = []) =>
  async (dispatch: Dispatch<Action>) => {
    const pokemonsDetail = await getPokemonDetail(pokemons)

    const prefix = pokemonsDetail.map((pokemon) => {
      const image = pokemon.sprites.other?.dream_world.front_default || imageNotFound
      const { name: ability } = pokemon.abilities[0].ability
      const pokemonTypes = pokemon.types.map((item) => item.type.name)

      return {
        id: pokemon.id,
        pokeName: 'poke-' + pokemon.name,
        ability: ability,
        pokemonTypes,
        image,
        favorite: pokemon.favorite,
      }
    })

    dispatch(setPokemons(prefix))
    dispatch(setLoading(false))
  }
