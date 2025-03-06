
import React from 'react'
import UseFetch from './customHooks/UseFetch';


//custom hook for fetching data from API
function App() {
  const data = UseFetch("https://jsonplaceholder.typicode.com/users");

  return (
    //if you want to fetch data from API in 10 to 12 components, then you have to write this code in all of 
    //those components which is not a good method, so we will create custom hook for fetching data
    <>
      {data.map((res)=>{
        return (
          <h4 key={res.id}>
            {res.id}.{res.name}
          </h4>
        );
      })}
    </>
  )
}

export default App
