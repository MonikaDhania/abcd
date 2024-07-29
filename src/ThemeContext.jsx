import React, { useContext, useState } from 'react'

const ThemeContext = React.createContext();

export default ThemeContext


function ThemeContextProvider({children}) {
  const [theme, settheme] = useState(true);

  function ChoseTheme() {
    settheme(!theme);
  }

  return (
    <ThemeContext.Provider value= {{theme,ChoseTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}



export {ThemeContextProvider};