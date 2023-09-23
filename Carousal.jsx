import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function App() {
  const slides = [
    {
      url: 'https://blog.intostudy.com/wp-content/uploads/2021/02/Genetic-Counselor-768x512.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/exams-concept-illustration_114360-2173.jpg?w=826&t=st=1695395588~exp=1695396188~hmac=196e46b914c561b948dd9e75b39fb00cafa24e6aaeb9fcb3460d6ac2e580d292',
    },
    {
      url: 'https://thepsychometricworld.com/wp-content/uploads/2021/04/How-Psychometric-Tests-are-Useful-for-Career-Counsellors-in-Guiding-Students.jpeg',
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='relative group mt-[20px]'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-[600px] h-[400px] rounded-2xl bg-center bg-cover duration-500 m-auto'
      ></div>
      {/* Left Arrow */}
      <div className='group-hover:block absolute mt-[-80px] top-[50%] -translate-x-0 translate-y-[-50%] left-80 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='group-hover:block absolute mt-[-80px] top-[50%] -translate-x-0 translate-y-[-50%] right-80 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;