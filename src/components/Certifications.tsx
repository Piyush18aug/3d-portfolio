import "./styles/Career.css";

const Certifications = () => {
  const certs = [
    "RDBMS PostgreSQL Training - IIMS [17-April-2026]",
    "Git Training - IIMS [18-April-2026]",
    "Python 3.4.3 Training - IIMS [16-April-2026]",
    "React JS Course Completion [20-December-2024]",
    "DevForge (conducted by GDLC PCCOE) [20-February-2024]",
    "Data and Analytics (Industry Academia Community) [11-July-2023]",
    "Dynamic Applications with Flask and Django (MKCL) [13-August-2025]",
    "Data Visualization (Advance Excel and PowerBI) [27-February-2024]",
  ];

  return (
    <div 
      className="career-section section-container" 
      id="certifications" 
      style={{ position: "relative", backgroundColor: "#020617", zIndex: 11 }}
    >
      <div className="career-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Licenses & Certs</h4>
                <h5>Verified Qualifications</h5>
              </div>
            </div>
            <ul style={{ paddingLeft: "20px", color: "#ddd", position: "relative", zIndex: 2, boxSizing: "border-box" }}>
              {certs.map((cert, index) => (
                <li key={index} style={{ marginBottom: "12px", listStyleType: "disc" }}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
