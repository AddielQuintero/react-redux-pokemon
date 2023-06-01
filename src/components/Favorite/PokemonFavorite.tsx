// import React from 'react'
import { useDispatch } from 'react-redux'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { CustomButton } from '@components'
import { toggleFavorite } from '@redux'

export const PokemonFavorite = ({ id, favorite }: any) => {
  // console.log("🚀  favorite:", favorite)
  const dispatch = useDispatch()

  const handleOnFavorite = (id: number) => {
    dispatch(toggleFavorite(id))
  }

  return (
    <>
      <CustomButton onClick={() => handleOnFavorite(id)} className="absolute top-2 right-2">
        {favorite ? <BsStarFill className="h-5 w-5" /> : <BsStar className="h-5 w-5" />}
      </CustomButton>
    </>
  )
}
