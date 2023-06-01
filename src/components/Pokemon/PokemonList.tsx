import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { PokemonCard, PokemonCardSkeleton } from '@components'
import { getPokemonDetailAction } from '@redux'
import { State } from '@types'
import { getPokemon } from '@services'

export const PokemonList = () => {
  const pokemonsDetail = useSelector((state: State) => state.pokemons)
  const isLoader = useSelector((state: State) => state.isLoader)
  const favorites = useSelector((state: State) => state.favorites)
  console.log("🚀  favorites:", favorites)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await getPokemon()
      dispatch(getPokemonDetailAction(pokemons))
    }

    fetchData()
  }, [])

  return (
    <div className="flex justify-center items-center flex-wrap gap-6 p-6">
      {isLoader
        ? Array(10)
            .fill({})
            .map((_, index) => <PokemonCardSkeleton key={index} />)
        : pokemonsDetail.map((pokemon, index) => (
            <PokemonCard
              id={pokemon.id}
              favorite={pokemon.isFavorite}
              pokeName={pokemon.name}
              types={pokemon.types}
              ability={pokemon.abilities}
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
