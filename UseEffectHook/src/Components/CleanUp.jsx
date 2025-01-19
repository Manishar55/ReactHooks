import { useState, useEffect } from "react";

function CleanUp() {

    const [time, setTime] = useState(0);

    //the interval will not stop unless we use the Clear Interval function, 
    // if we are setting state using setInterval and that side effect is not cleaned up 
    // when our components unmounts or we are no longer to use it the state is destroyed with the component 
    // but the setInterval function will keep running that will make application slow
    useEffect(()=>{
        const timer= setInterval(()=>{
            setTime(time+1);   
        }, 1000);

        return () =>{   //to use cleanup function we need to run return function in useEffect
            clearInterval(timer);  //the cleanup function will be called when the component is unmounted 
        }
    });

    return(
        <div>
            <h1>{time} in seconds</h1>
        </div>
    )
  
}

export default CleanUp
