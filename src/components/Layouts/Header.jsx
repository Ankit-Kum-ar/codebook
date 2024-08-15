import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useEffect, useState } from "react";
import Search from "../Sections/Search";
const Header = () => {
  const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("isDarkMode")) || false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
  }, [isDarkMode])
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
                    <DarkModeSwitch checked={isDarkMode} onChange={() => setDarkMode(!isDarkMode)}/>
                  </span>
                  <span onClick={() => setShowSearchBar(!showSearchBar)} className="cursor-pointer text-xl font-semibold dark:text-white bi bi-search"></span>
                  <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                      <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                    </span>                    
                  </Link>
                  <span className="cursor-pointer text-xl font-semibold dark:text-white bi bi-person-circle"></span>
              </div>
          </div>
      </nav>
      {
        showSearchBar && <Search setShowSearchBar={setShowSearchBar}/>
      }
    </header>
  )
}

export default Header
