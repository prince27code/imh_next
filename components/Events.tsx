/* eslint-disable */
'use client'


import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  ArrowRight 
} from 'react-feather'


export default function Events() {
  interface Event {
    id: number
    title: string
    date: string
    location: string
    description: string
    category: string
    image?: string
    status?:string
  }


  const events: Event[] = [
    {
      id: 1,
      title: "IMH Talkcast",
      date: "February 2025",
      location: "Kathmandu, Nepal",
      description: "An innovative media dialogue bringing together thought leaders, content creators, and industry experts to explore the future of digital media and storytelling.",
      category: "Podcast",
      image: "/images/imh.jpg",
      status: "Coming Soon"
    },
    {
      id: 2,
      title: "Digital Content Creation Workshop",
      date: "TBD",
      location: "Online & Hybrid",
      description: "Comprehensive workshop on modern content creation techniques, covering video production, digital marketing, and multimedia storytelling strategies.",
      category: "Media Training",
      image: "/images/workshop.jpg"
    },
    {
      id: 3,
      title: "International Media Innovation Summit",
      date: "TBD",
      location: "Kathmandu, Nepal",
      description: "A global platform connecting media professionals to discuss emerging trends, technological innovations, and creative strategies in the media landscape.",
      category: "Media Conference",
      image: "/images/media.JPG"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }


  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }


  const categoryColors: Record<string, string> = {
    "Media Dialogue": "from-indigo-500 to-purple-600",
    "Podcast": "from-indigo-500 to-purple-600",
    "Media Training": "from-pink-500 to-rose-600",
    "Media Conference": "from-emerald-500 to-green-600"
  }


  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id="events" 
      className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-neutral-900 mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-indigo-600 to-purple-600">
            Upcoming Events
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay connected and grow your skills with our industry events and workshops
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>


        {/* Events Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event) => (
            <motion.div 
              key={event.id}
              variants={itemVariants}
              className="group"
            >
              <div className="
                relative 
                bg-white 
                rounded-2xl 
                overflow-hidden 
                shadow-xl 
                transform 
                transition 
                duration-300 
                hover:scale-105 
                hover:shadow-2xl
              ">
                {/* Event Image */}
                <div className="relative h-56 overflow-hidden">
                  {event.image ? (
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="
                        absolute 
                        inset-0 
                        w-full 
                        h-full 
                        object-cover 
                        group-hover:scale-110 
                        transition 
                        duration-300
                      "
                    />
                  ) : (
                    <div 
                      className={`
                        absolute 
                        inset-0 
                        bg-gradient-to-r 
                        ${categoryColors[event.category]}
                        opacity-80
                      `}
                    />
                  )}
                  
                  {/* Category Badge */}
                  <div 
                    className={`
                      absolute 
                      top-4 
                      left-4 
                      bg-gradient-to-r 
                      ${categoryColors[event.category]}
                      text-white 
                      px-3 
                      py-1 
                      rounded-full 
                      text-xs
                    `}
                  >
                    {event.category}
                  </div>
                </div>


                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center text-neutral-600 mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center text-neutral-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-neutral-700 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <div className="flex justify-center mt-4"> 
                  <Link 
  //href={`/register?event=${event.id}`} 
 href="#contact"
  className="
    inline-block 
    bg-indigo-600 
    text-white 
    px-6 
    py-2 
    rounded-full 
    hover:bg-indigo-700 
    transition 
    duration-300
  "
>
  Register
</Link>
</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* View All Events CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <Link 
            // href="/events" 
            href="#contact"
            className="
              inline-flex 
              items-center 
              bg-gradient-to-r 
              from-indigo-600 
              to-purple-600 
              text-white 
              px-10 
              py-4 
              rounded-full 
              hover:from-indigo-700 
              hover:to-purple-700 
              transition 
              duration-300 
              group
            "
          >
            View All Events
            <ArrowRight 
              className="
                ml-3 
                group-hover:translate-x-1 
                transition 

                duration-300" 
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
