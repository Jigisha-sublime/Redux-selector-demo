import React, { useContext } from 'react'
import { AppContext } from '../../theme/AppProvider'
import Switch from 'react-switch'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeSwitcher = (props) => {

  // const { toggleTheme, themeState } = useContext(AppContext)

  // const handleThemeChange = () => {
  //   toggleTheme();
  // };

  return (
    <></>
    // <Switch
    //   checked={themeState === "lightTheme" ? true : false}
    //   className="test"
    //   height={50}
    //   width={120}
    //   checkedIcon={
    //     <FaSun
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: "100%",
    //         fontSize: 35,
    //         paddingLeft: 10,
    //       }}
    //       color={themeState === "lightTheme" ? "white" : "grey"}
    //       className="light"
    //     />
    //   }
    //   uncheckedIcon={
    //     <FaMoon
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         height: "100%",
    //         fontSize: 35,
    //         paddingLeft: 24,
    //       }}
    //       color={themeState === "darkTheme" ? "blue" : "blue"}
    //       className="dark"
    //     />
    //   }
    //   onChange={handleThemeChange}
    // />
  )
}

export default ThemeSwitcher
