import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useState } from "react";
const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={logo} className="h-8" alt="CodeBook Logo" />
                  <span className="self-center md:text-2xl text-xl md:mt-0 mt-1 font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
              </Link>
              <div className="flex items-center md:space-x-6 space-x-4 rtl:space-x-reverse">
                  <span className="cursor-pointer text-xl font-semibold dark:text-white">
                    <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode}/>
                  </span>
                  <span className="cursor-pointer text-xl font-semibold dark:text-white bi bi-search"></span>
                  <span className="cursor-pointer text-xl font-semibold dark:text-white bi bi-bag-check-fill"></span>
                  <span className="cursor-pointer text-xl font-semibold dark:text-white bi bi-person-circle"></span>
              </div>
          </div>
      </nav>
    </header>
  )
}

export default Header
