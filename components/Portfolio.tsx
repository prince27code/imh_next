/* eslint-disable */
'use client'


import { motion } from 'framer-motion'
import { Tag } from 'react-feather'


export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Mr. & Ms. Nepal for Disability',
      category: 'video',
      media: '/videos/disability.mp4',
      tags: ['Event'],
    },
    {
      id: 2,
      title: 'Tuborg Nagarkot Tourism Fair',
      category: 'digital',
      media: '/videos/tourism.mp4',
      tags: ['Event'],
    },
    {
      id: 3,
      title: 'Acting Icon Kabre',
      category: 'acting',
      media: '/videos/acting.mp4',
      tags: ['Event']
    }
  ]
return (
  <section id="portfolio" className="py-20 relative">
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-indigo-600 to-purple-600">
          Our Creative Portfolio
        </h2>
        <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
          Explore our innovative projects across various creative domains
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
      </div>


      {/* Portfolio Cards */}
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-96 group relative overflow-hidden rounded-2xl shadow-xl"
          >
            {/* Media Container */}
            <div className="relative h-64 overflow-hidden">
              {item.media.endsWith('.mp4') ? (
                <video
                  src={item.media}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img 
                  src={item.media} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 
                group-hover:bg-opacity-50 
                transition-all duration-300 
                flex items-center justify-center"
              >
                <div className="text-white text-center 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300 
                  px-4"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                
                  <div className="flex justify-center space-x-2">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="
                          bg-white/20 
                          px-3 py-1 
                          rounded-full 
                          text-xs 
                          flex items-center gap-1
                        "
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
}