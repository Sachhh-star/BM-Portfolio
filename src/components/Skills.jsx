import { MdStar } from "react-icons/md";

function Skills() {
  return (
    <section id="skill" className="skills">
      <h2>Skill</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <ul>
            <li className="languages-card">
              HTML & CSS
              <br />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </li>

            <li className="languages-card">
              JavaScript (JS)
              <br />
              <MdStar />
              <MdStar />
              <MdStar />
            </li>

            <li className="languages-card">
              PHP
              <br />
              <MdStar />
              <MdStar />
            </li>

            <li className="languages-card">
              C#
              <br />
              <MdStar />
              <MdStar />
            </li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Framework</h3>
          <ul>
            <li className="framework-card">
              Laravel
              <br />
              <MdStar />
              <MdStar />
            </li>

            <li className="framework-card">
              React.js
              <br />
              <MdStar />
              <MdStar />
              <MdStar />
            </li>

            <li className="framework-card">
              Vue.js
              <br />
              <MdStar />
              <MdStar />
            </li>

            <li className="framework-card">
              Godot Engine
              <br />
              <MdStar />
              <MdStar />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
