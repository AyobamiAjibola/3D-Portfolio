import React, { useState } from 'react';

const SlideShow = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-[100%]">
      <button onClick={handlePrevClick}>Previous</button>
      <div className="flex">
        <img src={items[currentIndex].image} alt={items[currentIndex].title} />
        {/* <h2>{items[currentIndex].title}</h2> */}
        {/* <p>{items[currentIndex].description}</p> */}
        {/* {items} */}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default SlideShow;
