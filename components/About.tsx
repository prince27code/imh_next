'use client'


import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Clock, 
  Users, 
  Globe, 
  Award, 
  Zap 
} from 'react-feather'
// Type definition for component props
interface AnimatedCounterProps {
    target: number;
    delay?: number;
  }

export default function About() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  
 // Typed AnimatedCounter Component
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
    target, 
    delay = 0 
  }) => {
    const counterRef = useRef<HTMLSpanElement>(null);
  
  
    useEffect(() => {
      if (!isInView || !counterRef.current) return;
  
  
      const counter = counterRef.current;
      let startTimestamp: number | null = null;
      const end = target;
      const duration = 2000;
  
  
      const step = (timestamp: number) => {
        if (startTimestamp === null) {
          startTimestamp = timestamp;
        }
  
  
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        if (counter) {
          counter.textContent = Math.floor(progress * end).toString();
        }
  
  
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
  
  
      const timer = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay);
  
  
      return () => clearTimeout(timer);
    }, [isInView, target, delay]);
  
  
    return <span ref={counterRef}>0</span>;
  };

  // Section Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }


  return (
    <motion.section 
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      id="about" 
      className="py-20  relative "
    >
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 h-full w-full 
  bg-neutral-100 
  bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] 
  [background-size:16px_16px]">
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-neutral-900 mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-indigo-600 to-purple-600">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto"></div>
        </motion.div>


        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {[
            { 
              icon: Target, 
              title: "Our Mission", 
              description: "To empower businesses through innovative media solutions, creating impactful digital experiences that connect, engage, and inspire audiences worldwide.",
              color: "bg-indigo-600"
            },
            { 
              icon: Eye, 
              title: "Our Vision", 
              description: "To be the global leader in innovative media solutions, setting industry standards for creativity, technology, and client success.",
              color: "bg-purple-600"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={sectionVariants}
              className="p-6 bg-white rounded-2xl shadow-xl 
              transform transition duration-300 
              hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 ${item.color} rounded-full mr-4 
                  group-hover:rotate-12 transition duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>


        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Zap, title: "Innovation", desc: "Pushing boundaries and embracing new technologies", delay: 100 },
            { icon: Award, title: "Quality", desc: "Delivering excellence in every project", delay: 200 },
            { icon: Clock, title: "Reliability", desc: "Consistent and timely delivery of solutions", delay: 300 }
          ].map((value, index) => (
            <motion.div 
              key={index}
              variants={sectionVariants}
              className="text-center p-6 bg-white rounded-2xl shadow-lg 
              transform transition duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 
                rounded-full flex items-center justify-center mx-auto mb-4
                group-hover:animate-pulse">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                {value.title}
              </h3>
              <p className="text-neutral-700">{value.desc}</p>
            </motion.div>
          ))}
        </div>


        {/* Achievement Counters */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Globe, target: 150, label: "Projects Completed", color: "text-indigo-600" },
            { icon: Users, target: 50, label: "Team Members", color: "text-purple-600" },
            { icon: Target, target: 25, label: "Countries Served", color: "text-green-600" },
            { icon: Award, target: 95, label: "Client Satisfaction", color: "text-blue-600", symbol: "%" }
          ].map((counter, index) => (
            <motion.div 
              key={index}
              variants={sectionVariants}
              className="p-6 bg-white rounded-2xl shadow-lg 
              transform transition duration-300 hover:scale-105"
            >
              <div className={`text-5xl font-bold ${counter.color} mb-2`}>
                <AnimatedCounter 
                  target={counter.target} 
                  delay={index * 200} 
                />
                {counter.symbol || '+'}
              </div>
              <p className="text-neutral-700 flex items-center justify-center gap-2">
                <counter.icon className="w-5 h-5 opacity-50" />
                {counter.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}