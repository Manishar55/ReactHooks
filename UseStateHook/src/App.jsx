import { useState } from 'react'
import './App.css'

// function App() {

//   // const arr=useState(0);
//   // const count=arr[0];
//   // const setCount=arr[1];

//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("");

//   function increaseCounter(){
//     setCount(count+1);
//   }

//   return (
//     <>
//       <div>
//         <input type='text' onChange={(e)=> setName(e.target.value)}></input>

//         <h1>{name} has clicked the Counter: {count} times !!</h1>

//         <button onClick={increaseCounter}>Increase</button>
//       </div>
//     </>
//   )
// }


//Same thing using only one useState variable
//useState with object
function App() {

  const [deatils, setDetails] = useState({count: 0, name:""});

  function increaseCounter(){
    setDetails((prev)=>({
      ...prev,                //When dealing with an object as state in useState, ensure to update the state properly to avoid losing other elements. Use the spread operator to include previous values.
      count: prev.count+1,
    }));
  }

  function updateName(e) {
    setDetails(prev => ({
      ...prev,
      name: e.target.value,
    }));
  }

  return (
    <>
      <div>
        <input type='text' onChange={updateName}></input>

        <h1>{deatils.name} has clicked the Counter: {deatils.count} times !!</h1>
        
        <button onClick={increaseCounter}>Increase</button>
      </div>
    </>
  )
}

export default App
