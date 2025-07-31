import './Perks.css';
import { Button } from '../Button';

export function Perks() {
  return (
    <>
      <section className="cclub-component table-component dark-blue-background">
        <div className="white-background max-1300">

          <div className="headline-wrap">
            <h2>Let’s be Besties</h2>
            <p>Get even more Rewards, <br className="mobile-only" />exclusive surprises, and all the <br className="mobile-only" />perks <br className="desktop-only" />you can dream of when <br className="mobile-only" />you reach Bestie status!</p>
          </div>

          <div className="grid-wrapper">
            <div className="table">
              <div className="table-row">
                <p className="table-head">Perks</p>
                <p className="table-head"><img className="lazyload" src="/cupcake.png" alt="Cupcake" /><br />FRIEND <br /><span>free to join</span></p>
                <p className="table-head"><img className="lazyload" src="/cake.png" alt="Cake"/><br/>BESTIE <br/><span>spend $100/yr</span></p>
              </div>

              <div className="table-row">
                <p className="table-cell">POINTS PER PURCHASE</p>
                <p className="table-cell">50pts</p>
                <p className="table-cell">75pts</p>
              </div>

              <div className="table-row">
                <p className="table-cell">REWARDS</p>
                <p className="table-cell">$5/100pts</p>
                <p className="table-cell">$5/100pts</p>
              </div>				  

              <div className="table-row">
                <p className="table-cell">BIRTHDAY COUPON</p>
                <p className="table-cell">$5 OFF</p>
                <p className="table-cell">$10 OFF</p>
              </div>

              <div className="table-row">
                <p className="table-cell">FREE SHIPPING</p>
                <p className="table-cell">$25+</p>
                <p className="table-cell">ANYTHING <br/><span>no min</span></p>
              </div>	

              <div className="table-row">
                <p className="table-cell">ANYTIME REWARD</p>
                <p className="table-cell">$5</p>
                <p className="table-cell">$10</p>
              </div>

              <div className="table-row">
                <p className="table-cell">FREE GIFT</p>
                <p className="table-cell"></p>
                <p className="table-cell"><img className="check" src="/check.png" alt="Check"/></p>
              </div>	

              <div className="table-row">
                <p className="table-cell">PIERCING PERKS</p>
                <p className="table-cell">+30% OFF <br/><span>everything else</span></p>
                <p className="table-cell">+30% OFF <br/><span>everything else</span></p>
              </div>

              <div className="table-row">
                <p className="table-cell">MEMBERS ONLY OFFERS</p>
                <p className="table-cell"><img className="check" src="/check.png" alt="Check"/></p>
                <p className="table-cell"><img className="check" src="/check.png" alt="Check"/></p>
              </div>	

              <div className="table-row">
                <p className="table-cell">EARLY ACCESS TO NEW PRODUCTS</p>
                <p className="table-cell"><img className="check" src="/check.png" alt="Check"/></p>
                <p className="table-cell"><img className="check" src="/check.png" alt="Check"/></p>
              </div>	

            </div>
          </div>

          <div className="cta-wrapper">
            <Button className="trackCTA cta" dataCtainfo="HP CLUXE CTA" name="JOIN NOW" />
          </div>

        </div>
      </section>


    </>
  )
}