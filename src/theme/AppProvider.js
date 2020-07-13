import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Globalstyles, theme } from './styles'

export const AppContext = createContext()

const AppThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useState('lightTheme')
  const costumeTheme = theme[themeState]
  const toggleTheme = () => {
    setThemeState((prevState) => prevState === 'lightTheme' ? 'darkTheme' : 'lightTheme')
  }
  const value = { toggleTheme, themeState }
  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={costumeTheme}>
        <Globalstyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default AppThemeProvider
