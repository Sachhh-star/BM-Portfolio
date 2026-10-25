import { useState } from "react";

function TiltCard({ className, children }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });

  function handleMouseMove(event) {
    const card = event.currentTarget.getBoundingClientRect();
    const mouseX = (event.clientX - card.left) / card.width;
    const mouseY = (event.clientY - card.top) / card.height;
    setTilt({
      x: (0.5 - mouseY) * 20,
      y: (mouseX - 0.5) * 20,
      shineX: mouseX * 100,
      shineY: mouseY * 100,
    });
  }

  function handleMouseLeave() {
    setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 });
  }

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      {children}
      <div
        className="shine"
        style={{
          background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255, 255, 255, 0.3), transparent 60%)`,
        }}
      ></div>
    </div>
  );
}

export default TiltCard;
