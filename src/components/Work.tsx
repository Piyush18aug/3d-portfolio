import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "PayrollPro",
    category: "Payroll Management",
    tools: "Java, Spring Boot, SQLite, OpenCV",
  },
  {
    title: "Video Steganography",
    category: "Security System",
    tools: "Java, OpenCV",
  },
  {
    title: "SpendWise",
    category: "Expense Management",
    tools: "React, Django, SQLite",
  },
  {
    title: "Reel Generator",
    category: "Video Processing",
    tools: "Python, MoviePy",
  },
  {
    title: "Startup Analysis",
    category: "Data Science",
    tools: "Python, Pandas, Seaborn",
  },
  {
    title: "ERP System",
    category: "College Management",
    tools: "Python, Django, SQLite",
  },
  {
    title: "Pharma Management",
    category: "Inventory System",
    tools: "Python, Django, SQLite",
  },
  {
    title: "Computer Lab Management",
    category: "IT Support System",
    tools: "Python, Django, MySQL",
  },
  {
    title: "Interview Tracker",
    category: "Job Application Tracking",
    tools: "Python, Django, SQLite",
  },
  {
    title: "Annual Report System",
    category: "Report Generation",
    tools: "Flask, MySQL, JavaScript",
  },
  {
    title: "BooksGuide",
    category: "Educational Platform",
    tools: "PHP, MySQL, JavaScript",
  },
  {
    title: "MarketMentor",
    category: "Stock Market Dashboard",
    tools: "Flask, Stock API, Chart.js",
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
        <h2>
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
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
