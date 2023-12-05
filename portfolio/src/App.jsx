import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Pic from "./components/Pic";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Projects />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
