import { useState } from "react";

function StartPage({ onEnter }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });

  function handleMouseMove(event) {
    const card = event.currentTarget.getBoundingClientRect();
    const mouseX = (event.clientX - card.left) / card.width;
    const mouseY = (event.clientY - card.top) / card.height;
    setTilt({ x: (0.5 - mouseY) * 20, y: (mouseX - 0.5) * 20, shineX: mouseX * 100,  shineY: mouseY * 100});
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 , shineX: 50, shineY: 50});
  }
  return (
    <div className="scene">
      <div
        className="scene-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      >
        <div className="front">
          <div className="chip"></div>
          <p>FULL STACK DEVELOPER</p>
          <h1>Beam Chaipotha</h1>
          <div className="start-button">
            <button onClick={onEnter}>Check my portfolio</button>
          </div>
          <div
            className="shine"
            style={{
              background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255, 255, 255, 0.3), transparent 60%)`,
            }}
          ></div>
        </div>
        <span className="tag tag-h">HTML</span>
        <span className="tag tag-c">CSS</span>
        <span className="tag tag-j">JS</span>
        <span className="tag tag-p">PHP</span>
      </div>
    </div>
  );
}

export default StartPage;
