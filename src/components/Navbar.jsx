import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { aylogo, menu, close, github, linkedIn } from "../assets";
import pdfFilePath from '../assets/cv/cv.pdf';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'ayobami_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div
          // to='/'
          className='flex items-center gap-2'
        >
          <img
            src={aylogo} alt='logo' 
            className='w-9 h-9 object-contain cursor-pointer'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          />
          <p className='text-white text-[18px] font-bold flex'>
            Ayobami &nbsp;
            <span className='md:block hidden text-[#915EFF]'> | Software Developer</span>
          </p>
          <button
            className="border border-[#915EFF] md:ml-[3rem] xs:ml-[1rem]
            rounded-lg
            py-1.5 px-3
            w-28
            font-semibold
            cursor-pointer
            text-xs
            text-[#915EFF]
            hover:text-white hover:bg-[#915EFF] hover:font-semibold"
            onClick={handleDownload}
          >
            Download CV
          </button>
          <img
            src={github} alt='logo'
            className='w-9 h-9 object-contain ml-[1.5rem] cursor-pointer md:block hidden'
            onClick={() => window.open("https://github.com/AyobamiAjibola", "_blank")}
          />
          <img
            src={linkedIn} alt='logo'
            className='w-10 h-10 object-contain ml-[1.5rem] cursor-pointer md:block hidden'
            onClick={() => window.open("https://linkedin.com/in/ayobamiajibola", "_blank")}
          />
          
        </div>

        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
