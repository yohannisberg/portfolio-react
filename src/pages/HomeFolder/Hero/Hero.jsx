import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const phrases = ["TO DEVELOP.", "TO LEARN.","A CHALLENGE.", "LAMP :)" ];

const Hero = () => {
  const scrollDistRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const cloud1Ref = useRef(null);

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // ⌨️ Typewriter logic
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex <= currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      // Wait and go to next phrase
      const wait = setTimeout(() => {
        setCharIndex(0);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 1500);
      return () => clearTimeout(wait);
    }
  }, [charIndex, phraseIndex]);

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
    .fromTo(layer1Ref.current, { y: 0 }, { y: -300 }, 0)
    .fromTo(cloud1Ref.current, { y: 0 }, { y: -800 }, 0);
  }, []);


  return (
    <div className="hero-wrapper">
      <div className="scrollDist" ref={scrollDistRef}></div>
      <section className="hero-parallax">
        <svg 
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="m">
              <g className="cloud1" ref={cloud1Ref} >
                <rect fill="#fff" width="100%" height="100%"/>
                <image href="../../../public/HeroImages/cloudMask.jpg" width="100%" height="100%"/>
              </g>
            </mask>
          </defs>
          
          <g transform="translate(600, 400) scale(1.5) translate(-600, -400)">
            <image className="layer_3" ref={layer3Ref} href="../../../public/HeroImages/layer_3.png" width="1200"/>
          </g>

          <g transform="translate(600, 400) scale(1.5) translate(-600, -400)">
            <image className="layer_2" ref={layer2Ref} href="../../../public/HeroImages/layer_2.png" width="1200" />
          </g>
        

           <text fill="#fff" x="50%" y="320" textAnchor="middle" dominantBaseline="middle">I LOVE&nbsp; 
            <tspan fill="#fff">{text}</tspan>{showCursor && <tspan fill="#808080">|</tspan>}
          </text>

          <g transform="translate(600, 400) scale(1.5) translate(-600, -400)">
          <image className="layer_1" ref={layer1Ref} href=".../../../public/HeroImages/layer_1_2.png" width="1200" /> 
          </g>

          {/* <g transform="translate(600, 400) scale(1.5)">
            <image
              className="layer_1"
              ref={layer1Ref}
              href=".../../../public/HeroImages/layer_1_2.png"
              x="-600"
              y="-400"
              width="1200"
              height="800"
            />
          </g> */}

          
           <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text className="skills" x="50%" y="320" textAnchor="middle" dominantBaseline="middle" fill="#000000">SKILLS</text>
          </g>
          
        </svg>
      </section>
    </div>
  );
};

export default Hero;
