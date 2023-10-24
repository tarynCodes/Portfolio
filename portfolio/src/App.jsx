import Header from "./components/Header"
import NavBar from "./components/NavBar"
import About from "./components/About"
import { Route,Routes } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return(
   <div>
    <NavBar/>
    <Routes> 
    <Route path= "/" element= {<Header/>}/>
    <Route path= "/about" element={<About/>}/>
    </Routes>
    <Footer/>
   </div>
  )
  
}

export default App
