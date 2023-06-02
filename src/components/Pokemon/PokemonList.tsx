import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { PokemonCard, PokemonCardSkeleton } from '@components'
import { getPokemonDetailAction } from '@redux'
import { State } from '@types'
import { getPokemon } from '@services'

export const PokemonList = () => {
  const pokemonsDetail = useSelector((state: State) => state.pokemons)
  console.log('🚀  pokemonsDetail:', pokemonsDetail)
  const isLoader = useSelector((state: State) => state.isLoader)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await getPokemon()
      dispatch(getPokemonDetailAction(pokemons))
    }

    fetchData()
  }, [])

  // <div className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-center gap-5 overflow-hidden py-5 transition-colors duration-500">
  return (
    <div className="flex justify-center items-center flex-wrap gap-6 p-6 transition-colors duration-500">
      {isLoader
        ? Array(10)
            .fill({})
            .map((_, index) => <PokemonCardSkeleton key={index} />)
        : pokemonsDetail.map((pokemon, index) => (
            <PokemonCard
              id={pokemon.id}
              favorite={pokemon.favorite}
              pokeName={pokemon.name}
              types={pokemon.types}
              abilities={pokemon.abilities}
              src={pokemon.sprites}
              key={index}
            />
          ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill({}),
}
