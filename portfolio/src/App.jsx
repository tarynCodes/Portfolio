import Header from "./components/Header"
import NavBar from "./components/NavBar"
import TechSkills from "./components/Tech-skills"
import { Routes } from "react-router-dom"

function App() {
  return(
   <div>
    <TechSkills/>
    <Header/>
    <NavBar/>
    <Routes> 

    </Routes>
   </div>
  )
  
}

export default App
