// import redux from '@assets/redux.svg'
import { BsGithub } from 'react-icons/bs'
import logo from '@assets/logo.png'
export const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-200/70">
      <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-7 w-auto" src={logo} alt="" />
          </a>
        </div>
        <a className="text-gray-500 hover:text-gray-600" href="https://github.com/AddielQuintero/react-redux">
          <BsGithub className="text-2xl" />
        </a>
      </nav>
    </header>
  )
}
