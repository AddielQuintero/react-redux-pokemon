import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { PokemonCard, PokemonCardSkeleton } from '@components'
import { getPokemonDetailAction } from '@redux'
import { getPokemon } from '@services'
import { State } from '@types'

export const Favorite = () => {
  const favorites = useSelector((state: State) => state.favorites)
  const isLoader = useSelector((state: State) => state.isLoader)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      const pokemons = await getPokemon()
      // console.log("🚀  entre al effect de favorite:")
      dispatch(getPokemonDetailAction(pokemons))
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="flex justify-center items-start flex-wrap gap-6 py-12 px-6 transition-colors duration-500">
        {isLoader ? (
          <PokemonCardSkeleton value={10} />
        ) : !favorites.length ? (
          <div className="p-4 rounded-md dark:bg-gray-800/95 text-gray-100">
            <h1>You don't have any favorite pokemon yet</h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {favorites.map((favorite, index) => (
              <PokemonCard
                id={favorite.id}
                favorite={favorite.favorite}
                pokeName={favorite.pokeName}
                pokemonTypes={favorite.pokemonTypes}
                ability={favorite.ability}
                image={favorite.image}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
