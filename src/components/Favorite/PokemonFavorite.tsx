import { BsStar, BsStarFill } from 'react-icons/bs'
import { CustomButton } from '@components'
import { PokemonFavoriteProps } from '@/types'

export const PokemonFavorite = ({ handleOnFavorite, favorite }: PokemonFavoriteProps) => {

  return (
    <>
      <CustomButton onClick={()=> handleOnFavorite()} className="absolute top-2 right-2">
        {favorite ? <BsStarFill className="h-5 w-5" /> : <BsStar className="h-5 w-5" />}
      </CustomButton>
    </>
  )
}
