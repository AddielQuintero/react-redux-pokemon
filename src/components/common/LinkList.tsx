import { NavLink } from 'react-router-dom'
import { TLink } from '@types'

export const CustomLinkList = ({ navigation, className, handleClose }: TLink) => {

  return (
    <>
      {navigation.map((item) => {
        return (
          <NavLink
            key={item.name}
            to={item.to}
            onClick={handleClose}
            className={className}
          >
            {item.name}
          </NavLink>
        )
      })}
    </>
  )
}
