import React, { useContext } from 'react'

import ThemeContext from './ThemeContext'
import ChangeTheme from './ChangeTheme';
import Navbar from './Navbar';
 




const App = () => {
  let {theme, ChoseTheme} = useContext(ThemeContext);
  console.log(theme,ChoseTheme)

  return (
    <div onClick={ChoseTheme} className ={`w-screen h-screen  flex justify-center ${theme?"bg-slate-700 text-white" :"bg-white text-black"}`}>
      <ChangeTheme />
     {/* <button onClick={ChoseTheme} className=''>change theme </button> */}
    </div>
  )
}

export default App
