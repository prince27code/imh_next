/* eslint-disable */
"use client";
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Globe, Award, Video as VideoIcon } from 'react-feather';


export default function Hero() {
  const videoRef = useRef(null);


  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/background-video.mp4"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />


      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-20 h-full flex items-center justify-center text-center"
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* Animated Heading */}
          {/* Animated Heading with Elegant Font and Dynamic Gradient */}
          <div className="-mt-28"> 
<motion.h1 
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  className={`
    text-5xl md:text-7xl font-bold 
    text-transparent bg-clip-text 
    bg-gradient-to-r 
    from-[#ffae6b] via-[#67cd4e] to-[#d1459b] 
    animate-gradient-x
    mb-6
    
  `}
  style={{
    backgroundSize: '200% auto',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
  }}
>
  International Media Hub
</motion.h1>


          {/* Animated Typing Text */}
          <TypeAnimation
            sequence={[
              'Transforming Ideas into Visual Stories',
              2000,
              'Innovative Media Solutions',
              2000,
              'Creative Content Creators',
              2000
            ]}
            wrapper="p"
            speed={50}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto"
            repeat={Infinity}
          />
</div>
<div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center w-full">
          {/* Feature Highlights */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Globe, text: "Global Reach" },
              { icon: Award, text: "Award-Winning" },
              { icon: VideoIcon, text: "Premium Content" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 
                bg-white/10 backdrop-blur-md 
                px-4 py-2 rounded-full"
              >
                <feature.icon className="text-white w-5 h-5" />
                <span className="text-white text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </div>


          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4">
            <Link 
              href="#services"
              className="px-8 py-3 bg-indigo-600 text-white 
              rounded-full hover:bg-indigo-700 
              transition duration-300"
            >
              Explore Services
            </Link>
            <Link 
              href="#portfolio"
              className="px-8 py-3 border-2 border-white 
              text-white rounded-full 
              hover:bg-white hover:text-black 
              transition duration-300"
            >
              View Portfolio
            </Link>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}