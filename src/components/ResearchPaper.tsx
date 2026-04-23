import "./styles/Career.css";
import "./styles/Research.css";
import researchPdf from "../Research Paper/GTA5_BehavioralFinance_AI_Paper.pdf";

const ResearchPaper = () => {
  return (
    <div
      className="career-section section-container"
      id="research"
      style={{ position: "relative", backgroundColor: "var(--backgroundColor)", zIndex: 11, paddingBottom: "150px", marginBottom: "0px" }}
    >
      <div className="career-container">
        <h2 className="glow-title">
          Research <span>Publications</span>
        </h2>
        
        <div className="research-paper-card">
          <h3 className="research-subtitle">Published Paper</h3>
          <h4 className="research-title">
Behavioral Finance Analysis Using Artificial Intelligence on Player Spending Patterns in Grand Theft Auto V</h4>
          
          <div className="research-box">
            <h4>Abstract</h4>
            <p>
This paper studies how players spend money in GTA 5 Online using AI techniques like LSTM, Random Forest, and NLP. It analyzes player behavior in three areas: risk-taking, impulsive buying, and investment decisions.
Using data from 240,000+ in-game transactions, the study found that player behavior in the game closely matches real-world financial psychology, including concepts like loss aversion, endowment effect, and herd behavior.
The AI models achieved 89.4% accuracy in identifying different types of player spending behavior. Results show that:
67.3% of players show impulsive buying behavior
43.1% of players behave like investors in virtual assets
Overall, the research highlights how virtual game environments can reflect real-world financial decision-making and has implications for game design, regulation, and player welfare.
            </p>
          </div>


          <div className="research-btn-container">
            {/* The actual research paper pdf link can be placed here */}
            <a href={researchPdf} target="_blank" rel="noopener noreferrer" className="research-btn">
              View Research Paper (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
