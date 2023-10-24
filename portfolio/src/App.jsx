import Header from "./components/Header"
import NavBar from "./components/NavBar"
import About from "./components/About"
import { Route,Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

function App() {
  return(
   <div>
    <NavBar/>
    <Routes> 
    <Route path= "/" element= {<Header/>}/>
    <Route path= "/about" element={<About/>}/>
    <Route path="/projects" element={<Projects/>}/>
    </Routes>
    <Footer/>
   </div>
  )
  
}

export default App
