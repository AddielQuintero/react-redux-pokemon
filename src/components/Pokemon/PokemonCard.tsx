import { PokemonCardProps, typesColors } from '@types'
import { CustomCard, PokemonFavorite } from '@components'
import imageNotFound from '@assets/imageNotFound.webp'
// import { useSelector } from 'react-redux'

export const PokemonCard = ({ id, favorite, pokeName, types, ability, src }: PokemonCardProps) => {
  const image = src.other?.dream_world.front_default || imageNotFound
  const { name } = ability[0].ability
  const pokemonTypes = types.map((item) => item.type.name)
  // const favorites = useSelector((state: State) => state.favorites)

  // const ExistsOnFavorites = (id: number) => {
  //   return favorites.some((favorite) => favorite.id === id)
  // }

  const styles = (type: string[], percent: number) => {
    let background: string
    if (type.length > 1) {
      background = `linear-gradient(0deg, ${type.map((item) => typesColors[item].color + percent)}`
    } else {
      background = typesColors[type[0]].color + percent
    }
    return { background, color: typesColors[type[0]].color }
  }

  return (
    <CustomCard
      style={styles(pokemonTypes, 50)}
      className="relative min-w-[250px] transition-transform hover:scale-105 group rounded-lg p-5  border-current hover:border"
      classImg="w-32 h-32 mx-auto"
      classTitle="text-center text-2xl font-semibold mt-3"
      classSubTitle="text-center font-bold text-gray-800 mt-1"
      classContentLink="flex justify-center mt-5"
      title={pokeName}
      subTitle={name}
      classContentImg="rounded-full w-[60%] mx-auto border-current transition group-hover:border"
      src={image}
      links={pokemonTypes.map((name) => ({
        to: '#',
        label: name,
        classLink:
          'rounded-md px-4 py-1 m-2 transition duration-500 ease select-none border-current group-hover:border',
        styleLink: { ...typesColors[name] },
      }))}
    >
      <PokemonFavorite id={id} favorite={favorite} />
    </CustomCard>
  )
}
