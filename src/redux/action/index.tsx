import { SET_LOADER, SET_POKEMONS, SET_POKEMON_DETAIL, SET_FAVORITE, TOGGLE_FAVORITE, Action } from '@types'
import { TFetchPokemon, TPokemonFavorite, TPokemonDetail, TPokemonFilteredDetail, TPokemon } from '@types'
import { TSetLoader, TSetPokemon, TSetFavorite, TSetPokemonFilteredDetail, TToggleFavorite } from '@types'
import { getPokemonDetail } from '@services'
import { Dispatch } from 'redux'
import imageNotFound from '@assets/imageNotFound.webp'
import type {} from 'redux-thunk/extend-redux'

export const setPokemons = (payload: TPokemon[]): TSetPokemon => ({
  type: SET_POKEMONS,
  payload,
})

export const setPokemonFilteredDetail = (payload: TPokemonFilteredDetail): TSetPokemonFilteredDetail => ({
  type: SET_POKEMON_DETAIL,
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

export const getPokemonListDetail =
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

export const getPokemonDetailByName = (pokemon: TPokemonDetail) => async (dispatch: Dispatch<Action>) => {
  const favoriteStorage = localStorage.getItem('FAVORITES_V1')
  const parseFavorite: TPokemonFavorite[] = favoriteStorage ? JSON.parse(favoriteStorage) : []

  const favorite = parseFavorite.some((favPokemon) => favPokemon.id === pokemon.id)
  const id = pokemon.id
  const image = pokemon.sprites.other?.dream_world.front_default || imageNotFound
  const types = pokemon.types.map((item) => item.type.name)
  const { name: ability } = pokemon.abilities[0].ability
  const height = pokemon.height
  const weight = pokemon.weight
  const stats = pokemon.stats
  
  dispatch(setFavorite(parseFavorite))
  dispatch(setPokemonFilteredDetail({ id, image, ability, types, height, weight, stats, favorite }))
  dispatch(setLoading(false))
}
