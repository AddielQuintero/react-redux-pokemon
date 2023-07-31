import axios from 'axios'
import { TFetchPokemon, TPokemonDetail } from '@types'
import { CONFIG } from '@config'

export const getPokemon = async (): Promise<TFetchPokemon[]> => {
  const response = await axios.get(`${CONFIG.API_BASE}?limit=20`)
  return response.data.results
}

export const getPokemonDetail = async (pokemons: TFetchPokemon[]) => {
  const res = await Promise.all<TPokemonDetail>(
    pokemons.map(async (pokemon: TFetchPokemon) => {
      const result = await axios.get(pokemon.url)
      return result.data
    })
  )
  return res
}

export const getPokemonByName = async (pokemonName: string) => {
  try {
    const res = await axios.get<TPokemonDetail>(`${CONFIG.API_BASE}/${pokemonName}`)
    return res.data
  } catch {
    return undefined
  }
}
