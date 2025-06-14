import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

import { styles } from "../styles";
import { github, web_logo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  web_link
}) => {

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-auto'
    >   
      <div className='relative w-full'>
        {image.length > 1 
          ? (
            <Carousel 
              showThumbs={false}  
              autoPlay={true} 
              infiniteLoop={true} 
              stopOnHover={true}
            >
              {image.map((img, idx) => (
                <div key={`project-image-container-${idx}-${img}`}>
                  <img 
                    key={`project-image-${idx}-${img}`}
                    alt='project_image'
                    src={img} 
                    className='w-full h-auto object-cover rounded-2xl'
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <img
              src={image[0]}
              alt='project_image'
              className='w-full h-auto object-cover rounded-2xl'
            />
        )}

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
          {source_code_link && <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>}
          {web_link && <div
            onClick={() => window.open(web_link, "_blank")}
            className='blue-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={web_logo}
              alt='web link'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>}
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
      
    </motion.div>
  );
};

const Works = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The projects presented here serve as demonstrations of my skills and 
          expertise, offering real-world instances of my work. Each project is 
          succinctly outlined and accompanied by links to its code repositories 
          and live demos. These showcases underscore my proficiency in tackling 
          intricate challenges, adeptness in utilizing diverse technologies, and 
          adept project management capabilities.
        </motion.p>
      </div>

      <div className='mt-20'>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            mousewheel={true}
            keyboard={true}
            cssMode={true}
            navigation={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="w-[100%] h-[auto]"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={`swiper-slide-${index}`}>
                <ProjectCard 
                  key={`project-${index}`} 
                  index={index} 
                  {...project}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div> 
    </>
  );
};

export default SectionWrapper(Works, "");
