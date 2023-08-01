import { shallowEqual, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { PokemonCard, PokemonCardSkeleton } from '@components'
import { getPokemonListDetail, useAppDispatch } from '@redux'
import { TStore } from '@types'

export const Favorite = () => {
  const favorites = useSelector((state: TStore) => state.data.favorites, shallowEqual)
  const isLoader = useSelector((state: TStore) => state.data.isLoader)
  const dispatch = useAppDispatch()

  useEffect(() => {
    !favorites.length && dispatch(getPokemonListDetail(0))
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
