import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useAnimate } from 'framer-motion';
import {
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiJavascript,
  SiBootstrap,
  SiGithub,
  SiHtml5,
  SiJquery,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
} from 'react-icons/si';

const Skills = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start 0.5']
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="bg-white px-4">
      <motion.div
        ref={container}
        style={{ opacity }}
        className="mx-auto max-w-7xl"
      >
        <ClipPathLinks />
      </motion.div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <Div Icon={SiReact} name="React" />
        <Div Icon={SiJavascript} name="JavaScript" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <Div Icon={SiBootstrap} name="Bootstrap" />
        <Div Icon={SiGithub} name="GitHub" />
        <Div Icon={SiJquery} name="jQuery" />
        <Div Icon={SiTailwindcss} name="Tailwind CSS" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <Div Icon={SiHtml5} name="HTML5" />
        <Div Icon={SiCss3} name="CSS3" />
        <Div Icon={SiNodedotjs} name="Node.js" />
        <Div Icon={SiMysql} name="MySQL" />
      </div>
    </div>
  );
};

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const Div = ({ Icon, name, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: 'left',
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: 'right',
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: 'top',
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: 'bottom',
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-7xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-neutral-900 text-white"
      >
        <Icon className="text-xl sm:text-3xl md:text-7xl" />
        <span className="text-sm sm:text-xl mt-2">{name}</span>
      </div>
    </a>
  );
};

export default Skills;
