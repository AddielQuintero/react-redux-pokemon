import axios from 'axios'
import { TPokemon, TPokemonDetail } from '@types'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemon = async (): Promise<TPokemon[]> => {
  const response = await axios.get(`${BASE_URL}?limit=20`)
  return response.data.results
}

export const getPokemonDetail = async (pokemons: TPokemon[]) => {
  const res = await Promise.all<TPokemonDetail>(
    pokemons.map(async (pokemon: TPokemon) => {
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
//         response.data.results.map(async (pokemon: TPokemon) => {
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
