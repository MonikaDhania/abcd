import React, { useState } from 'react'

const Navbar = () => {
  const [theme,settheme] = useState(false);

  function ChoseTheme (){
    settheme(!theme);
  }

  return (
    <div className= {` w-screen h-[100px] flex justify-end ${theme?"bg-white":"bg-slate-500 "}`}>
      <button type='button' onClick= {ChoseTheme} className='bg-slate-400 h-[100px] w-[200px] rounded'>Change Theme</button>
    </div>
  )
}

export default Navbar
