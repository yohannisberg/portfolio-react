import './Likes.css'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { Draggable } from 'gsap/Draggable';
// Register plugins
gsap.registerPlugin(MorphSVGPlugin, Draggable);

import Lightbulb from '../Lightbulb/Lightbulb';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { faHiking } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Likes = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const AUDIO = {
      CLICK: new Audio('/click.mp3'),
    };

    const STATE = { ON: true };
    const CORD_DURATION = .1;

    const container = containerRef.current;

    const CORDS = container.querySelectorAll('.toggle-scene__cord');
    const HIT = container.querySelector('.toggle-scene__hit-spot');
    const DUMMY = container.querySelector('.toggle-scene__dummy-cord');
    const DUMMY_CORD = container.querySelector('.toggle-scene__dummy-cord line');
    const PROXY = document.createElement('div');

    let startX, startY;

    const ENDX = DUMMY_CORD.getAttribute('x2');
    const ENDY = DUMMY_CORD.getAttribute('y2');

    let dayOpacity = 1;
    let nightOpacity = 0;

    let blackWhite = 1;

    const RESET = () => {
      gsap.set(PROXY, { x: ENDX, y: ENDY });
    };

    RESET();

    const CORD_TL = gsap.timeline({
      paused: true,
      onStart: () => {
        STATE.ON = !STATE.ON;
        gsap.set(document.documentElement, { '--on': STATE.ON ? 1 : 0 });

        dayOpacity = !dayOpacity;
        nightOpacity = !nightOpacity;
        gsap.set(document.documentElement, { '--dayOpacity': dayOpacity ? 1 : 0 });
        gsap.set(document.documentElement, { '--nightOpacity': nightOpacity ? 1 : 0 });
        
        blackWhite = !blackWhite;
        gsap.set(document.documentElement, { '--blackWhite': blackWhite ? '#000000' : '#ffffff' });


        gsap.set([DUMMY, HIT], { display: 'none' });
        gsap.set(CORDS[0], { display: 'block' });
        AUDIO.CLICK.play();
      },
      onComplete: () => {
        gsap.set([DUMMY, HIT], { display: 'block' });
        gsap.set(CORDS[0], { display: 'none' });
        RESET();
      },
    });

    for (let i = 1; i < CORDS.length; i++) {
      CORD_TL.add(
        gsap.to(CORDS[0], {
          morphSVG: CORDS[i],
          duration: CORD_DURATION,
          repeat: 1,
          yoyo: true,
        })
      );
    }

    Draggable.create(PROXY, {
      trigger: HIT,
      type: 'x,y',
      onPress: (e) => {
        startX = e.x;
        startY = e.y;
      },
      onDrag() {
        gsap.set(DUMMY_CORD, {
          attr: {
            x2: this.x,
            y2: this.y,
          },
        });
      },
      onRelease(e) {
        const DISTX = Math.abs(e.x - startX);
        const DISTY = Math.abs(e.y - startY);
        const TRAVELLED = Math.sqrt(DISTX * DISTX + DISTY * DISTY);
        gsap.to(DUMMY_CORD, {
          attr: { x2: ENDX, y2: ENDY },
          duration: CORD_DURATION,
          onComplete: () => {
            if (TRAVELLED > 50) {
              CORD_TL.restart();
            } else {
              RESET();
            }
          },
        });
      },
    });
  }, []);

  return (
    
    <section className="portfolio-comp about-lightbulb" ref={containerRef}>
      <div className="max-1280">
        <div className="header-wrap text-center">

          <Lightbulb />

          <h2 className="section-heading">Things I&nbsp;Like</h2>

          <div className="pull-arrow-wrapper">
            <p>PULL</p>
            <img className="arrow day" src="/arrow-black.png" alt="Arrow" />
            <img className="arrow night" src="/arrow-white.png" alt="Arrow" />
          </div>

        </div>


        <div className="about-cat-wrapper">
          <div className="about-day-wrapper">
            <div className="skill-wrap">
              <FontAwesomeIcon icon={faCode} />
              <p className="title">Coding</p>
              <p className="subcopy">It's deeply rewarding to creatively solve problems and turn ideas into&nbsp;experiences.</p>
            </div>

            <div className="skill-wrap">
              <FontAwesomeIcon icon={faUtensils} />
              <p className="title">Cooking</p>
              <p className="subcopy">Experimenting with flavors is a&nbsp;little like debugging, just&nbsp;tastier.</p>
            </div>

            <div className="skill-wrap">
              <FontAwesomeIcon icon={faHiking} />
              <p className="title">Hiking</p>
              <p className="subcopy">There’s nothing like fresh&nbsp;air and a good trail to reset and&nbsp;recharge.</p>
            </div>

            <div className="skill-wrap">
              <FontAwesomeIcon icon={faMusic} />
              <p className="title">Music</p>
              <p className="subcopy">I enjoy making music, but don't worry, you won't&nbsp;catch me singing to&nbsp;myself.</p>
            </div>

          </div>

          <div className="about-night-wrapper">

            <p className="neon" data-text="U">AF<span className="flicker-slow">T</span>ER <br />DA<span className="flicker-fast">R</span>K</p>

            <div className="skill-wrap">
              <FontAwesomeIcon icon={faBook} />
              <p className="title">Reading</p>
              <p className="subcopy">Lately before bed, I've been journeying through Middle&nbsp;Earth.</p>
            </div>

            <div className="skill-wrap">
              <FontAwesomeIcon icon={faFilm} />

              <p className="title">Watching Movies</p>
              <p className="subcopy">Love a good movie after work. I&nbsp;have a soft spot for old noir&nbsp;films.</p>
            </div>

            <div className="skill-wrap">
              <FontAwesomeIcon icon={faBed} />
              <p className="title">Sleeping</p>
              <p className="subcopy">"(A) man needs his seven hours, keeps your mind sharp." - Paulie&nbsp;Walnuts</p>
            </div>

            <div className="skill-wrap">
              <div className="mTWrapper">
                <img src="/mooseTracks.png" />
              </div>
              <p className="title">Moose Tracks</p>
              <p className="subcopy">There's nothing better than Moose&nbsp;Tracks Ice&nbsp;Cream.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
};

export default Likes;