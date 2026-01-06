import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mt-5">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='md:mt-4 mt-80 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a full-stack software engineer based in Calgary, Canada, with over five years of experience building scalable, product-driven, and AI-powered web applications. I work across both backend and frontend, designing robust APIs and services using Python, Node.js, and Go, with hands-on experience using ExpressJS, Django, Flask, and FastAPI, and building fast, intuitive, and scalable user interfaces with React, React-Native, TypeScript, Vue.js, and Next.js.
I have strong experience with cloud platforms such as AWS, GCP, and Firebase, and I use Docker and Kubernetes to build, deploy, and scale reliable production systems. My approach centers on writing clean, maintainable code, designing systems that scale, and delivering user experiences that are performant, reliable, and easy to use.
I enjoy collaborating closely with product managers and designers to turn ideas into impactful solutions, and I’m driven by ownership, continuous improvement, and building products at the intersection of software engineering, cloud platforms, and AI.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
