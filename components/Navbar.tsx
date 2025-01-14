/* eslint-disable */
'use client'


import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Info, 
  Briefcase, 
  Image as ImageIcon, 
  Book, 
  Calendar, 
  Mail, 
  Menu, 
  X 
} from 'react-feather'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)


  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }


    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)


  const menuItems = [
    { href: "#hero", label: "Home", icon: Home },
    { href: "#about", label: "About", icon: Info },
    { href: "#services", label: "Services", icon: Briefcase },
    { href: "#portfolio", label: "Portfolio", icon: ImageIcon },
    { href: "#blog", label: "Blog", icon: Book },
    { href: "#events", label: "Events", icon: Calendar },
    { href: "#contact", label: "Contact", icon: Mail }
  ]


  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-neutral-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0"
          >
            <Link 
              href="#" 
              className="text-3xl font-black text-white tracking-wider 
              bg-gradient-to-r from-indigo-500 to-purple-600 
              bg-clip-text text-transparent"
            >
              IMH
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white 
                    flex items-center gap-2 
                    px-3 py-2 rounded-md 
                    text-sm font-medium 
                    transition-all duration-300 
                    hover:bg-neutral-800/50"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>


          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 
              rounded-full text-gray-400 
              hover:text-white hover:bg-neutral-800 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden bg-neutral-900/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={item.href} 
                    onClick={toggleMenu}
                    className="text-gray-300 hover:text-white 
                    flex items-center gap-3 
                    px-4 py-3 rounded-lg 
                    text-base font-medium 
                    transition-all duration-300 
                    hover:bg-neutral-800"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}