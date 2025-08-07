import './Portfolio.css';
import ProjectCard from './ProjectCard';


const Portfolio = () => {

  return (
    <section className="portfolio-comp portfolio-wrapper">

      <div className="max-1280">
        <div className="header-wrap text-center">
          <h2 className="section-heading">Portfolio</h2>
          <p className="section-subcopy">(All projects made from scratch)</p>
        </div>

        <ProjectCard />
      </div>
    </section>
  )
};

export default Portfolio;