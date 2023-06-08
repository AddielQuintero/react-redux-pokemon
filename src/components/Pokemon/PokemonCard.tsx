import { PokemonCardProps, styles, typesColors } from '@types'
import { CustomCard, PokemonFavorite } from '@components'
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '@redux'

export const PokemonCard = ({ id, favorite, pokeName, pokemonTypes, ability, image }: PokemonCardProps) => {
  const dispatch = useDispatch()

  const handleOnFavorite = () => {
    dispatch(toggleFavorite({ id, pokeName, ability, image, pokemonTypes, favorite: !favorite }))
  }

  return (
    <CustomCard
      style={styles(pokemonTypes, 50)}
      className="relative min-h-[280px] w-[250px] md:w-[224px]  transform transition-transform hover:scale-105 group rounded-lg p-5  border-current hover:border"
      classContentImg="min-h-[120px] min-w-[120px] w-1/2 mx-auto rounded-full border-current transition group-hover:border transform transition-transform"
      classImg="h-28 mx-auto transform transition-transform"
      classTitle="text-center text-xl font-semibold mt-2"
      classSubTitle="text-center font-bold text-gray-800 mt-1"
      classContentLink="flex justify-center gap-3 mt-3"
      title={pokeName}
      subTitle={ability}
      src={image}
      links={pokemonTypes.map((name) => ({
        to: `/${pokeName}`,
        label: name,
        classLink: 'rounded-md px-4 py-1 transition duration-500 ease border-current group-hover:border',
        styleLink: { ...typesColors[name] },
      }))}
    >
      <PokemonFavorite
        className="absolute top-2 right-2"
        handleOnFavorite={handleOnFavorite}
        favorite={favorite}
      />
    </CustomCard>
  )
}
