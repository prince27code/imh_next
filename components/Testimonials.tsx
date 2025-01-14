/* eslint-disable */
'use client'




import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, 
  ChevronRight 
} from 'react-feather'






export default function Testimonials() {
  // 2. OPTIONAL: CREATE TYPESCRIPT INTERFACE
  interface Testimonial {
    id: number
    content: string
    author: string
    position: string
    company: string  // NEW: Added company
    image: string
  }




  // 3. UPDATE TESTIMONIALS DATA
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "International Media Hub transformed our online presence. Their innovative approach to digital marketing significantly boosted our engagement and conversions.",
      author: "Ashutosh Neupane",
      position: "Marketing Director",
      company: "TechCorp",  
      image: "/images/avatar1.jpg",
    },
    {
      id: 2,
      content: "The video production team at IMH is simply outstanding. They captured the essence of our brand and delivered a compelling story that resonated with our audience.",
      author: "Pragyan Sapkota",
      position: "CEO",
      company: "StartUp Innovations",  
      image: "/images/avatar2.jpg",
    },
    {
      id: 3,
      content: "Working with International Media Hub on our website redesign was a game-changer. Their attention to detail and user-centric approach resulted in a significant improvement in our user engagement metrics.",
      author: "Sheza Pokhrel",
      position: "UX Director",
      company: "E-commerce Solutions",  
      image: "/images/avatar3.jpg",
    }
  ]


  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)


  // Automatic sliding function
  const autoSlide = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }


  // Setup automatic sliding
  useEffect(() => {
    // Only start interval if not hovering
    if (!isHovering) {
      intervalRef.current = setInterval(autoSlide, 5000) // Change slide every 5 seconds
    }


    // Cleanup interval
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovering])


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }


  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }




  return (
    <section 
      className="py-20 bg-gradient-to-br from-neutral-900 to-black text-white relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 4. BACKGROUND GRADIENT (Optional Enhancement) */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-indigo-400 to-purple-500">
            Client Testimonials
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Hear what our clients have to say about their transformative experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>




        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
            




              {/* Testimonial Content */}
              {/* eslint-disable-next-line */}
              <blockquote className="pt-12 pb-8">
                <p className="text-2xl md:text-3xl italic mb-8 text-neutral-200">
                  
                  "{testimonials[currentTestimonial].content}"
                </p>
                
                {/* Author Details */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-indigo-600">
                    <Image
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-xl text-neutral-100">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-neutral-400">
                      {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </blockquote>
            </motion.div>
          </AnimatePresence>




          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 flex items-center justify-between w-full">
            <button
              onClick={prevTestimonial}
              className="
                group p-3 bg-neutral-800/50 hover:bg-indigo-600/50 
                rounded-full transition duration-300 
                absolute left-0 top-1/2 transform -translate-y-1/2
              "
              aria-label="Previous testimonial"
            >
              <ChevronLeft 
                className="w-8 h-8 text-white group-hover:text-indigo-300 transition" 
              />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="
                group p-3 bg-neutral-800/50 hover:bg-indigo-600/50 
                rounded-full transition duration-300 
                absolute right-0 top-1/2 transform -translate-y-1/2
              "
              aria-label="Next testimonial"
            >
              <ChevronRight 
                className="w-8 h-8 text-white group-hover:text-indigo-300 transition" 
              />
            </button>
          </div>


          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300
                  ${currentTestimonial === index 
                    ? 'bg-indigo-600 w-6' 
                    : 'bg-neutral-600'}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}