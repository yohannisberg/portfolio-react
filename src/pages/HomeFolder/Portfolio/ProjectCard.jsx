import './Portfolio.css';
import { PortfolioData } from './PortfolioData.js';
import React, { useState } from 'react';
import './FlipButton.css';
import { Link } from 'react-router-dom'; // OR use <a> if it's an external URL

const ProjectCard = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="all-projects-wrapper">
      {PortfolioData.map((data, index) => (
        <div key={index} className="portfolio-item">
          <img src={data.image} className="img" alt={data.imageAlt} />
          <p className="title">{data.title}</p>
          <p className="sub-title">{data.subtitle}</p>

          <div
            className="flip3d-button"
            onClick={() =>
              setFlippedIndex(flippedIndex === index ? null : index)
            }
          >
            <div
              className={`flip3d-inner ${
                flippedIndex === index ? 'flipped' : ''
              }`}
            >
              <p className="flip3d-front">Info</p>
              <p className="flip3d-back">Close</p>
            </div>
          </div>

          <div
            className={`panel ${flippedIndex === index ? 'show' : 'hide'}`}
          >
            <div className="linksWrapper">
              {data.link && (
                <Link to={data.link} target="_blank" rel="noopener noreferrer">
                  <p>Live Site <img src='./open_link.png' className="openLink" alt="External Link Icon" /></p> 
                </Link>
              )}
              {data.videoTour && <a href={data.videoLink} target="_blank"><p>Video Tour <img src='./open_link.png' className="openLink" alt="External Link Icon" /></p></a>}
            </div>

            <div className="description">
              <p className="muted">{data.blurb1}</p>
              {data.companyLink && (
                <a
                  href={data.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img class={data.companyClass} src={data.companyImage} alt={data.companyAlt} />
                </a>
              )}
              <p className="muted">{data.blurb2}</p>
              <p className="muted">
                <b>Technologies:</b> {data.tech}
              </p>
              <p className="muted">
                <b>Functionality:</b> {data.funct}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
