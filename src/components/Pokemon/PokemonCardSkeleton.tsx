import { BsFillStarFill } from 'react-icons/bs'

export const PokemonCardSkeleton = () => {
  return (
    <div className="border border-gray-400 shadow min-w-[250px] transition-transform hover:scale-105 rounded-lg p-5 hover:border">
      <div className="animate-pulse relative">
        <div className="rounded-full bg-gray-500 h-32 w-32 mx-auto" />
        <BsFillStarFill className=" absolute top-0 right-0 h-6 w-6 mx-auto text-gray-500" />
        <div className="flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="mt-6 h-4 bg-gray-500 rounded"></div>
            <div className="h-4 bg-gray-500 rounded"></div>
            <div className="space-y-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-4 bg-gray-500 rounded col-span-1"></div>
                <div className="h-4 bg-gray-500 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
