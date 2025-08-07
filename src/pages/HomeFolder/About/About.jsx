import './About.css';

const About = () => {

  return (
    <section className="portfolio-comp about-wrapper">

      <div className="max-1280">
        <div className="header-wrap text-center">
          <h2 className="section-heading">About</h2>
        </div>

        <div class="team-member">
          <img src="./pictures/myPhotoCropped-2.jpg" class="img-responsive img-circle" alt="Profile - John D'Agostino" />
          <p>John D'Agostino</p>

          <ul class="list-inline social-buttons">
            <li><a href="https://github.com/yohannisberg" target="_blank"><i class="fa fa-github"></i></a>
            </li>
            <li><a href="https://www.linkedin.com/in/john-dagostino/" target="_blank"><i class="fa fa-linkedin"></i></a>
            </li>
            <li><a href="https://www.facebook.com/john.dagostino2" target="_blank"><i class="fa fa-facebook"></i></a>
            </li>
          </ul>

          <div class="resumeButtonWrapper">
            <div class="resumeButton"><a href="https://docs.google.com/document/d/1QTBCnF45PV5jrsRxrta-1Ko4zSbClkQopub4s-S-Eok/edit?usp=sharing" target="_blank">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;