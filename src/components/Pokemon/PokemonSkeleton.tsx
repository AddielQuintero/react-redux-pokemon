export const PokemonSkeleton = () => {
  return (
    <>
      <div className="relative flex justify-around items-start flex-wrap max-w-[685px] mx-auto gap-6 p-12 px-6 rounded-lg bg-gray-800 animate-pulse">
        <div className="min-h-[280px] w-[250px] md:w-[224px] bg-gray-500 rounded group  p-5"></div>
        <div className="min-w-[260px] text-gray-100">
          <div className="h-4 mb-4 bg-gray-500 rounded"></div>

          <div className="space-y-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-4 bg-gray-500 rounded col-span-1"></div>
              <div className="h-4 bg-gray-500 rounded col-span-1"></div>
            </div>
          </div>

          <div className="space-y-1 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-4 bg-gray-500 rounded col-span-1"></div>
              <div className="h-4 bg-gray-500 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-4 bg-gray-500 rounded col-span-1"></div>
              <div className="h-4 bg-gray-500 rounded col-span-1"></div>
            </div>
          </div>

          <div className="pt-8">
            <div className="h-4 bg-gray-500 rounded"></div>
            {Array(4)
              .fill({})
              .map((_, index) => (
                <div key={index} className="flex gap-3 py-1">
                  <div className="w-[22%] h-4 mt-2  bg-gray-500 rounded" />
                  <div className="w-full h-4 mt-2 bg-gray-500 rounded" />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
