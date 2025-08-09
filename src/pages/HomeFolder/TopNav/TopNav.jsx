import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './TopNav.css'

const TopNav = () => {
  // setScrolled is a state updater function
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 60); // this will be 'true' once larger than 50px
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll and collapse menu, no manual activeSection setting here
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = 70; // navbar height in px
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setExpanded(false); // collapse mobile menu after click
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)} // control navbar collapse
      className={`navbar-custom custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#">John D'Agostino</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
            <Nav.Link href="#likes" onClick={() => setExpanded(false)}>Likes</Nav.Link>
            <Nav.Link href="#portfolio" onClick={() => setExpanded(false)}>Portfolio</Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;