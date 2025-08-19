import { useState, useEffect, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SkillsMatter.css'
import MatterJS from './MatterJS';


const SkillsMatter = () => {

  const [showScene, setShowScene] = useState(false);
  const targetRef = useRef(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (targetRef.current) {
        const { width, height } = targetRef.current.getBoundingClientRect();
        setDims({ width, height });

        console.log("width: ", width, "hii: ", height); // ✅ fresh values
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  var settings = {
    slidesToScroll: 3,
    autoplay: false,
    arrows: true,
    dots: false,
    infinite: true,
    centerMode: false,
    variableWidth: true,
    centerPadding:0,
    draggable: 1, 
  };

  const skillsData = [
    { class:"react", image: '/React-icon.png', alt: 'React Logo', name: 'React' },
    { class:"html", image: '/html5-color.svg', alt: 'HTML5 Logo', name: 'HTML5' },
    { class:"css", image: '/css3-color.svg', alt: 'CSS3 Logo', name: 'CSS3' },
    { class:"js", image: '/javascript.svg', alt: 'JavaScript Logo', name: 'JavaScript' },
    { class:"wp", image: '/wordpress.svg', alt: 'Wordpress Logo', name: 'Wordpress' },
    { class:"php", image: '/PHP-logo.svg', alt: 'PHP Logo', name: 'PHP' },
    { class:"greensock", image: '/greensock.png', alt: 'Greensock Logo', name: 'GSAP' },
    { class:"jquery", image: '/jquery-icon.png', alt: 'jQuery Logo', name: 'jQuery' },
    { class:"ajs", image: '/angular-color.svg', alt: 'AngularJS Logo', name: 'AngularJS' },
    { class:"sass", image: '/sass2.png', alt: 'Sass Logo', name: 'Sass' },
    { class:"figma", image: '/Figma-logo.svg', alt: 'Figma Logo', name: 'Figma'},
    { class:"git", image: '/git.svg', alt: 'Git Logo', name: 'Git' },
    { class:"npm", image: '/Npm-logo.svg', alt: 'NPM Logo', name: 'NPM' },
    { class:"node", image: '/nodejs.svg', alt: 'Node.JS Logo', name: 'Node.JS' },
    { class:"sql", image: '/Postgres.svg', alt: 'SQL Logo', name: 'SQL' },
    { class:"express", image: '/express.png', alt: 'Express.JS Logo', name: 'Express.JS' },
    { class:"gulp", image: '/gulp.svg', alt: 'Gulp Logo', name: 'Gulp' },
    { class:"bootstrap", image: '/Boostrap_logo.svg', alt: 'Bootstrap Logo', name: 'Bootstrap' },
    // { class:"gwb", image: '/google-web-designer.svg', alt: 'Google Web Designer', name: 'GWD'},
    { class:"photoshop", image: '/pscs6.png', alt: 'Adobe Photoshop Logo', name: 'Photoshop' },
    { class:"brackets", image: '/coding.png', alt: 'Brackets', name: '(More to come!)' },
  ];

  return (
    <>
    <section id="skills" className="portfolio-comp skills-wrapper bg-white">
      <div className="cloudBorderWrap top">
        <img className="cloudBorderTop" src="/cloud-border.png" alt="Cloud" />
      </div>

      <div className="max-1280">

        <div className="header-wrap text-center">
          <h2 className="section-heading">Skills</h2>
        </div>

        <button className="desktop-only-jd" onClick={() => setShowScene(!showScene)}>
          {showScene ? "Hide Scene" : "Show Scene"}
        </button>

        {showScene && <div className="desktop-only-jd"><MatterJS width={dims.width} height={dims.height} /></div>}

        {!showScene &&
          <div className="skills-icons-wrapper desktop-only-jd" ref={targetRef}>
            {skillsData.map((data, index) => (
              <div key={index} className="skills-icon">
                <div className={`image-wrapper ${data.class}`}>
                  <img className="image" src={data.image} alt={data.alt} />
                </div>
                <p>{data.name}</p>
              </div>
            ))}
          </div>
        }

        <Slider {...settings} className="skills-icons-wrapper mobile-only-jd">
          {skillsData.map((data, index) => (
            <div key={index} className="skills-icon">
              <div className={`image-wrapper ${data.class}`}>
                <img className="image" src={data.image} alt={data.alt} />
              </div>
              <p>{data.name}</p>
            </div>
          ))}
        </Slider>

      </div>
    </section>

    <div className="" data-parallax="scroll" data-image-src="/background1.JPG"></div>
    </>
  )
};

export default SkillsMatter;