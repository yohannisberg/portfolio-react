import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

const About = () => {

  return (
    <>
    <section id="about" className="portfolio-comp about-wrapper">

      {/* <div className="navStyles"></div> */}

      <div className="max-1280">
        <div className="header-wrap text-center">
          <h2 className="section-heading">About</h2>
        </div>

        <div className="team-member">
          <img src="./profile-pic.jpg" className="img-circle" alt="Profile - John D'Agostino" />
          <p className="name">John D'Agostino</p>
          <p className="subcopy">Web developer with a B.A. in Communication from UIC, combining clear communication with clean code — and&nbsp;always&nbsp;pushing to learn what’s&nbsp;next.</p>

          <ul className="social-buttons">
            <li>
              <a href="https://github.com/yohannisberg" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/john-dagostino/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/john.dagostino2" target="_blank">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
            </li>
          </ul>

          <a href="https://docs.google.com/document/d/1QTBCnF45PV5jrsRxrta-1Ko4zSbClkQopub4s-S-Eok/edit?usp=sharing" target="_blank">
            <p className="resumeButton">Resume</p>
          </a>

        </div>
      </div>

    </section>

    <section className="portfolio-comp copyright-wrapper">
      <p>Copyright © John D'Agostino 2025</p>
    </section>
    </>
  )
};

export default About;