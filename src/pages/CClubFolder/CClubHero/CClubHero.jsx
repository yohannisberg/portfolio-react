import './CClubHero.css';
import { Button } from '../Button';


export const CClubHero = () => {
  return (
    <section className="cclub-component hero-component dark-blue-background">
      <div className="max-1300">

        <img className="hero-top-img" src="/hero-top-mb.png" alt="C.Club Animations" />

        <div className="text-wrapper">
          <h2 className="white">Welcome to <img src="/CCLUBlogo.png" alt="C.Club"/></h2>
          <p className="white">C•CLUB is where you get <br className="mobile-only"/>rewarded just <br className="desktop-only"/>for being you. <br className="mobile-only"/>It’s true! Sign up for FREE <br className="mobile-only"/>to unlock <br className="desktop-only"/>exclusive Rewards <br className="mobile-only"/>and endless perks.</p>

          <Button className="trackCTA cta" dataCtainfo="HP CLUXE CTA" name="Join Now" />
          <Button className="trackCTA cta-no-button" dataCtainfo="HP CLUXE CTA" name="SIGN IN" />
        </div>
        
        <picture>
          <source media="(min-width:768px)" srcSet="/welcome-animation.gif"/>
          <img className="hero-img" src="/welcome-animation-mob.gif" alt="C.Club Animations"/>
        </picture>
      </div>
    </section>
  )
};