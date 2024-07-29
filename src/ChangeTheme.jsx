import React from 'react'
import Navbar from './Navbar'
import ChoseTheme from './App'


const ChangeTheme = ({theme}) => {
  return (
    <div className={`w-screen h-screen `}>
      <Navbar/>
      <div className = {`w-[600px] h-[400px] mx-auto my-7 flex justify-center border border-slate-950  `}>
        <p >this is a paragraph</p>
      </div>
    </div>
  )
}

export default ChangeTheme
