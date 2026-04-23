import { useEffect, useState, useCallback } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const base = import.meta.env.BASE_URL;

const NAV_LINKS = [
  { href: "#about", text: "ABOUT" },
  { href: "#whatido", text: "WHAT I DO" },
  { href: "#career", text: "CAREER" },
  { href: "#education", text: "EDUCATION" },
  { href: "#work", text: "PROJECTS" },
  { href: "#certifications", text: "CERTIFICATIONS" },
  { href: "#research", text: "RESEARCH" },
  { href: "#strengths", text: "STRENGTHS" },
  { href: "#contact", text: "CONTACT" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    // Smooth scroll for all anchor links
    const links = document.querySelectorAll(".header a");
    const handlers: Array<{ el: Element; fn: EventListener }> = [];

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const fn: EventListener = (e) => {
        e.preventDefault();
        const targetId = element.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
        closeMobileMenu();
      };
      element.addEventListener("click", fn);
      handlers.push({ el: element, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
    };
  }, [closeMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="header">
        {/* Logo */}
        <a href="#landingDiv" className="navbar-title" data-cursor="disable">
          <img
            src={`${base}images/Logo.jpeg`}
            alt="Logo"
            style={{ height: "40px", borderRadius: "50%" }}
          />
        </a>

        {/* Desktop nav links */}
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a data-href={link.href} href={link.href}>
                <HoverLinks text={link.text} />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger toggle button */}
        <button
          className={`hamburger${isOpen ? " hamburger--open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          data-cursor="disable"
        >
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`mobile-menu${isOpen ? " mobile-menu--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <nav>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMobileMenu}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      <div className="landing-circle1" />
      <div className="landing-circle2" />
      <div className="nav-fade" />
    </>
  );
};

export default Navbar;
