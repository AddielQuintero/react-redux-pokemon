import { useDispatch, useSelector } from 'react-redux'
import { PokemonList, Search } from '@components'
import { State } from '@types'
import { useEffect } from 'react'
import { getPokemon } from '@services'
import { setPokemons } from '@/redux'

export const Home = () => {
  const pokemons = useSelector((state: State) => state.pokemons)
  const dispatch = useDispatch()

  useEffect(() => {
    const pokemon = async () => {
      const pokemons = await getPokemon()
      dispatch(setPokemons(pokemons))
    }

    pokemon()
  }, [dispatch])

  return (
    <div className="pt-5 transition-colors duration-500 ">
      <Search />
      <PokemonList pokemons={pokemons} />
    </div>
  )
}
