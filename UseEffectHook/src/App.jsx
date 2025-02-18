import { useState, useEffect } from 'react'
import './App.css'
import CleanUp from './Components/CleanUp'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title=`${count} new messages !!`;   //we are using useEffect without any dependency, so it will run on every single change
  });

  // useEffect(()=>{
  //   document.title=`${count} new messages !!`;   //useEffect will run only one time, when our component gets render first time
  // }, []); 

  const [otherCount, otherSetCount] = useState(0);

  useEffect(()=>{
    document.title=`${otherCount} new messages !!`;   //useEffect will run only when state variable(otherCount) value will change
  }, [otherCount]);  

  return (
    <>
      <div>
        <h1>{count} New Messages !!</h1>
        <button onClick={()=>setCount(count+1)}> Increases</button>


        <h1>Other Count: {otherCount}</h1>
        <button onClick={()=>otherSetCount(otherCount+5)}> Increase by 5 </button>

        <CleanUp/>
      </div>
      
    </>
  )
}

export default App
