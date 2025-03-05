
import { useState, useMemo } from 'react'

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark]=useState(false);


  //const calculation = expensiveFunction(number);  //when we click on the toggle button react is rerendering the component, 
                                                  //it calls the expensivefunction so we can't immediately toggle the theme
                                                  //so the solution is we will only run this function when the number is change, we use useMemo hook for that


  const memoCalculation= useMemo(()=>{  //it takes two arguments 1st is for callback function and 2nd is for dependencies
     return expensiveFunction(number);
  }, [number])  //whenever any variable from this dependency array will change only then this callback function will run, now the theme will toglled immediately 

  
  const cssStyle={                                
    backgroundColor: dark ? "black" : "white",   
    color: dark ? "white" : "black",
  }


  return (
    <div style={cssStyle}>

      <input 
        onChange={(e)=>setNumber(e.target.valueAsNumber)}  //when we change the number it will take some seconds coz we added a expensive loop
        type='number'
        value={number}
      />

      {/* <h2>Calculation: {calculation}</h2> */}
      <h2>Calculation: {memoCalculation}</h2>
      <button onClick={()=>setDark(!dark)}>Toggle</button>

    </div>
  )
};

function expensiveFunction(num){
  console.log("Loop Started");

  for(let i=0; i<1000000000; i++){}   //it can be any long calculation that takes vary long time
  return num;
  
}

export default App
