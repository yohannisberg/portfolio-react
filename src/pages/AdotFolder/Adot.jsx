import React, { useEffect, useRef, useState } from 'react';
import "./Adot.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Adot = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const goldStarIndicator = useRef(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      "#plane-animate",
      { opacity: 1, y: -200, x: -200 },  // start values
      { duration: 0.5, y: 72, x: 276, delay: 1, ease: "power1.out" } // end values
    );

    gsap.to("#cloud1", {
      duration: 5,
      xPercent: -2,
      ease: "power1.out",
      repeat: -1,
      yoyo: true,
    });
    gsap.to("#cloud2", {
      duration: 5,
      xPercent: 2,
      ease: "power1.out",
      repeat: -1,
      yoyo: true,
    });
    gsap.to("#cloud3", {
      duration: 5,
      xPercent: -2,
      ease: "power1.out",
      repeat: -1,
      yoyo: true,
    });

    gsap.to("#desktop-star", {
      scrollTrigger: {
        trigger: goldStarIndicator.current,
        start: "center center", // static scroller
        end: "+=350",
        scrub: true,
        markers: false
      },
      top: "800px",
      opacity: 0,
      scale: 0.2,
      duration: 1.5,
    });

    gsap.to("#licGoldStar", {
      scrollTrigger: {
        trigger: "#licenseIndic",
        start: "top center",
      },
      opacity: 1,
      duration: 4,
    });
  }, []);

  const faqData = [
    {
      q: "Am I required to obtain a Travel ID?",
      a: "No. Arizona residents have an option to purchase a Travel ID.",
    },
    {
      q: "Can I use my current Arizona driver license or identification card to board an aircraft?",
      a: "Yes. The U.S. Department of Homeland Security has said IDs from states offering credentials complying with the federal REAL ID Act will be accepted until Oct. 1, 2020.",
    },
    {
      q: "Can I use my current Arizona driver license or identification card to enter restricted federal buildings and military bases?",
      a: "Yes. The U.S. Department of Homeland Security has said IDs from states offering credentials complying with the federal REAL ID Act will be accepted until Oct. 1, 2020.",
    },
    {
      q: "Will I have to go to an MVD office or an Authorized Third Party in order to get a Travel ID?",
      a: (
        <>
          Yes. Applicants must apply in person, but fill out the{" "}
          <a href="https://apps.azdot.gov/mvd/Application/ApplicationForm.aspx" target="_blank" rel="noreferrer">
            application
          </a>{" "}
          before visiting an office.
        </>
      ),
    },
    {
      q: "How much will a Travel ID cost?",
      a: "The cost of a Travel ID is $25 (initial application and renewal).",
    },
    {
      q: "Will the Travel ID contain a radio frequency identification (RFID) chip?",
      a: "No, state law prohibits the Travel ID from containing a RFID chip.",
    },
    {
      q: "How long will my Travel ID be valid?",
      a: "Federal requirements require the Travel ID to be valid for a maximum of eight years. Exceptions apply, including drivers age 65 or older whose licenses are currently valid for five years. For non-U.S. citizens who have authorized legal presence the expiration date will be based off the immigration documents presented, not to exceed eight years.",
    },
    {
      q: "What documents do I need to apply for a Travel ID?",
      a: (
        <>
          You will need one document to establish birth or legal presence; one document to verify your Social Security number; and two documents to establish residency in Arizona.
          <br />
          <a
            href="https://www.azdot.gov/docs/default-source/mvd-forms-pubs/40-5144.pdf?sfvrsn=8"
            target="_blank"
            rel="noreferrer"
          >
            Arizona Travel ID Identification Requirements, 40-5144
          </a>
        </>
      ),
    },
    {
      q: 'I had reason to get a new Arizona driver license or ID and decided against getting the Travel ID. My ID says “Not for federal identification.” Does that mean I can’t board an aircraft or enter restricted federal buildings and military bases?',
      a: 'The U.S. Department of Homeland Security has said IDs from states offering credentials complying with the federal REAL ID Act will be accepted until Oct. 1, 2020. Even if a driver license or ID says “NOT FOR FEDERAL IDENTIFICATION," DHS has said it will be accepted through that date.',
    },
  ];

  return (
    <div className="adot-wrapper">
      {/* Hero */}
      <div className="goldstar-nav-wrapper">
        <div className="scrollGoldStarDist" ref={goldStarIndicator}></div>
        <div className="nav-bar-wrapper">
          <img id="adot" src="ADOTlogo.svg" alt="Arizona DOT logo" />
          <ul>
            <li onClick={() => scrollToId("id-about")}>About</li>
            <li onClick={() => scrollToId("id-steps")}>Steps</li>
            <li onClick={() => scrollToId("id-req")}>Requirements</li>
            <li onClick={() => scrollToId("id-faq")}>FAQ</li>
          </ul>
        </div>

        <div className="elements-wrapper">
          <img id="desktop-star" className="goldStar" src="goldStar.png" alt="Gold star" />
          <img id="plane-animate" className="plane" src="paperPlane.png" alt="Paper plane" />
          <div className="text-wrapper">
            <div className="title">
              <img className="goldStarMobile" src="goldStar.png" alt="Gold star mobile" />
              Get the Gold Star or your ID won't fly.
            </div>
            <div className="italic">Get your Travel ID before October 2020.</div>
            <p>
              The Travel ID is a nationwide TSA security change starting October 1, 2020, requiring a Travel ID or
              another form of identification for domestic&nbsp;travel.
            </p>
            <button onClick={() => scrollToId("id-steps")}>Get Your Travel Id</button>
          </div>
        </div>
        <img id="cloud1" className="cloud cloud1" src="cloud1Filled.png" alt="" />
        <img id="cloud2" className="cloud cloud2" src="cloud2Filled.png" alt="" />
        <img id="cloud3" className="cloud cloud3" src="cloud3.png" alt="" />
      </div>

      {/* About */}
      <div className="travel-id-wrapper" id="id-about">
        <div className="elements-wrapper">
          <div className="text-wrapper">
            <div className="title">What is the Arizona Travel ID?</div>
            <p>
              Compliant with the federal REAL ID Act of 2005, the Arizona Travel ID with the embedded gold star is the
              credential that adds proof of identification to ensure the license or ID meets strict federal
              requirements. It is available as both a driver license and identification card.
              <br />
              <br />
              Note: Rules for international travel are unchanged, and a valid passport or equivalent will be required
              to travel outside the United States.
            </p>
            <button>
              <a href="https://www.dhs.gov/real-id-public-faqs" target="_blank" rel="noreferrer">
                Learn more about the real id act &gt;
              </a>
            </button>
          </div>
          <div className="license-wrapper">
            <div id="licenseIndic"></div>
            <img id="lic1" className="license" src="license-nostar.png" alt="License without star" />
            <img id="licGoldStar" src="goldStar.png" alt="Gold star" />
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="how-to-wrapper" id="id-steps">
        <div className="title">How to get your Arizona Travel ID</div>
        <div className="italic">In 2 easy steps!</div>
        <div className="columns">
          <div className="column">
            <div className="number-wrap">
              <p>1</p>
            </div>
            <div className="content-wrap">
              <img src="id1.png" alt="Fill out application" />
              <div className="text">Fill out your application online ahead of time</div>
              <a href="https://apps.azdot.gov/mvd/Application/ApplicationForm.aspx" target="_blank" rel="noreferrer">
                <button>Apply</button>
              </a>
            </div>
          </div>
          <div className="column">
            <div className="number-wrap">
              <p>2</p>
            </div>
            <div className="content-wrap">
              <img src="id2.png" alt="Make appointment" />
              <div className="text">Make an appointment</div>
              <a
                href="https://servicearizona.com/webapp/moa/identifyUser/TravelId"
                target="_blank"
                rel="noreferrer"
              >
                <button>Schedule at MVD</button>
              </a>
              <button className="under-button">
                <a
                  href="https://www.azdot.gov/motor-vehicles/driver-services/ATP-driver-license-locations"
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule at authorized Third Party License Provider
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Document Requirements */}
      <div className="doc-req-wrapper" id="id-req">
        <div className="text-wrap">
          <div className="title">Travel ID Document Requirements</div>
          <p>
            When applying for a Travel ID, you must bring documents from each of these three categories of
            identification documents. All documents must be originals or certified copies in English, certified by the
            issuing agency.
          </p>
        </div>
        <div className="columns">
          <div className="column">
            <div className="content-wrap">
              <img className="doc" src="doc1.png" alt="Proof of Identity" />
              <div className="text">Proof of Identity</div>
              <div className="doc-accept">Documents accepted:</div>
              <ul>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  Birth certificate
                </li>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  U.S. Passport
                </li>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  Passport card
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="content-wrap">
              <img className="doc" src="doc2.png" alt="Proof of Social Security" />
              <div className="text">Proof of Social Security Number</div>
              <div className="doc-accept">Documents accepted:</div>
              <ul>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  Social Security card
                </li>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  W-2 form
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="content-wrap">
              <img className="doc" src="doc3.png" alt="Proof of Residency" />
              <div className="text">Proof of Arizona Residency</div>
              <div className="doc-accept">Documents accepted:</div>
              <ul>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  Utility bills
                </li>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  Credit card statements
                </li>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  Bank statements
                </li>
                <li>
                  <img className="check" src="Checkmark.png" alt="" />
                  Insurance policies
                </li>
                <li style={{ color: "#F15348", fontSize: "15px", textAlign: "center" }}>
                  You’ll need 2 of these!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="accordion-wrapper" id="id-faq">
        <div className="container-accordion">
          <div className="title">Frequently Asked Questions</div>
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                className={`accordion ${openIndex === index ? "is-open" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                {item.q}
              </button>
              <div className="accordion-content" style={{ maxHeight: openIndex === index ? "300px" : "0" }}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer-wrapper">
        <div className="elements-wrapper">
          <div className="left-text-wrapper">
            <div className="title">Resources</div>
            <ul>
              <li>
                <a href="https://www.dhs.gov/real-id-public-faqs" target="_blank" rel="noreferrer">
                  Department of Homeland Security REAL ID Act
                </a>
              </li>
              <li>
                <a href="https://servicearizona.com/officeAppointments?popularclick" target="_blank" rel="noreferrer">
                  Make an MVD Appointment
                </a>
              </li>
              <li>
                <a
                  href="https://www.azdot.gov/motor-vehicles/driver-services/ATP-driver-license-locations"
                  target="_blank"
                  rel="noreferrer"
                >
                  Third Party Driver License Locations
                </a>
              </li>
            </ul>
          </div>
          <div className="right-text-wrapper">
            <div className="icon-wrapper">
              <a href="https://www.facebook.com/AZDOT/" target="_blank" rel="noreferrer">
                <img src="facebook.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com/ArizonaDOT" target="_blank" rel="noreferrer">
                <img src="twitter.png" alt="Twitter" />
              </a>
            </div>
            <div className="copyright">© Arizona Department of Transportation | All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
