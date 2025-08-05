import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const phrases = ["TO DEVELOP.", "TO LEARN.", "A CHALLENGE.", "LAMP :)"];

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [textY, setTextY] = useState(isMobile ? 520 : 280);

  const scrollDistRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const textRef = useRef(null);
  const cloud1Ref = useRef(null);
  const svgRef = useRef(null);
  const heroWrapperRef = useRef(null);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
  // Scroll to top and fade in on mount
  useEffect(() => {
    // Start hidden (make sure in CSS .hero-wrapper opacity:0)
    if (heroWrapperRef.current) {
      gsap.set(heroWrapperRef.current, { opacity: 0, pointerEvents: 'none' });
    }

    // Scroll to top immediately
    window.scrollTo(0, 0);

    // After a tiny delay, refresh ScrollTrigger and fade in
    setTimeout(() => {
      ScrollTrigger.refresh();

      if (heroWrapperRef.current) {
        gsap.to(heroWrapperRef.current, {
          duration: 1,
          opacity: 1,
          pointerEvents: 'auto',
          ease: 'power1.out',
        });
      }
    }, 50);
  }, []);

  // Update isMobile and textY on resize, refresh ScrollTrigger
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setTextY(mobile ? 420 : 280);
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    if (charIndex <= currentPhrase.length) {
      const timeout = setTimeout(() => {
        setText(currentPhrase.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const wait = setTimeout(() => {
        setCharIndex(0);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 1500);
      return () => clearTimeout(wait);
    }
  }, [charIndex, phraseIndex]);

  // Update SVG viewBox based on isMobile
  // If cloud breaks on Chrome, uncomment
  // useEffect(() => {
  //   if (svgRef.current) {
  //     svgRef.current.setAttribute('viewBox', isMobile ? '0 0 1200 1800' : '0 0 1200 800');
  //   }
  // }, [isMobile]);

  // GSAP ScrollTrigger animation setup that reacts to isMobile
  useEffect(() => {
    const mm = gsap.matchMedia();
    const originX = 1200 / 2;
    const originY = isMobile ? 1200 / 2 : 800 / 2;
    const origin = `${originX}px ${originY}px`;

    const scaleDTMB = isMobile ? 2.5 : 1.5;

    if (!isSafari) {
  

    mm.add("(min-width: 769px)", () => {
      if (!layer1Ref.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollDistRef.current,
          start: 'top top',
          end: '80% 50%',
          scrub: 1,
          // markers: true
        }
      })
      .fromTo(textRef.current,
        {
          y: 270,
          scale: 1,
        },
        {
          y: 290,
          scale: 1.1,
        }, 0)
      .fromTo(layer3Ref.current,
        {
          y: 190,
          scale: scaleDTMB,
          transformOrigin: origin
        },
        {
          y: 150,
          scale: scaleDTMB,
          transformOrigin: origin
        }, 0)
      .fromTo(layer2Ref.current,
        {
          y: 730,
          scale: scaleDTMB,
          transformOrigin: origin
        },
        {
          y: 660,
          scale: scaleDTMB,
          transformOrigin: origin
        }, 0)
      .fromTo(layer1Ref.current,
        {
          y: 550,
          scale: scaleDTMB,
          transformOrigin: origin
        },
        {
          y: 460,
          scale: scaleDTMB,
          transformOrigin: origin
        }, 0)
      .fromTo(cloud1Ref.current,
        {
          y: 220,
          scale: 1.2,
          transformOrigin: origin,
          rotation: -10
        },
        {
          y: 30,
          scale: 1,
          transformOrigin: origin,
          rotation: 0
        }, 0)
      .fromTo(heroWrapperRef.current,
        {
          marginBottom: 0,
        },
        {
          marginBottom: -65,
        }, 0);

      return () => tl.kill();
    });

      mm.add("(max-width: 768px)", () => {
        if (!layer1Ref.current) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: scrollDistRef.current,
            start: 'top top',
            end: '80% 50%',
            scrub: 1,
            // markers: true
          }
        })
        .fromTo(textRef.current,
          {
            y: 430,
            scale: 1,
          },
          {
            y: 825,
            scale: 1.05,
          }, 0)
        .fromTo(layer3Ref.current,
          {
            y: 890,
            scale: scaleDTMB,
            transformOrigin: origin
          },
          {
            y: 1150,
            scale: scaleDTMB,
            transformOrigin: origin
          }, 0)
        .fromTo(layer2Ref.current,
          {
            y: 1850,
            scale: 2.5,
            transformOrigin: origin
          },
          {
            y: 2050,
            scale: 2.6,
            transformOrigin: origin
          }, 0)
        .fromTo(layer1Ref.current,
          {
            y: 1500,
            scale: 2.5,
            transformOrigin: origin
          },
          {
            y: 1750,
            scale: 2.65,
            transformOrigin: origin
          }, 0)
        .fromTo(cloud1Ref.current,
          {
            y: -300,
            x: 60,
            scale: 2.5,
            transformOrigin: origin,
          },
          {
            y: -290,
            scale: 2.7,
            x: 85,
            transformOrigin: origin
          }, 0)
        .fromTo(heroWrapperRef.current,
          {
            marginBottom: 0,
          },
          {
            marginBottom: -10,
          }, 0);
        return () => tl.kill();
      });
    }
    return () => mm.revert();
  }, [isMobile]);

  return (
    <div className="hero-wrapper" ref={heroWrapperRef}>
      <div className="scrollDist" ref={scrollDistRef}></div>

      {!isSafari && (
        
        <section className="hero-parallax" >

          <svg
            ref={svgRef}
            viewBox={isMobile ? '0 0 1200 1800' : '0 0 1200 800'}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="m">
                <g className="cloud1" ref={cloud1Ref}>
                  <rect fill="#fff" width="100%" height="100%" y="1" />
                  <image href="/cloudMask.jpg" width="100%" height="100%" />
                </g>
              </mask>
            </defs>

            <g ref={layer3Ref}>
              <image className="layer_3" href="/layer_3.webp" width="1200" />
            </g>

            <g ref={layer2Ref}>
              <image className="layer_2" href="/layer_2_2.webp" width="1200" />
            </g>

            <text ref={textRef} fill="#fff" textAnchor="middle" dominantBaseline="center" x="50%">
              I LOVE&nbsp;
              <tspan fill="#fff">{text}</tspan>
              {showCursor && <tspan fill="#808080">|</tspan>}
            </text>

            <g ref={layer1Ref}>
              <image className="layer_1" href="/layer_1_2.webp" width="1200" />
            </g>

            <g mask="url(#m)">
              <rect fill="#fff" width="100%" height="100%" />
            </g>
          </svg>

        </section>
      )}
      {isSafari && (
        <div className="hero-static-wrapper">
          <text fill="#fff" x="50%" y={textY} textAnchor="middle" dominantBaseline="center">
            I LOVE&nbsp;
            <tspan fill="#fff">{text}</tspan>
            {showCursor && <tspan fill="#808080">|</tspan>}
          </text>

          <picture> 
            <source media="(min-width:768px)" srcset="/hero-dt-safari.webp" /> 
            <img class="hero-img" alt="Mountain and landscape" src="/hero-mb-safari.webp" /> 
          </picture>

          <svg
            ref={svgRef}
            className='cloudSafari'
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            width= {isMobile ? '150%' : '110%'}
          >
            <defs>
              <mask id="m">
                <g className="cloud1" ref={cloud1Ref}>
                  <rect fill="#fff" width="100%" height="100%" y="1" />
                  <image href="/cloudMask.jpg" width="100%" height="100%" />
                </g>
              </mask>
            </defs>

            <g mask="url(#m)">
              <rect fill="#fff" width="100%" height="100%" />
            </g>
          </svg>

        </div>
      )}

    </div>
  );
};

export default Hero;
