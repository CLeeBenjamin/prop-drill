import { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"


export default function Button(props){
    let {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
      setInterval(() => {
        if(theme === 'dark'){
          setTheme('light')
        }
        else if(theme === 'light'){
          setTheme('dark')
        }
      },2000)
    },[theme])
  

    return (

        <button style={{ backgroundColor: theme === 'dark' ? 'gray' : 'white' }}>
            {props.label}
        </button>
        
    )
}