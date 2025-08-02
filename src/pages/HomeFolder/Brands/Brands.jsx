import './Brands.css'

const Brands = () => {

  const brandsData = [
    { class:"disney", image: '/disney.png', alt: 'Disney' },
    { class:"universal", image: '/universal.svg', alt: 'Universal' },
    { class:"paramount", image: '/paramount.png', alt: 'Paramount' },
    { class:"mgm", image: '/mgm.svg', alt: 'MGM' },
    { class:"lionsgate", image: '/lionsgate.png', alt: 'Lionsgate' },
    { class:"peanuts", image: '/peanuts.png', alt: 'Peanuts' },
    { class:"hk", image: '/hello-kitty.png', alt: 'Hello Kitty' },
    { class:"pusheen", image: '/pusheen.png', alt: 'Pusheen' },
    { class:"squishmallows", image: '/squishmallows.png', alt: 'Squishmallows' },
    { class:"caboodles", image: '/caboodles.png', alt: 'Caboodles' },
    { class:"harper", image: '/harper-collins.svg', alt: 'Harper Collins' },
    { class:"pureflix", image: '/pureflix.svg', alt: 'PureFlix' },
    { class:"zondervan", image: '/zondervan.svg', alt: 'Zondervan' },
    { class:"jg", image: '/juangabriel.svg', alt: 'Juan Gabriel' },

  ];
  
  return (
    <section className="portfolio-comp brands-wrapper">
      <div className="max-1280">
          <p className="subcopy">With over six years at a global brand and two years at creative agencies, I’ve helped craft user-centered digital experiences across platforms— contributing to campaigns for the following&nbsp;brands:</p>

        <div className="brand-logos-wrapper">
          <div className="brand-wrap">
            {brandsData.map((data, index) => (
              <div key={index} className={`image-wrapper ${data.class}`}>
                <img src={data.image} alt={data.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
