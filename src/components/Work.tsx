import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "PayrollPro",
    category: "Payroll Management",
    tools: "Java, Spring Boot, SQLite, OpenCV",
    description:
      "Employee Management: Add, update, and manage employee records; Attendance Management: Face recognition-based attendance system, Manual attendance entry system; Salary Management: Calculate salaries based on attendance, allowances, and deductions; Payroll Processing: Automate monthly salary generation.",
    image: `${base}images/payrollpro.png`,
    linkText: "GitHub Repo",
    link: "https://github.com/Ayan-Hasan-07/PayrollPro",
  },
  {
    title: "Video Steganography",
    category: "Security System",
    tools: "Java, OpenCV",
    description:
      "Data Embedding: Hide confidential data inside video frames; Data Extraction: Retrieve hidden data from video files; Video Processing: Handle frame-by-frame processing using OpenCV; Encoding & Decoding: Ensure secure data transmission; User Interface: Upload video and input/output hidden data.",
    image: `${base}images/VideoStegnography.png`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/Video-Steganography",
  },
  {
    title: "SpendWise",
    category: "Expense Management",
    tools: "React, Django, SQLite",
    description:
      "User Authentication: Secure login and registration; Expense Management: Add, update, and delete expense records; Category Management: Organize expenses into categories; Data Visualization: Display spending patterns using charts; Awareness & Goals: Provide financial awareness and allow user goals.",
    image: `${base}images/Spendwise.png`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/SpendWise",
  },
  {
    title: "Reel Generator",
    category: "Video Processing",
    tools: "Python, Video Processing Libs",
    description:
      "YouTube Input: Accept YouTube video link as input; Video Processing: Extract and process video content; Highlight Detection: Identify key/best moments from the video; Clip Generation: Automatically generate a short 30-second reel; Optimization: Reduce manual editing effort and improve efficiency.",
    image: `${base}images/Reel.jpeg`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/Reel_Generator",
  },
  {
    title: "Startup Funding Analysis",
    category: "Data Science",
    tools: "Python, Pandas, Seaborn",
    description:
      "Data Collection: Gather startup funding dataset; Data Cleaning: Preprocess and handle missing/inconsistent data; Data Analysis: Analyze funding trends, investors, and startup growth; Visualization: Create charts and graphs for better insights; Insights Generation: Identify patterns in funding and investment behavior.",
    image: `${base}images/startupfundinganalysis.png`,
    linkText: "Link",
    link: "https://piyush-startup-funding-analysis.streamlit.app/",
  },
  {
    title: "ERP System",
    category: "College Management",
    tools: "Python, Django, SQLite",
    description:
      "User Management: Manage roles for admin, faculty, and students; Student Management: Add, update, and track student records; Attendance Management: Record and monitor student attendance; Academic Management: Manage subjects, courses, and results; Notice & Communication: Share announcements and updates.",
    image: `${base}images/ERP.png`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/ERP_System",
  },
  {
    title: "Pharma Management",
    category: "Inventory System",
    tools: "Python, Django, SQLite",
    description:
      "User Management: Manage roles for admin and staff; Medicine Management: Add, update, and track medicine details; Inventory Management: Monitor stock levels and expiry dates; Expiry Alert System: Generate alerts for medicines nearing expiry; Sales Management: Handle billing and medicine sales.",
    image: `${base}images/pharma.png`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/Pharma_Management_System",
  },
  {
    title: "Computer Lab Management",
    category: "IT Support System",
    tools: "Python, Django, MySQL",
    description:
      "Issue Reporting: Students can raise issues related to hardware or software; Ticket Management: Generate and track issue tickets; IT Support Module: IT department reviews and resolves reported issues; Admin Panel: Admin monitors and manages all tickets and activities; Status Tracking: Real-time issue status.",
    image: `${base}images/lab.png`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/Computer_Lab_Management_System",
  },
  {
    title: "Interview Tracker",
    category: "Job App Tracking",
    tools: "Python, Django, SQLite",
    description:
      "User Management: Manage user profiles and authentication; Application Tracking: Track job applications and interview status; Interview Scheduling: Manage interview dates and reminders; Mock Interview Module: Allow freshers to practice interviews; Feedback System: Provide performance feedback.",
    image: `${base}images/interview.png`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/Interview-Tracker",
  },
  {
    title: "Annual Report System",
    category: "Report Generation",
    tools: "Flask, MySQL, JavaScript",
    description:
      "Data Collection: Collect report data through structured forms; Content Management: Manage different sections of the annual report; Report Generation: Automatically generate complete reports; File Export: Download reports in document format (PDF/Doc); User Management: Allow multiple users to input.",
    image: `${base}images/annualreport.png`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/Annual_report_Generation",
  },
  {
    title: "BooksGuide",
    category: "Educational Platform",
    tools: "PHP, MySQL, JavaScript",
    description:
      "User Interface: Provide a platform to access notes and books; Content Management: Manage study materials for courses (BCA, BBA, BSc, etc.); User Management: Manage user accounts and access; Database Management: Store and manage content and user data efficiently.",
    image: `${base}images/booksguide.jpeg`,
    linkText: "GitHub Repo",
    link: "https://github.com/Piyush18aug/booksguide",
  },
  {
    title: "MarketMentor",
    category: "Stock Market Dashboard",
    tools: "Flask, Stock API, Chart.js",
    description:
      "API Integration: Fetch real-time stock market data using external APIs; Data Processing: Handle and structure stock price data; Candlestick Visualization: Display stock trends using candlestick charts; User Interface: Provide interactive dashboard; Data Analysis: Help users understand market trends.",
    image: `${base}images/marketmentor.png`,
    linkText: "Link",
    link: "https://sth-marketmentors.vercel.app/",
  },
];

const Work = () => {
  useGSAP(() => {
    const workFlex = document.querySelector(".work-flex") as HTMLElement;
    const workSection = document.querySelector(".work-section") as HTMLElement;

    if (!workFlex || !workSection) return;

    // Calculate exact distance to scroll so the last project is fully visible
    const getScrollAmount = () => {
      const boxes = document.getElementsByClassName("work-box");
      if (boxes.length === 0) return 0;

      const lastBox = boxes[boxes.length - 1] as HTMLElement;
      // Get the right edge coordinate of the last box
      const lastBoxRight = lastBox.getBoundingClientRect().right;

      // Calculate how far that right edge is past the viewport's right edge
      // Add roughly 50px of breathing room padding at the end
      let distance = lastBoxRight - window.innerWidth + 50;

      return distance > 0 ? distance : 0;
    };

    // Use a direct tween to avoid timeline lag where the pin ends before the scrub finishes
    const tween = gsap.to(workFlex, {
      x: () => -getScrollAmount(),
      ease: "none",
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getScrollAmount()}`,
        pin: true,
        scrub: true, // true binds it instantly without a 1 second delay
        pinSpacing: true,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    // Force GSAP to recalculate positions safely after mount
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      tween.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="glow-title">
          My <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{index < 9 ? `0${index + 1}` : index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: "#bbb",
                        textAlign: "left",
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p style={{ marginBottom: "15px" }}>{project.tools}</p>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "6px 16px",
                      border: "1px solid var(--accentColor)",
                      color: "var(--accentColor)",
                      borderRadius: "20px",
                      fontSize: "13px",
                      textDecoration: "none",
                      transition: "0.3s",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--accentColor)";
                      e.currentTarget.style.color = "#000";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "var(--accentColor)";
                    }}
                  >
                    {project.linkText}
                  </a>
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
