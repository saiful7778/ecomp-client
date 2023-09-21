import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { BiMoon } from 'react-icons/bi'
import { BsFillSunFill } from 'react-icons/bs'
import { useState } from "react"
import { useEffect } from "react"

const Navbar = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark')
      setTheme(true)
    } else {
      setTheme(false)
      document.body.classList.remove('dark')
    }
  }, [])
  const handleTheme = () => {
    setTheme(!theme);
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', '')
    } else {
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
  return (
    <nav className="flex items-center py-2">
      <div className="flex-1">
        <Link to='/'>
          <h1 className="text-2xl">
            <span className="text-3xl font-bold italic underline text-blue-700">E</span> commerce
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-4">
          <li>
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/products'>Products</NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
          </li>
        </ul>
        <button onClick={handleTheme} className="ml-6 rounded-full p-2 bg-gray-300 dark:bg-gray-800 border border-gray-500" type="button">
          {!theme ? <BiMoon /> : <BsFillSunFill />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar