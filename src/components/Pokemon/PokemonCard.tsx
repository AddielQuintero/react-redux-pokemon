import { PokemonCardProps, typesColors } from '@types'
import { CustomCard, PokemonFavorite } from '@components'
import imageNotFound from '@assets/imageNotFound.webp'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '@redux'

export const PokemonCard = ({ id, favorite, pokeName, types, abilities, src }: PokemonCardProps) => {
  const image = src.other?.dream_world.front_default || imageNotFound
  const { name: ability } = abilities[0].ability
  const pokemonTypes = types.map((item) => item.type.name)
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(toggleFavorite({ id, pokeName, ability, image, pokemonTypes, favorite }))
  }

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
      className="relative min-h-[290px] min-w-[250px] transform transition-transform hover:scale-105 group rounded-lg p-5  border-current hover:border"
      classContentImg="rounded-full w-[60%] mx-auto border-current transition group-hover:border"
      classImg="w-32 h-32 mx-auto"
      classTitle="text-center text-2xl font-semibold mt-2"
      classSubTitle="text-center font-bold text-gray-800 mt-1"
      classContentLink="flex justify-center gap-3 mt-3"
      title={pokeName}
      subTitle={ability}
      src={image}
      links={pokemonTypes.map((name) => ({
        to: '#',
        label: name,
        classLink:
          'rounded-md px-4 py-1 transition duration-500 ease border-current group-hover:border',
        styleLink: { ...typesColors[name] },
      }))}
    >
      <PokemonFavorite handleOnFavorite={handleOnFavorite} favorite={favorite} />
    </CustomCard>
  )
}
