import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error)
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <div className="text-gray-600 my-4">
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <p>
            {error?.data}
          </p>
        </div>
        <Link className="text-blue-500 text-sm underline italic" to='/'>Go back to home</Link>
      </div>
    </div>
  )
}

export default ErrorPage