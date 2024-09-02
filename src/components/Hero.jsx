import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full md:h-screen xs:h-[600px] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row md:items-start xs:items-center`}
        style={{width: '100%'}}
      >
        <div className='flex flex-col justify-center items-center mt-5'
          style={{width: '5%'}}
        >
          {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
        </div>

        <div className="flex" style={{width: '95%'}}>
          <div className="mt-10" style={{width: '50%'}}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Ayobami</span>
            </h1>
            <p className={`${styles.heroSubText2} mt-2 text-white-100`}>
              I develop web applications, user <br className='sm:block hidden' />
              interfaces and mobile apps.
            </p>
          </div>
          <div className="rounded-full bg-secondary overflow-hidden" style={{width: '50%'}}>
            <img
              src="assets/man.png"
              alt="ay"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
