import './Portfolio.css';
import ProjectCard from './ProjectCard';
import Brands from './Brands/Brands';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-comp portfolio-wrapper">

      <div className="max-1280">
        <div className="header-wrap text-center">
          <h2 className="section-heading">Portfolio</h2>
          <p className="section-subcopy">(All projects made from scratch)</p>
        </div>

        <ProjectCard />
      </div>
      <Brands />
    </section>
  )
};

export default Portfolio;