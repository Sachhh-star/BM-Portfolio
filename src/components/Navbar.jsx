import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <a href="#home">BM</a>
      <button
        className="menu-button"
        aria-label="Open menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaXmark /> : <FaBars />}
      </button>
      <ul
        className={isMenuOpen ? "open" : ""}
        onClick={() => setIsMenuOpen(false)}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
