import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Skills.css'

const Skills = () => {

  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    centerPadding:0,
  };

  const skillsData = [
    { class:"react", image: '/React-icon.png', alt: 'React Logo', name: 'React' },
    { class:"js", image: '/javascript.svg', alt: 'JavaScript Logo', name: 'JavaScript' },
    { class:"html", image: '/html5-color.svg', alt: 'HTML5 Logo', name: 'HTML5' },
    { class:"css", image: '/css3-color.svg', alt: 'CSS3 Logo', name: 'CSS3' },
    { class:"figma", image: '/Figma-logo.svg', alt: 'Figma Logo', name: 'Figma'},
    { class:"ajs", image: '/angular-color.svg', alt: 'AngularJS Logo', name: 'AngularJS' },
    { class:"npm", image: '/Npm-logo.svg', alt: 'NPM Logo', name: 'NPM' },
    { class:"node", image: '/nodejs.svg', alt: 'Node.JS Logo', name: 'Node.JS' },
    { class:"git", image: '/git.svg', alt: 'Git Logo', name: 'Git' },
    { class:"sql", image: '/Postgres.svg', alt: 'SQL Logo', name: 'SQL' },
    { class:"express", image: '/express.png', alt: 'Express.JS Logo', name: 'Express.JS' },
    { class:"gulp", image: '/gulp.svg', alt: 'Gulp Logo', name: 'Gulp' },
    { class:"php", image: '/PHP-logo.svg', alt: 'PHP Logo', name: 'PHP' },
    { class:"jquery", image: '/jquery-icon.png', alt: 'jQuery Logo', name: 'jQuery' },
    { class:"wp", image: '/wordpress.svg', alt: 'Wordpress Logo', name: 'Wordpress' },
    { class:"sass", image: '/sass2.png', alt: 'Sass Logo', name: 'Sass' },
    { class:"bootstrap", image: '/Boostrap_logo.svg', alt: 'Bootstrap Logo', name: 'Bootstrap' },
    { class:"gwb", image: '/google-web-designer.svg', alt: 'Google Web Designer', name: 'GWD'},
    { class:"photoshop", image: '/pscs6.png', alt: 'Adobe Photoshop Logo', name: 'Photoshop' },
    { class:"brackets", image: '/coding.png', alt: 'Brackets', name: '(More to come!)' },
  ];

  return (
    <>
      <section id="about" className="portfolio-comp skills-wrapper bg-white">
        <img className="cloudBorder1" src="/cloud-border.png" alt="Cloud" />

        <div className="max-1280">

          <div className="header-wrap text-center">
            <h2 className="section-heading">Skills</h2>
          </div>

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

          <div className="skills-icons-wrapper desktop-only-jd">
            {skillsData.map((data, index) => (
              <div key={index} className="skills-icon">
                <div className={`image-wrapper ${data.class}`}>
                  <img className="image" src={data.image} alt={data.alt} />
                </div>
                <p>{data.name}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <div className="" data-parallax="scroll" data-image-src="/background1.JPG"></div>
    </>
  )
};

export default Skills;