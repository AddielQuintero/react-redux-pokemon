import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { PokemonCard, PokemonCardSkeleton } from '@components'
import { getPokemonListDetail, setLoading } from '@redux'
import { State } from '@types'
import { getPokemon } from '@services'

export const PokemonList = () => {
  const pokemons = useSelector((state: State) => state.pokemons)
  const isLoader = useSelector((state: State) => state.isLoader)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true))
      const pokemons = await getPokemon()
      dispatch(getPokemonListDetail(pokemons))
    }

    !pokemons.length && fetchData()
  }, [])

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 p-6 transition-colors duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {isLoader ? (
          <PokemonCardSkeleton value={20} />
        ) : (
          pokemons.map((pokemon, index) => (
            <PokemonCard
              id={pokemon.id}
              favorite={pokemon.favorite}
              pokeName={pokemon.pokeName}
              pokemonTypes={pokemon.pokemonTypes}
              ability={pokemon.ability}
              image={pokemon.image}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(20).fill({}),
}
