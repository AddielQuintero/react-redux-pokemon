export const PokemonCardSkeleton = () => {
  return (
    <div className=" border border-gray-300 shadow min-w-[250px] transition-transform hover:scale-110 group rounded-lg p-5 hover:border">
      <div className="animate-pulse">
        <img className="rounded-full bg-gray-400 h-32 w-32 mx-auto" src="" alt="" />
        <div className="flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="mt-6 h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="space-y-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-4 bg-gray-400 rounded col-span-1"></div>
                <div className="h-4 bg-gray-400 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
