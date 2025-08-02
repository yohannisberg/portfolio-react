import { useEffect, useRef } from 'react';
import ScrollMagic from 'scrollmagic';

const GlassesAnimation = () => {
  const triggerRef1 = useRef(null);
  const triggerRef2 = useRef(null);
  const triggerRef3 = useRef(null);
  const triggerRef4 = useRef(null);
  const triggerRef5 = useRef(null);
  const triggerRef6 = useRef(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const scenes = [
      { ref: triggerRef1, triggerHook: .8 },
      { ref: triggerRef2, triggerHook: .7 },
      { ref: triggerRef3, triggerHook: .6 },
      { ref: triggerRef4, triggerHook: .55 },
      { ref: triggerRef5, triggerHook: .5 },
      { ref: triggerRef6, triggerHook: .47 },
    ];

    scenes.forEach(({ ref, triggerHook }) => {
      new ScrollMagic.Scene({
        triggerElement: ref.current,
        triggerHook, // 0=top, 1=bottom
        reverse: true, // Trigger on reverse
      })
        .setClassToggle(ref.current, 'visible') // Add class
        .addTo(controller);
    });

    return () => controller.destroy(); // Cleanup
  }, []);

  return (
    <div className="glasses-wrapper">
      <img ref={triggerRef1} className="glasses g1" src="/glasses.png" alt="Glasses"/>
      <img ref={triggerRef2} className="glasses g2" src="/glasses.png" alt="Glasses"/>
      <img ref={triggerRef3} className="glasses g3" src="/glasses.png" alt="Glasses"/>
      <img ref={triggerRef4} className="glasses g4" src="/glasses.png" alt="Glasses"/>
      <img ref={triggerRef5} className="glasses g5" src="/glasses.png" alt="Glasses"/>
      <img ref={triggerRef6} className="glasses g6" src="/glasses.png" alt="Glasses"/>
    </div>

  );
};

export default GlassesAnimation;

              