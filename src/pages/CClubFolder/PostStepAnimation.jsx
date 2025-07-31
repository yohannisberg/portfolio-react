import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

const PostStepAnimation = () => {
  const boxRef = useRef(null);

  const triggerRef1 = useRef();
  const triggerRef2 = useRef();
  const triggerRef3 = useRef();

  useEffect(() => {
    gsap.fromTo(triggerRef1.current, 
      { x: -150},
      {
        x: -3,
        duration: 3, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef1.current,
          start: "top 80%",
          scrub: false,
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(triggerRef2.current, 
      { x: -275},
      {
        x: -339,
        duration: 4, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef2.current,
          start: "top 80%",
          scrub: false,
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(triggerRef3.current, 
      { x: -1365},
      {
        x: -1297,
        duration: 5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: triggerRef3.current,
          start: "top 85%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      }
    );

    // ✅ clean up ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <div className="repeat-wrapper">
      <p 
        ref={triggerRef1} 
        className="line-1"
      >
        <span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span>
      </p>

      <p 
        ref={triggerRef2} 
        className="line-2"
      >
        <span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span></p>

      <p 
        ref={triggerRef3} 
        className="line-3"
      >
        <span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span><span>JOIN.GET REWARDS.REPEAT.JOIN.GET REWARDS.REPEAT.</span></p>
    </div>
  );
};

export default PostStepAnimation;