
import { useState, useCallback } from 'react'
import PrintTable from "./PrintTable"


function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark]=useState(false);


  const calculateTable = useCallback((value)=>{  //if we use useMemo here we will only get the value, but if we use useCallback we will get the full function in this variable
    
    let num=number+value;  //in useMemo we can't pass parameter
    return [num*1, num*2, num*3, num*4, num*5];
  }, [number]);  //This function will run only when we change the number, now "Print table runs" will not rerender when we toggle the theme

  
  const cssStyle={                                
    backgroundColor: dark ? "black" : "white",   
    color: dark ? "white" : "black",
  }


  // const calculateTable=()=>{   //"Print table runs" will rerender even when we toggle the theme
  //   return [number*1, number*2, number*3, number*4, number*5];  //it can be anything like calling API
  // };


  return (
    <div style={cssStyle}>

      <input 
        onChange={(e)=>setNumber(e.target.valueAsNumber)}  //when we change the number it will take some seconds coz we added a expensive loop
        type='number'
        value={number}
      />

      <PrintTable calculateTable={calculateTable}/>
      <button onClick={()=>setDark(!dark)}>Toggle</button>

    </div>
  )
};


export default App
