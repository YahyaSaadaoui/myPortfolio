import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='w-full h-screen bg-white dark:bg-black'>
      {/* Container */}

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] dark:text-red-500'>
          SAI KUMAR
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] dark:text-red-500'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] dark:text-red-500'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:text-white hover:bg-pink-600 hover:border-pink-600 dark:text-blue-500 '>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          <button className='text-black  dark:text-blue-500' onClick={handleThemeSwitch}>Dark Mode</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
