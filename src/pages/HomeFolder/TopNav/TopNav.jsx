import React, { useState, useEffect } from "react";
import './TopNav.css'


const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "skills", label: "Skills" },
  { id: "likes", label: "Likes" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
];

export default function TopNavNew() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 60); // this will be 'true' once larger than 50px
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section with offset for fixed header
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 70; // adjust this to your fixed navbar height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Update activeSection on scroll
  useEffect(() => {
    const headerOffset = 70;

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + headerOffset + 1; // +1 to handle edge cases

      let currentSection = SECTIONS[0].id; // default

      for (let section of SECTIONS) {
        const elem = document.getElementById(section.id);
        if (elem) {
          const elemTop = elem.offsetTop;
          if (scrollPosition >= elemTop) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-custom custom-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">John D'Agostino</div>
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className={activeSection === id ? "active" : ""}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
