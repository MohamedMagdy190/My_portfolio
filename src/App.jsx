import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="App bg-neutral-900 min-h-screen">
      <Navbar />
      
      <Routes>
        {/* Home Route containing all sections */}
        <Route path="/" element={
          <main>
            <Hero />
            <Stats />
            <Skills />
            <Projects />
            <Contact />
          </main>
        } />
        
        {/* Add more routes here in the future, e.g., for detailed project pages */}
        {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
      </Routes>

      <Footer/>
    </div>
  );
}
