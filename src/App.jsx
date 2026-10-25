import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Background from "./components/Background.jsx";
import StartPage from "./components/Startpage.jsx";
import { useEffect, useState } from "react";

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section:not(.hero)");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [showPortfolio]);

  return (
    <>
      <Background />
      {showPortfolio ? (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
          <Footer />
        </>
      ) : (
        <StartPage onEnter={() => setShowPortfolio(true)} />
      )}
    </>
  );
}

export default App;
