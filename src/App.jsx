import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Background from "./components/Background.jsx";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
