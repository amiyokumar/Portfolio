import React from 'react';
import { Nav } from './Navbar';
import { SiGithub, SiLinkedin, SiInstagram, SiGmail } from "react-icons/si";
import Resume from "./AmiyoKumarSinghaResume.pdf";
import { motion } from 'framer-motion';

function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const splitLineVariants = {
    hidden: { width: 0 },
    visible: { width: '100%', transition: { duration: 1.5 } },
  };

  const continuousAnimation = {
    animate: {
      x: [0, 20, -20, 0],  // Keyframes for horizontal movement
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div data-scroll data-scroll-speed='-0.8' className='z-0 bg-gray-100 cursor-default' id='Home'>
      <section className="hero w-full relative">
        <Nav />
        <div className='flex gap-11 sm:flex-row flex-col items-center justify-center sm:pt-0 pt-[70%]'>
          <div className='flex sm:flex-col gap-10 sm:justify-center sm:pl-[0%] sm:pr-0 text-2xl'>
            <a href='https://github.com/amiyokumar' target='_blank'><SiGithub /></a>
            <a href='mailto:amiyokumarsingha7@gmail.com'><SiGmail /></a>
            <a href='https://www.linkedin.com/in/amiyo-kumar-singha-87ab92211/' target='_blank'><SiLinkedin /></a>
            <a href='https://www.instagram.com/i_amiyo_kumar/' target='_blank'><SiInstagram /></a>
          </div>
          <motion.div
            className="center flex flex-col h-screen w-[80%] items-center sm:justify-center text-black"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="line h-[7px] w-[90%] sm:w-2/4 bg-gray-500" variants={splitLineVariants}></motion.div>
            <motion.div className="post tracking-tighter-[8px] sm:text-[90px] text-[47px]" variants={textVariants}>
              <motion.span {...continuousAnimation}>React JS</motion.span>
            </motion.div>
            <motion.div className="post tracking-tighter-[8px] sm:text-[90px] text-[47px]" variants={textVariants}>
              <motion.span {...continuousAnimation}>DEVELOPER</motion.span>
            </motion.div>
            <motion.div className="line h-[7px] sm:w-2/4 w-[90%] bg-gray-500" variants={splitLineVariants}></motion.div>
            <a href={Resume} download="Amiyo_Kumar_Singha" 
              className='mt-11 px-4 py-2 rounded-full flex items-center gap-2 text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-blue-400'>
              Resume Here
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
