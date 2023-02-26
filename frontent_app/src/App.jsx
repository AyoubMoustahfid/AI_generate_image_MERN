import React from 'react'
// import useDarkMode from './hooks/useDarkMode';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {Home, CreatePost} from "./pages/index"
import Toggle from "./components/Toggle"
import { ThemeProvider } from './context/themeContext';

import logo from "./assets/react.svg"

const App = () => {
  // const [theme, toggleTheme] = useDarkMode("light"); // Add this line

  

  return (
   <BrowserRouter>
      <ThemeProvider>
      <header 
      className={`w-full flex justify-between items-center bg-white dark:bg-[#161b22] sm:px-8 px-4 border-b border-b-[#e6ebf4] dark:border-b-[#0d1117] py-4`}
    >
      <Link
        to="/"
      >
        <img 
          src={logo} 
          alt="logo"
          className='w-18 object-contain'
          />
      </Link>

      <div className="flex flex-row space-x-2 items-center">
        <Toggle/>
        <Link
          to="/create-post"
          className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'
        >
          Create
        </Link>
      </div>
    </header>

    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] dark:bg-[#0d1117] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-post" element={<CreatePost/>} />
      </Routes>
    </main>
      </ThemeProvider>
   </BrowserRouter>
  )
}

export default App;
