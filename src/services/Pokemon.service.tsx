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

// export const PokemonService = () => {
//   const dispatch = useDispatch()

//   useEffect(() => {
//     const getPokemon = async () => {
//       const response = await axios.get(`${BASE_URL}?limit=20`)
//       const res = await Promise.all<TPokemonDetail[]>(
//         response.data.results.map(async (pokemon: TFetchPokemon) => {
//           const result = await axios.get(pokemon.url)
//           return result.data
//         })
//       )
//       dispatch(setPokemons(res))
//       // setPokemons(res)
//       return res
//     }

//     getPokemon()
//   }, [])
// }
