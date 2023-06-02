import { BsGithub } from 'react-icons/bs'
import { BsList } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CustomButton, CustomLinkList, MobileMenu } from '@components'
import { useToggle } from '@hooks'
import logo from '@assets/logo.png'
import { NavigateProps } from '@types'

export const NavBar = ({ navigation }: { navigation: NavigateProps }) => {
  const { isOpen, openModal, closeModal } = useToggle()

  return (
    <header className="sticky top-0 z-50 dark:bg-gray-800/95">
      <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pokemon</span>
            <img className="h-7 w-auto" src={logo} alt="" />
          </Link>
        </div>

        <div className="flex md:hidden">
          <CustomButton
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={openModal}
          >
            <span className="sr-only">Open main menu</span>
            <BsList className="h-6 w-6 text-gray-100" aria-hidden="true" />
          </CustomButton>
        </div>

        <div className="hidden md:flex md:gap-x-12">
          <CustomLinkList
            navigation={navigation}
            className={({ isActive, isPending }) =>
              `text-sm font-semibold leading-6 ${
                isPending ? '' : isActive ? 'text-green-600' : 'text-gray-100'
              }`
            }
          />
        </div>

        <a className="hidden md:flex md:flex-1 md:justify-end text-gray-300 hover:text-gray-400" href="https://github.com/AddielQuintero/react-redux">
          <BsGithub className="text-2xl" />
        </a>
      </nav>

      <MobileMenu navigation={navigation} open={isOpen} onClose={closeModal} closeModal={closeModal} />
    </header>
  )
}
