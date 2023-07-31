import { useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getPokemonDetailByName, setPokemonFilteredDetail, useAppDispatch } from '@redux'
import { TStore } from '@types'
import { PokemonDetail } from '@components'
import { getPokemonByName } from '@services'

export const Pokemon = () => {
  const pokemon = useSelector((state: TStore) => state.data.pokemonFilteredDetail, shallowEqual)
  const isPokemonEmpty = Object.keys(pokemon).length === 0
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

  useEffect(() => {
    fetchPokemon()
    return () => {
      dispatch(setPokemonFilteredDetail({}))
    }
  }, [])

  return <PokemonDetail isPokemonEmpty={isPokemonEmpty} pokemon={pokemon} name={name} />
}
