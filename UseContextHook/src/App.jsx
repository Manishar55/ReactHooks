// import { createContext } from 'react'
import './App.css'
import MainComponent from './Components/MainComponent';
import LoginContextProvider from './Context/LoginContextProvider'



// export const LoginContext = createContext();

function App() {

  return (
    //for single context
    // whatever component you pass between this provider, it and it's child components can access this context value 
      // <LoginContext.Provider  value={true}>
      //   <div>
      //     <MainComponent/>
      //   </div>
      // </LoginContext.Provider> 

      

      //for more than one context
      <LoginContextProvider>

          <MainComponent/>

      </LoginContextProvider>
    
  );
}

export default App;
