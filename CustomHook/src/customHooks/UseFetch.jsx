
import React, {useEffect, useState} from 'react'


const UseFetch = (url) => {

  const [responses, setResponses] = useState([]);

  useEffect(()=>{
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setResponses(data));
  },[]); //it runs only when component gets render first time 

  return responses;
}

export default UseFetch;