import { PokemonDetail, Search } from '@/components'
import { getPokemonDetailByName, setPokemonFilteredDetail, useAppDispatch } from '@/redux'
import { getPokemonByName } from '@/services'
import { TStore } from '@/types'
import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export const SearchPage = () => {
  const pokemon = useSelector((state: TStore) => state.data.pokemonFilteredDetail, shallowEqual)
  const isPokemonEmpty = Object.keys(pokemon).length === 0
  const { keyword } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const fetchSearchPokemon = async (keyword: string) => {
    const response = await getPokemonByName(keyword)

    if (!response) {
      return navigate('/')
    }

    dispatch(getPokemonDetailByName(response))
  }

  useEffect(() => {
    keyword && fetchSearchPokemon(keyword)
    return () => {
      dispatch(setPokemonFilteredDetail({}))
    }
  }, [keyword])

  return (
    <>
      <Search />
      <PokemonDetail pokemon={pokemon} isPokemonEmpty={isPokemonEmpty} name={keyword} />
    </>
  )
}
