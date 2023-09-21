import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="w-full p-16 bg-gray-300 dark:bg-gray-800 border-t border-gray-400 dark:border-gray-600 mt-48">
      <p className="text-center">&#169; Copyrights 2023. All rights reserved by <Link className="italic underline text-blue-500" to='/'>Saiful Islam</Link></p>
    </footer>
  )
}

export default Footer