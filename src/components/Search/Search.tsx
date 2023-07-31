import { BsSearch } from 'react-icons/bs'
import { CustomButton, CustomInput } from '@components'
import { FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const [value, setValue] = useState('')
  console.log("🚀  value:", value)
  const navigate = useNavigate()

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const params = new URLSearchParams()
    value.trim() && params.set('name', value.toLowerCase())
    value.trim() && navigate({pathname: '/search', search: params.toString()})
    setValue('')
  }

  return (
    <div className="container max-w-2xl mx-auto py-6 px-4 ">
      <form className="flex gap-3 w-full" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <CustomInput
            type="text"
            className="w-full border border-gray-400 focus:outline-none focus:border-gray-300 text-gray-300 dark:bg-gray-800/95 rounded-lg  py-2 pl-2 pr-8"
            placeholder="Search ..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <div className="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
            <BsSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
        <CustomButton className="rounded-lg bg-gray-700/50 p-2 text-white hover:bg-gray-800" type="submit">
          Search
        </CustomButton>
      </form>
    </div>
  )
}
