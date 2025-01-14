'use client'


import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Video, 
  Monitor, 
  PieChart, 
  Layers, 
  ArrowRight,
  Calendar
} from 'react-feather'


export default function Services() {
    const services = [
        {
          icon: Video,
          title: "Content Production",
          description: "Professional multimedia content creation across various platforms",
          features: [
            "Video Production",
            "Reality Show Production",
            "Animation and Photography"
          ],
          color: "from-indigo-500 to-purple-600",
          delay: 0
        },
        {
          icon: PieChart,
          title: "Digital Marketing",
          description: "Strategic digital marketing solutions to boost your online presence",
          features: [
            "Social Media",
            "SEO",
            "Content Strategy"
          ],
          color: "from-pink-500 to-rose-600",
          delay: 0.2
        },
        {
          icon: Calendar,
          title: "Event Management",
          description: "Comprehensive event planning and execution services",
          features: [
            "End-to-end Event Planning",
            "Corporate Event Solutions",
            "Creative Event Design"
          ],
          color: "from-emerald-500 to-green-600",
          delay: 0.4
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


  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      id="services" 
      className="py-20 relative"
    >
       <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-neutral-900 mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-indigo-600 to-purple-600">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive media solutions tailored to elevate your brand's presence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>


        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`
                relative group overflow-hidden
                bg-white rounded-2xl shadow-xl
                transform transition duration-300 
                hover:scale-105 hover:shadow-2xl
                bg-gradient-to-br ${service.color}
                bg-opacity-10 p-0.5
              `}
            >
              <div className="bg-white rounded-2xl h-full p-6 relative">
                {/* Service Icon */}
                <div className={`
                  absolute top-0 right-0 m-4
                  bg-gradient-to-br ${service.color}
                  p-3 rounded-full 
                  transform group-hover:rotate-12 
                  transition duration-300
                `}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>


                {/* Service Content */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {service.description}
                  </p>
                </div>


                {/* Service Features */}
                <ul className="text-neutral-600 space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center group"
                    >
                      <Layers className="w-4 h-4 mr-2 text-indigo-600 
                        group-hover:rotate-45 transition duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>


                {/* Learn More Link */}
                <Link 
                  href="#" 
                  className="
                    inline-flex items-center 
                    text-indigo-600 hover:text-indigo-800
                    font-semibold group
                  "
                >
                  Learn More
                  <ArrowRight 
                    className="ml-2 group-hover:translate-x-1 
                    transition duration-300 w-5 h-5" 
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* CTA Button */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <Link 
            href="#contact" 
            className="
              inline-flex items-center 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white 
              px-10 py-4 
              rounded-full 
              hover:from-indigo-700 hover:to-purple-700 
              transition duration-300 
              group
            "
          >
            Get Started
            <ArrowRight 
              className="ml-3 group-hover:translate-x-1 
              transition duration-300" 
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}