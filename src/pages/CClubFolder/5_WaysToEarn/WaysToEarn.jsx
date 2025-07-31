import './WaysToEarn.css';
import { SlideWaysToEarn } from '../SlideWaysToEarn';
import { Button } from '../Button';

export function WaysToEarn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    
    <>
    <section className="cclub-component slider-component light-blue-background">

      <div className="slider-top max-1300">
        <div className="headline-wrap">
          <h2>So many <br/>ways to earn.</h2>
          <p>Collect points every time <br className="mobile-only"/>you shop, <br className="desktop-only"/>plus even more <br className="mobile-only"/><b>FREE</b> ways to earn!</p>
        </div>

        <div className="image-wrapper">
          <picture>
            <img className="lazyload hero-img" src="/yes-animation-desktop.gif" alt="C.Club Animations"/>
          </picture>
        </div>
      </div>

      <div className="point-grid-component max-1300">
        <SlideWaysToEarn />
      </div>
      
      <div className="cta-wrapper">
        <Button className="trackCTA cta" dataCtainfo="HP CLUXE CTA" name="JOIN NOW" />
      </div>

    </section>

    <section className="cclub-component faq-component">

      <div className="slider-top max-1300">
        <div className="headline-wrap">
          <h2>Got questions?</h2>
          <p>We’ve got answers. <br/>
            <Button className="trackCTA cta-no-button" dataCtainfo="HP CLUXE CTA" name="View FAQs" />
          </p>
        </div>

        <div className="bottom-wrap">
          <p>
            <Button className="trackCTA cta-no-button" dataCtainfo="HP CLUXE CTA" name="Terms & Conditions" />
          </p>

          <div className="arrow-wrap">
            <img className="arrow" src="/Arrow4.png" onClick={scrollToTop}/>
          </div>
        </div>

      </div>
    </section>

    </>
  )
}