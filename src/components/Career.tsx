import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2 className="glow-title">
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Kara Internship</h5>
              </div>
              <h3>02/2025 – 08/2025</h3>
            </div>
            <p>
              • Worked with Shopify to develop and manage e-commerce websites.<br/>
              • Customized Shopify themes to improve website design and user experience.<br/>
              • Added and managed products, collections, and store content on Shopify.<br/>
              • Improved website performance and functionality using Shopify tools and features.<br/>
              • Handled basic store setup, configurations, and updates on Shopify.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
