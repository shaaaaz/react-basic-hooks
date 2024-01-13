import { useState } from "react"

export default function UseState(){

    const [state,setState] = useState(true)

    const themeStyle = {
        backgroundColor : state ? "black" : "grey",
        color : state ? "grey" : "black",
        padding :'2rem',
        margin : '2rem'
    }

    function handleClick(){
        setState(!state)
        console.log(state)
    }
    
    return(
        <>
            <button onClick={handleClick}>Toggle for useState</button>
            <div style={themeStyle}>This is made by using useState</div>
        </>
    )
}
