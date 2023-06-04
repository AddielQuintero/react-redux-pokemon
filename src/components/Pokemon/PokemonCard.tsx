import { PokemonCardProps, typesColors } from '@types'
import { CustomCard, PokemonFavorite } from '@components'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '@redux'

export const PokemonCard = ({ id, favorite, pokeName, pokemonTypes, ability, image }: PokemonCardProps) => {
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    console.log('click')
    dispatch(toggleFavorite({ id, pokeName, ability, image, pokemonTypes, favorite: !favorite }))
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
      className="relative min-h-[280px] w-[250px] md:w-[224px]  transform transition-transform hover:scale-105 group rounded-lg p-5  border-current hover:border"
      classContentImg="min-h-[120px] min-w-[120px] w-1/2 mx-auto rounded-full border-current transition group-hover:border"
      classImg="h-28 mx-auto"
      classTitle="text-center text-xl font-semibold mt-2"
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
