import { useContext } from "react";
import {ToggleTheme} from '../App'

export default function UseContext(){

    const theme = useContext(ToggleTheme)

    const themeStyle = {
        backgroundColor : theme ? "black" : "grey",
        color : theme ? "grey" : "black",
        padding :'2rem',
        margin : '2rem'
    }
    
    return(
        <>
            <div style={themeStyle}>This is made by using useContext</div>
        </>
    )
}