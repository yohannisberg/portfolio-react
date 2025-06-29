import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Hero = () => {
  const scrollDistRef = useRef(null);
  const arrowBtnRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const cloud1Ref = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.timeline({
      scrollTrigger:{
        trigger:scrollDistRef.current,
        start:'0 0',
        end:'100% 100%',
        scrub:1
      },
    })
    .fromTo(layer3Ref.current, { y: -182 }, { y: -780 }, 0)
    .fromTo(layer2Ref.current, { y: 550 }, { y: -100 }, 0)
    .fromTo(layer1Ref.current, { y: 400 }, { y: -300 }, 0)
    .fromTo(cloud1Ref.current, { y: 350 }, { y: -800 }, 0);

    const handleMouseEnter = () => {
      gsap.to(arrowRef.current, { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
    };

    const handleMouseLeave = () => {
      gsap.to(arrowRef.current, { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
    };

    const handleClick = () => {
      gsap.to(window, { scrollTo: window.innerHeight, duration: 1.5, ease: 'power1.inOut' });
    };
  
    const arrowBtn = arrowBtnRef.current;
    arrowBtn.addEventListener('mouseenter', handleMouseEnter);
    arrowBtn.addEventListener('mouseleave', handleMouseLeave);
    arrowBtn.addEventListener('click', handleClick);

    return () => {
      arrowBtn.removeEventListener('mouseenter', handleMouseEnter);
      arrowBtn.removeEventListener('mouseleave', handleMouseLeave);
      arrowBtn.removeEventListener('click', handleClick);
    };
  }, []);


  return (
    <div className="hero-wrapper">
      <div className="scrollDist" ref={scrollDistRef}></div>
      <section className="hero-parallax">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <defs>
            <mask id="m">
              <g className="cloud1" ref={cloud1Ref}>
                <rect fill="#fff" width="100%" height="801" y="799" />
                <image href="../../../public/HeroImages/cloudMask.jpg" width="1200" height="800"/>
              </g>
            </mask>
          </defs>

          <image className="layer_3" ref={layer3Ref} href="../../../public/HeroImages/layer_3.png" />
          <image className="layer_2" ref={layer2Ref} href="../../../public/HeroImages/layer_2.png" />
          
          <text fill="#fff" x="350" y="200">JOHN D'AGOSTINO</text>
          <image className="layer_1" ref={layer1Ref} href=".../../../public/HeroImages/layer_1_2.png" />
          <polyline className="arrow" ref={arrowRef} fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />
          
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />      
            <text x="350" y="200" fill="#162a43">HOT</text>
          </g>
          
          <rect ref={arrowBtnRef} width="100" height="100" opacity="0" x="550" y="220"/>
        </svg>
      </section>
    </div>
  );
};

export default Hero;
