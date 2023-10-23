import Header from "./components/Header"
import NavBar from "./components/NavBar"
import TechSkills from "./components/Tech-skills"
import About from "./components/About"
import { Routes } from "react-router-dom"

function App() {
  return(
   <div>
    <NavBar/>
    <TechSkills/>
    <Header/>
    <Routes> 

    </Routes>
    <About/>
   </div>
  )
  
}

export default App
