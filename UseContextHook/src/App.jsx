import { createContext } from 'react'
import './App.css'
import MainComponent from './Components/MainComponent';

const LoginContext = createContext();

function App() {

  return (
    <>
      <div>

        <MainComponent/>

      </div>
    </>
  )
}

export default App
