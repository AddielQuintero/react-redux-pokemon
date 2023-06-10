import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon, getPokemonDetail } from '@services'
import imageNotFound from '@assets/imageNotFound.webp'
import { TPokemonDetail, TPokemonFavorite,  } from '@types'
import { setFavorite, setLoading, setPokemonFilteredDetail, setPokemons } from '@redux'
import type {} from 'redux-thunk/extend-redux'

export const getPokemonListDetail = createAsyncThunk('data/getPokemonListDetail', async (_, { dispatch }) => {
    const pokemons = await getPokemon()
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
  })
  
  export const getPokemonDetailByName = createAsyncThunk(
    'data/getPokemonDetailByName',
    async (pokemon: TPokemonDetail, { dispatch }) => {
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
  )