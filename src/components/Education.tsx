import "./styles/Career.css";

const Education = () => {
  return (
    <div 
      className="career-section section-container" 
      id="education"
      style={{ position: "relative", backgroundColor: "#020617", zIndex: 9 }}
    >
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (M.C.A.)</h4>
                <h5>Yashaswi IIMS, Chinchwad</h5>
              </div>
              <h3>Pursuing</h3>
            </div>
            <p>Focusing on advanced software development, analytical skills, and data-driven solutions.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (B.C.A.)</h4>
                <h5>ATSS College, Chinchwad</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>Score: 9.19 CGPA</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Certificate (HSC)</h4>
                <h5>S.G.M College, Karad</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>Score: 83.50 %</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School Certificate (SSC)</h4>
                <h5>Krishna English Medium School, Wathar</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>Score: 70.40 %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
