import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    { title: 'Slide 1', content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SJWHUU9mNI86XhPRQ0J-B0ZKiBCYNQjBhg&s' },
    { title: 'Slide 2', content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SJWHUU9mNI86XhPRQ0J-B0ZKiBCYNQjBhg&s' },
    { title: 'Slide 3', content: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SJWHUU9mNI86XhPRQ0J-B0ZKiBCYNQjBhg&s' }
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="w-full h-64 flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold mb-2">{slide.title}</h2>
              <p className="text-center"> <img src={slide.content} alt="" /> </p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 w-full flex justify-center mb-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-600 w-full text-white py-2 px-4 rounded">Static Button</button>
      </div>
    </div>
  );
};

export default Carousel;
