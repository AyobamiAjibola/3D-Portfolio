import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <div> */}
        <p className={`${styles.sectionSubText} text-left`}>
          Technology
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Skills.
        </h2>
        {/* </div> */}
      </motion.div>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 bg-slate-300 rounded-xl flex justify-center items-center' key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img
            src={technology.icon}
            style={{
              width: '80%',
              height: '80%'
            }}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
