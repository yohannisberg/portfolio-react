import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlideCustomPrevArrow } from './SlideCustomPrevArrow';
import { SlideCustomNextArrow } from './SlideCustomNextArrow';

export function SlideWaysToEarn() {

    var settings = {
    autoplay: false,
    arrows:true,
    dots:false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    centerPadding:0,
    prevArrow: <SlideCustomPrevArrow/ >,
    nextArrow: <SlideCustomNextArrow/ >
  };

  const slideData = [
    { topTitle: 'Share your', bottomTitle: 'address', image: '/ADDRESS.png', alt: 'Envelope', points: '15' },
    { topTitle: 'Share', bottomTitle: 'your bday', image: '/PARTYHAT.png', alt: 'Birthday', points: '15' },
    { topTitle: 'Get', bottomTitle: 'pierced', image: '/CATEARRINGS.png', alt: 'Cat earrings', points: '100' },
    { topTitle: 'Make a', bottomTitle: 'purchase', image: '/SHOPPINGBAG.png', alt: 'Shopping bag', points: '50' }
  ];

  return (
    <Slider {...settings} className="point-grid">
      {slideData.map((data, index) => (
        <div key={index} className="point-item">
          <p className="title">{data.topTitle} <br />{data.bottomTitle}</p>

          <div className="img-wrapper">
            <img className="kit" src={data.image} alt={data.alt} />
          </div>

          <div className="points-wrapper">
            <p>{data.points}</p>
            <p>POINTS</p>
          </div>
        </div>
      ))}
    </Slider>
  );
}
