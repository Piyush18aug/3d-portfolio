import "./styles/Career.css";
import "./styles/Research.css";

const ResearchPaper = () => {
  return (
    <div
      className="career-section section-container"
      id="research"
      style={{ position: "relative", backgroundColor: "#020617", zIndex: 11, paddingBottom: "150px", marginBottom: "0px" }}
    >
      <div className="career-container">
        <h2>
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

          <div className="research-box">
            <h4>Summary</h4>
            <p>
Modern video games, especially open-world games like GTA V, are no longer just for entertainment—they act as environments to study human behavior and financial decision-making. In GTA Online, players engage in activities like buying, selling, investing, and managing resources, similar to real-world economic systems.

Behavioral finance explains that people don’t always make rational financial decisions; instead, their choices are influenced by emotions, biases, and social factors (as shown by Kahneman and Tversky). These concepts can be observed in gaming environments, where AI can analyze large datasets to understand player behavior.

With over 185 million copies sold, GTA V provides a large-scale platform where players use real money to purchase virtual assets, making it ideal for studying risk management, spending habits, and investment behavior.

Although previous research has explored gaming behavior, there is a gap in using advanced AI models (like LSTM) to analyze in-game financial decisions. This study aims to fill that gap by developing an AI-based system to:

Identify player behaviors (risk-taking, impulsive spending, investment decisions)
Compare in-game behavior with real-world financial theories
Analyze the impact of virtual environments on real-life decision-making

Overall, the research highlights how AI + behavioral finance + gaming can help us better understand human financial behavior and improve game design, policies, and player welfare.
            </p>
          </div>

          <div className="research-btn-container">
            {/* The actual research paper pdf link can be placed here */}
            <a href="src/Resume/GTA5_BehavioralFinance_AI_Paper.pdf" target="_blank" rel="noopener noreferrer" className="research-btn">
              View Research Paper (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
