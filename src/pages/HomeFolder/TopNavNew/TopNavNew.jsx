import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function TopNavNew() {
  const [expanded, setExpanded] = useState(false); // track navbar open/close

  useEffect(() => {
    const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
      target: "#mainNavbar",
      offset: 70,
    });
    return () => scrollSpy.dispose();
  }, []);

  // Close navbar when a nav link is clicked (on mobile)
  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      id="mainNavbar"
      expand="lg"
      fixed="top"
      bg="dark"
      variant="dark"
      className="shadow"
      expanded={expanded} // control expanded state
      onToggle={(isExpanded) => setExpanded(isExpanded)} // update expanded state
    >
      <Container>
        <Navbar.Brand href="#hero">John D'Agostino</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#skills" onClick={handleNavClick}>Skills</Nav.Link>
            <Nav.Link href="#likes" onClick={handleNavClick}>Likes</Nav.Link>
            <Nav.Link href="#portfolio" onClick={handleNavClick}>Portfolio</Nav.Link>
            <Nav.Link href="#about" onClick={handleNavClick}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
