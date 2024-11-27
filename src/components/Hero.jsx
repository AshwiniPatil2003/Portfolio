import React from 'react'
import HeroImage from '../assets/Ashh.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={HeroImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Ashwini Patil</span>
        , Software Engineer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
      As a forward-thinking software engineer, 
      I am passionate about building innovative and efficient solutions that enhance user experience. 
      </p>
      <p className='mt-4 text-lg text-gray-300'> 
      With experience in web development and AI projects,
      </p>
      <p className='mt-4 text-lg text-gray-300'> 
       I am dedicated to developing applications that seamlessly blend technology and creativity. 
      </p>
      <div className='mt-8 space-x-4'>
        <a href='#contact'>
          <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        </a>
        <a href="src\components\Ashwini_patil.pdf" target="_blank" rel="noopener noreferrer">
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Resume
          </button>
        </a>
      </div>

    </div>
  )
}

export default Hero