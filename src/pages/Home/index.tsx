import { PokemonList, Search } from '@components'

export const Home = () => {
  return (
    <div className="pt-5 transition-colors duration-500">
      <Search />
      <PokemonList />
    </div>
  )
}
