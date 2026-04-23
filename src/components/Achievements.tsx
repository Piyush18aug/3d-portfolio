import "./styles/About.css";

const Achievements = () => {
  return (
    <div 
      className="about-section section-container" 
      id="achievements"
      style={{ position: "relative", backgroundColor: "var(--backgroundColor)", zIndex: 12, paddingTop: "0px", marginTop: "0px" }}
    >
      <div className="about-me">
        <h3 className="title glow-title">Achievements</h3>
        
        <div>
          <h4 style={{ color: "#fff", marginBottom: "10px" }}>Co-curricular Activities</h4>
          <ul style={{ paddingLeft: "20px", color: "#ddd" }}>
            <li className="para">Aavishkar Zonal level Research Project Competition [27-Oct-2023]</li>
            <li className="para">TechnoCase State level Ideation and Programming Competition [07-Mar-2025]</li>
            <li className="para">Youth Leadership Development Institute Certification [22-Sep-2022]</li>
            <li className="para">National Science Day Inter-college competition (Pratibha College) [01-Mar-2024]</li>
            <li className="para">Inter-College Project competition (D Y Patil) [02-Mar-2024]</li>
            <li className="para">National Startup Day Inter-College competition [16-Jan-2025]</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
