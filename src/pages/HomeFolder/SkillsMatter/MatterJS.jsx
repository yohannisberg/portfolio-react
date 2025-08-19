import { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterJS = ({width, height}) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    // wait until props are ready
    if (!width || !height) return;

    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create();
    const world = engine.world;

    // const width = window.innerWidth;
    // const height = 600;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent"
      }
    });

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    // walls around the viewport
    const walls = [
      // (x, y, w, h)
      Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true, render: { visible: false } })
    ];
    World.add(world, walls);

    // add some circles
    // (x, y, radius )
    const circleCount = 10;
    const circleSize = height * 0.1; // ~5% of height
    //_ is the unused element (we don’t care about the undefined values)
    // i is the index
    // 200+0*60 = 200
    // 200+1*60 = 260...
    const circles = Array.from({ length: circleCount }).map((_, i) =>
      Bodies.circle(200 + i * 60, 100, circleSize, {
        //Bounciness
        restitution: 0.8,
        render: {
          fillStyle: "#4cafef"
        }
      })
    );
    World.add(world, circles);

    // enable mouse drag
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        // means objects follow the mouse with a bit of "elasticity".
        stiffness: .2,
        // Constraint is invisible
        render: { visible: false }
      }
    });
    World.add(world, mouseConstraint);

    mouse.element.removeEventListener('wheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

    render.mouse = mouse;

    // cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
    // “Run the effect whenever either width or height changes.”
  }, [width, height]);

  return (
    <div ref={sceneRef} className="skills-matter-canvas"></div>
  );
};

export default MatterJS;
