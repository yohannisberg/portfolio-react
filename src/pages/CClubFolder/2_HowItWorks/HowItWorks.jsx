import './HowItWorks.css';
import GlassesAnimation from '../GlassesAnimation';
import PostStepAnimation from '../PostStepAnimation';
import { Button } from '../Button';


export function HowItWorks() {
  return (
    <>
      <section className="cclub-component-full thin-text-component">
        <div className="marquee-section">
          <div className="marquee-div">
            <p className="black marquee"><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span> <span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span>
            </p>
          </div>

          <div className="marquee-div-2">
            <p className="black marquee">
              <span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span><span>HOW IT WORKS</span>
            </p>
          </div>

        </div>
      </section>


      <section className="cclub-component steps-wrapper light-blue-background">
        <div className="max-1300">

          <div className="step-1">
            <div className="headline-wrap">
              <div className="number-wrapper">
                <h2 className="number">1</h2>
              </div>
              <h2>Sign up</h2>
              <p>All the rumors are true. <br/>It’s totally <b>FREE</b> & easy to join!</p>
              <Button className="trackCTA cta" dataCtainfo="HP CLUXE CTA" name="OKAY I'M IN" />
            </div>

            <img className="pencil-left" src="/HEARTleft.png" alt="Pencil"/>

            <img className="pencil-right" src="/HEARTright.png" alt="Pencil"/>
          </div>

          <div className="step-2">
            <div className="headline-wrap">
              <div className="number-wrapper">
                <h2 className="number">2</h2>
              </div>
              <h2>Earn on <br/>every purchase</h2>
              <p>Get a <b>💸$5 REWARD💸</b> <br className="mobile-only"/>every time you <br className="desktop-only"/>shop twice, <br className="mobile-only"/>plus so much more!</p>

              <GlassesAnimation/>

            </div>
          </div>


          <div className="step-3">
            <div className="headline-wrap">
              <div className="number-wrapper">
                <h2 className="number">3</h2>
              </div>
              <h2>Enjoy the perks</h2>
              <p>Use your Rewards <br className="mobile-only"/>for major <br className="desktop-only"/>discounts on all <br className="mobile-only"/>the things you love.</p>
              <Button className="trackCTA cta" dataCtainfo="HP CLUXE CTA" name="JOIN NOW" />
              
              <picture>
                <source media="(min-width:768px)" srcSet="/perks-animation.gif"/>
                <img className="step-3-img" src="/perks-animation-mob.gif" alt="Exclusive Deals - Free Shipping - Birthday Treats"/>
              </picture>
            </div>
          </div>

        </div>

        <div className="post-step">

          <PostStepAnimation />

          <div className="cta-wrapper">
            <Button className="trackCTA cta" dataCtainfo="HP CLUXE CTA" name="JOIN NOW" />
          </div>
        </div>

      </section>
    </>
  )
}