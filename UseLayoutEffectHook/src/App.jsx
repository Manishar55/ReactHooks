
import { useState, useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);
  const textRef= useRef()

  // useEffect(()=>{
  //   console.log("useEffect");

  //   if(textRef.current!=null){

  //     const dimenion= textRef.current.getBoundingClientRect();  //using this function we can get all dimensions of this element
  //     console.log(dimenion);
  //     textRef.current.style.paddingTop=`${dimenion.height}px`
  //   }
  // },[toggle]);

  //useLayoutEffect runs before the DOM printed so it will not show the friction 
  useLayoutEffect(()=>{  //useLayout will always run first  
    console.log("useLayoutEffect");

    if(textRef.current!=null){

      const dimenion= textRef.current.getBoundingClientRect();  //using this function we can get all dimensions of this element
      console.log(dimenion);
      textRef.current.style.paddingTop=`${dimenion.height}px`
    }
  },[toggle]);

  return(
    <>
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle && <h3 ref={textRef}>Code toggled</h3>}
    </>
  )
}

export default App
