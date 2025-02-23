
import { useReducer } from 'react'
import './App.css'


const ACTION={
  INCREASE: "increase",
  DECREASE: "decrease"
}

const initialState={ count : 0 };

const reducer=(state, action)=>{
  console.log(action);

  switch(action.type){

    case "increase":    //case ACTION.INCREASE:
    return {count: state.count + 1};

    case "decrease":
    return {count: state.count - 1};

    default:
    return state;
  }
};


function App() {

  //reducer function will manage all state
  const[state, dispatch] = useReducer(reducer, initialState);

  const increaseCount=()=>{
    dispatch({type: "increase"}); //whatever we pass in this dispatch function we can access this by the action parameter
  }

  const decreaseCount=()=>{
    dispatch({type: "decrease"});  //or {type: "ACTION.DECREASE"}
  }

  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App
