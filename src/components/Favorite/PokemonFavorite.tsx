import { BsStar, BsStarFill } from 'react-icons/bs'
import { CustomButton } from '@components'
import { PokemonFavoriteProps } from '@types'

export const PokemonFavorite = ({ handleOnFavorite, favorite, className }: PokemonFavoriteProps) => {

  return (
    <>
      <CustomButton className={className} onClick={() => handleOnFavorite()}>
        {favorite ? <BsStarFill className="h-5 w-5" /> : <BsStar className="h-5 w-5" />}
      </CustomButton>
    </>
  )
}
