import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <section className="p-12 ">
        <div className="bg-gray-800 max-w-[600px] mx-auto rounded-md p-6 text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-500">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link to="/" className="text-sm font-semibold text-gray-100">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
