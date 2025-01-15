/* eslint-disable */
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
} from 'react-feather'


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })


  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)


    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))


    // Reset form and show success message
    setFormData({ name: '', email: '', subject: '', message: '' })
    setSubmitMessage('Thank you for your message. We\'ll get back to you soon!')
    setIsSubmitting(false)


    // Clear message after 5 seconds
    setTimeout(() => setSubmitMessage(''), 5000)
  }


  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      id="contact" 
      className="py-20 bg-gradient-to-br from-neutral-50 to-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-indigo-600 to-purple-600">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>
  
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-2 md:p-3 rounded-full">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-700 text-sm md:text-base">Address</p>
                  <p className="text-neutral-600 text-xs md:text-sm">Kathmandu, Nepal</p>
                </div>
              </div>
  
  
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-2 md:p-3 rounded-full">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-700 text-sm md:text-base">Phone</p>
                  <p className="text-neutral-600 text-xs md:text-sm">+977 9841352805</p>
                </div>
              </div>
  
  
              <div className="flex items-center space-x-4">
                <div className="bg-indigo-100 p-2 md:p-3 rounded-full">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-700 text-sm md:text-base">Email</p>
                  <p className="text-neutral-600 text-xs md:text-sm">info@internationalmediahub.com</p>
                </div>
              </div>
            </div>
  
  
            {/* Embedded Map */}
            <div className="mt-6 md:mt-8 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.924591125588!2d85.32951859040064!3d27.694703218582784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1736857472884!5m2!1sen!2snp" 
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
  
  
          {/* Contact Form */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-neutral-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    block w-full 
                    px-3 py-2 md:px-4 md:py-3 
                    rounded-xl 
                    border border-neutral-300 
                    focus:border-indigo-500 
                    focus:ring-2 focus:ring-indigo-500/50 
                    transition duration-300
                    text-xs md:text-sm
                  "
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-neutral-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    block w-full 
                    px-3 py-2 md:px-4 md:py-3 
                    rounded-xl 
                    border border-neutral-300 
                    focus:border-indigo-500 
                    focus:ring-2 focus:ring-indigo-500/50 
                    transition duration-300
                    text-xs md:text-sm
                  "
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-neutral-700 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="
                    block w-full 
                    px-3 py-2 md:px-4 md:py-3 
                    rounded-xl 
                    border border-neutral-300 
                    focus:border-indigo-500 
                    focus:ring-2 focus:ring-indigo-500/50 
                    transition duration-300
                    text-xs md:text-sm
                  "
                >
                  <option value="" disabled>Select a Subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Services">Services</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Support">Support</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-neutral-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    block w-full 
                    px-3 py-2 md:px-4 md:py-3 
                    rounded-xl 
                    border border-neutral-300 
                    focus:border-indigo-500 
                    focus:ring-2 focus:ring-indigo-500/50 
                    transition duration-300
                    text-xs md:text-sm
                  "
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full 
                    flex justify-center 
                    py-2 md:py-3 
                    border border-transparent 
                    rounded-md 
                    shadow-sm 
                    text-sm md:text-base font-medium 
                    text-white 
                    bg-indigo-600 
                    hover:bg-indigo-700 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-offset-2 
                    focus:ring-indigo-500 
                    disabled:opacity-50 
                    transition duration-300
                  "
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
  
  
            {submitMessage && (
              <div className="mt-4 text-green-600 text-center animate__animated animate__fadeIn">
                {submitMessage}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}