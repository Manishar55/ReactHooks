
import { useContext } from "react"
// import { LoginContext } from "../App"

import { LoginContext } from "../Context/LoginContextProvider"

function SinglePost() {

    const login = useContext(LoginContext);
    console.log(login);
    
    return(

        <div>
            <h1>Single Post</h1>
        </div>
    )
  
}

export default SinglePost

