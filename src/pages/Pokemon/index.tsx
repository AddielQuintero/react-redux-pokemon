import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import ProgressBar from '@ramonak/react-progress-bar'
import { TStore, pokemonStats, pokemonStatsColor, styles } from '@types'
import { CustomButton, PokemonFavorite, PokemonSkeleton } from '@components'
import { getPokemonByName } from '@services'
import { getPokemonDetailByName, setPokemonFilteredDetail, toggleFavorite, useAppDispatch } from '@redux'

export const Pokemon = () => {
  const pokemon = useSelector((state: TStore) => state.data.pokemonFilteredDetail, shallowEqual)
  const isPokemonEmpty = Object.keys(pokemon).length === 0
  const { id, ability, image, types, height, weight, favorite, stats } = pokemon
  const dispatch = useAppDispatch()
  const { name } = useParams()
  const navigate = useNavigate()

  const fetchPokemon = async () => {
    const cleanName = name!.replace('poke-', '')
    const reply = await getPokemonByName(cleanName)

    if (!reply) {
      return navigate('/')
    }
    dispatch(getPokemonDetailByName(reply))
  }

  const handleOnFavorite = () => {
    console.log('click favorite')
    dispatch(
      toggleFavorite({ id, pokeName: name!, ability, image, pokemonTypes: types, favorite: !favorite })
    )
  }

  useEffect(() => {
    fetchPokemon()
    return () => {
      dispatch(setPokemonFilteredDetail({}))
    }
  }, [])

  return (
    <section className="p-12">
      {isPokemonEmpty ? (
        <PokemonSkeleton />
      ) : (
        <div className="relative flex justify-around items-start flex-wrap max-w-[685px] mx-auto gap-6 p-12 px-6 rounded-lg bg-gray-800">
          <div className="absolute min-w-[240px] left-7 top-7">
            <span className="cursor-pointer" onClick={() => navigate(-1)}>
              <BsArrowLeft className="text-xl text-white" />
            </span>
          </div>

          <div className="relative min-h-[280px] w-[250px] md:w-[224px]  group  p-5">
            <img src={image} alt="" />
            {types && (
              <div style={styles(types, 50)}>
                <PokemonFavorite
                  className="absolute -top-5 right-0"
                  handleOnFavorite={handleOnFavorite}
                  favorite={favorite}
                />
              </div>
            )}
          </div>
          <div className="min-w-[260px] text-gray-100">
            <h2 className="text-center text-3xl font-semibold mt-2">{name}</h2>

            <div className="flex justify-center gap-3 pt-4">
              {types?.map((type) => (
                <CustomButton
                  key={type}
                  style={styles(types, 50)}
                  className="rounded-md px-4 py-1 transition duration-500 ease border-current group-hover:border"
                >
                  {type}
                </CustomButton>
              ))}
            </div>

            <div className="flex justify-between gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{height} m</span>
                <span>Height</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{weight} kg</span>
                <span>Weight</span>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-3xl text-center mb-4">Base Stats</h3>
              {stats?.map((stat) => (
                <div key={stat.stat.name} className="flex gap-3 py-1">
                  <p className="flex items-center w-[22%] h-[17px]">{pokemonStats[stat.stat.name]}</p>
                  <ProgressBar
                    className="w-full"
                    completed={stat.base_stat}
                    bgColor={pokemonStatsColor[stat.stat.name]}
                    height="17px"
                    baseBgColor="#374151"
                    borderRadius=".375rem"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
