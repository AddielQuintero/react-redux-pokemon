import { PokemonCardProps, typesColors } from '@types'
import { CustomCard } from '@components'
import imageNotFound from '@assets/imageNotFound.webp'

export const PokemonCard = ({ src, pokeName, types, ability }: PokemonCardProps) => {
  const image = src.other?.dream_world.front_default || imageNotFound
  const { name } = ability[0].ability
  const pokemonTypes = types.map((item) => item.type.name)

  const styles = (type: string[], percent: number) => {
    console.log('🚀  type:', type)
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
      className="min-w-[250px] transition-transform hover:scale-110 group rounded-lg p-5 hover:border"
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
    />
  )
}
