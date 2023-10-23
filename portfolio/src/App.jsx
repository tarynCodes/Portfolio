import Header from "./components/Header"
import NavBar from "./components/NavBar"
import About from "./components/About"
import { Route,Routes } from "react-router-dom"

function App() {
  return(
   <div>
    <NavBar/>
    <Routes> 
    <Route path= "/" element= {<Header/>}/>
    <Route path= "/about" element={<About/>}/>
    </Routes>
   </div>
  )
  
}

export default App
