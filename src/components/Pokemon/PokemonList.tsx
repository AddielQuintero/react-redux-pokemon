import { TPokemonDetail } from '@types'
import { PokemonCard } from '@components'

export const PokemonList = ({ pokemons }: { pokemons: TPokemonDetail[] }) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6 p-6">
      {pokemons.map((pokemon, index) => (
        <PokemonCard pokeName={pokemon.name} types={pokemon.types} ability={pokemon.abilities} src={pokemon.sprites} key={index} />
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemon: Array(10).fill(''),
}
