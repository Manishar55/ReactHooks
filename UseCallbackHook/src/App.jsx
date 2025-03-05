
import { useState, useMemo } from 'react'

import PrintTable from "./PrintTable"

function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark]=useState(false);

  
  const cssStyle={                                
    backgroundColor: dark ? "black" : "white",   
    color: dark ? "white" : "black",
  }


  const calculateTable=()=>{
    return [number*1, number*2, number*3, number*4, number*5];  //it can be anything like calling API
  };


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
