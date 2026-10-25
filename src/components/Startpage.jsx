import TiltCard from "./TiltCard.jsx";

function StartPage({ onEnter }) {
  return (
    <div className="scene">
      <TiltCard className="scene-card">
        <div className="front">
          <div className="chip"></div>
          <p>FULL STACK DEVELOPER</p>
          <h1>Beam Chaipotha</h1>
          <div className="start-button">
            <button onClick={onEnter}>Check my portfolio</button>
          </div>
        </div>
        <span className="tag tag-h">HTML</span>
        <span className="tag tag-c">CSS</span>
        <span className="tag tag-j">JS</span>
        <span className="tag tag-p">PHP</span>
      </TiltCard>
    </div>
  );
}

export default StartPage;
