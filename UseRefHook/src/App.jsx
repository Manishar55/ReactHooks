import { useEffect, useRef, useState } from 'react'
import './App.css'


// function App() {
//   const [name, setName] = useState("");

//   //-----Counting the renderes
//   //count will be constantly updating because when the component is rendered it will update the count variable by 1 
//   // and because that state variable is updadted the component will render again and again we will stuck in an infinite loop when we use useState hook

//   // const [count, setCount] =useState(0);
//   // useEffect(()=>{
//   //   setCount((prev)=>prev+1);  
//   // });

//   //using useRef
//   //creating mutable variable without causing re renders
//   const count= useRef(0);  //this function returns an object with one property that is current
//   // console.log(count);

//   useEffect(()=>{
//     count.current = count.current + 1;
//   });
   

//   return (
//       <div>
//         <input type='text' onChange={(e)=>setName(e.target.value)}></input>
//         <h2>Name: {name}</h2>
//         <h2>Renders: {count.current}</h2>
//       </div>
//   )
// }


//accessing DOM elements

const App = () => {

  const inputEle = useRef();

  const handleClick = () =>{
    console.log(inputEle.current);
    inputEle.current.style.width="300px";
    inputEle.current.focus();
  };

  return (
    <div>
      <input type='text' ref={inputEle}/>
      <button onClick={handleClick}> Click Me</button>
    </div>
  )
}


export default App
