import axios from 'axios'
import { TPokemon, TPokemonDetail } from '@types'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemon = async () => {
  const response = await axios.get(`${BASE_URL}?limit=20`)

  const res = await Promise.all<TPokemonDetail[]>(
    response.data.results.map(async (pokemon: TPokemon) => {
      const result = await axios.get(pokemon.url)
      return result.data
    })
  )
  return res
}
