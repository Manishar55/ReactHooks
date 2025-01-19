
import { useContext } from "react"
// import { LoginContext } from "../App"

import { LoginContext } from "../Context/LoginContextProvider"

function DoublePost() {

    const login = useContext(LoginContext);
    console.log(login);
    
    return(

        <div>
            <h1>Double Post</h1>
        </div>
    )
}
export default DoublePost

