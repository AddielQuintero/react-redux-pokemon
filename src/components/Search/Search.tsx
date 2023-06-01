import { BsSearch } from 'react-icons/bs'
import { CustomButton, CustomInput } from '@components'

export const Search = () => {
  return (
    <div className="container max-w-2xl mx-auto py-6 px-4 ">
      <form className="flex gap-3 w-full">
        <div className="w-full relative">
          <CustomInput
            type="text"
            className="w-full border border-gray-400 focus:outline-none focus:border-gray-300 text-gray-300 dark:bg-gray-800/95 rounded-lg  py-2 pl-2 pr-8"
            placeholder="Search ..."
          />
          <div className="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
            <BsSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
        <CustomButton className="rounded-lg bg-gray-700/50 p-2 text-white hover:bg-gray-800">
          Search
        </CustomButton>
      </form>
    </div>
  )
}
