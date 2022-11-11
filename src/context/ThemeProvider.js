import { useState } from "react";
import  App from "../components/App"
import ThemeContext from "./ThemeContext";

export default function ThemeProvider() {
    const [theme, setTheme] = useState('dark')

    return (
        <ThemeContext.Provider value={{theme, setTheme} }> 
            <App/>
        </ThemeContext.Provider>
    )
}