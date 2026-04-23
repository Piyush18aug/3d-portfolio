import "./styles/WhatIDo.css";

const StrengthsAndHobbies = () => {
  const strengths = [
    "Problem-Solving & Debugging",
    "Quick Learner",
    "Full Stack Development",
    "Database Design",
    "Analytical Thinking",
    "Clean & Efficient Code",
  ];

  const hobbies = ["Virtual Gaming", "Volleyball", "Swimming"];

  return (
    <div 
      className="whatIDO" 
      id="strengths"
      style={{ position: "relative", backgroundColor: "#020617", zIndex: 13 }}
    >
      <div className="what-box">
        <h2 className="title glow-title">
          S<span className="hat-h2">TRENGTHS</span>
          <div>
            &<span className="do-h2"> HOBBIES</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-content what-noTouch" style={{ opacity: 1, pointerEvents: "all" }}>
            <div className="what-content-in">
              <h3>STRENGTHS</h3>
              <div className="what-content-flex">
                {strengths.map((s, i) => (
                  <div className="what-tags" key={i}>{s}</div>
                ))}
              </div>
              <h3 style={{ marginTop: "40px" }}>HOBBIES</h3>
              <div className="what-content-flex">
                {hobbies.map((h, i) => (
                  <div className="what-tags" key={i}>{h}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrengthsAndHobbies;
