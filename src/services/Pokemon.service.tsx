import axios from 'axios'
import { FetchPokemonProps, ParamsProps, TFetchPokemon, TPokemonDetail } from '@types'
import { CONFIG } from '@config'

export const getPokemon = async (params: ParamsProps): Promise<TFetchPokemon> => {
  const response = await axios.get(`${CONFIG.API_BASE}`, { params })
  return response.data
}

export const getPokemonDetail = async (pokemons: FetchPokemonProps[]) => {
  const res = await Promise.all<TPokemonDetail>(
    pokemons.map(async (pokemon: FetchPokemonProps) => {
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
