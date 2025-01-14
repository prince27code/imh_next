'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Clock, 
  User, 
  ArrowRight 
} from 'react-feather'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  image: string
  readTime: number
  category: string
}


export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Digital Marketing',
      excerpt: 'Explore the latest trends and technologies shaping the future of digital marketing.',
      author: 'Ashma Neupane',
      date: 'January 15, 2025',
      image: '/images/dm.jpg',
      readTime: 5,
      category: 'Marketing'
    },
    {
      id: 2,
      title: 'Video Production Tips for Beginners',
      excerpt: 'Learn essential tips and tricks to kickstart your video production journey.',
      author: 'Saksham Dhungel',
      date: 'January 15, 2025',
      image: '/images/video.jpg',
      readTime: 4,
      category: 'Video'
    },
    {
      id: 3,
      title: 'The Impact of AI on Content Creation',
      excerpt: 'Discover how artificial intelligence is revolutionizing the content creation process.',
      author: 'Prince Sapkota',
      date: 'January 15, 2025',
      image: '/images/ai.jpg',
      readTime: 6,
      category: 'Technology'
    },
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
      id="blog" 
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
            Latest Insights
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay updated with our latest news, trends, and industry insights
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-4"></div>
        </motion.div>


        {/* Blog Posts Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl 
                transform transition duration-300 
                hover:scale-105 hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  {/* Category Overlay */}
                  <div className="absolute top-4 left-4 
                    bg-indigo-600 text-white 
                    px-3 py-1 rounded-full text-xs">
                    {post.category}
                  </div>
                </div>


                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="
                        group-hover:text-indigo-600 
                        transition duration-300 
                        line-clamp-2
                      "
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>


                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>


                {/* Read More Link */}
                <div className="px-6 pb-6">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="
                      inline-flex items-center 
                      text-indigo-600 hover:text-indigo-800 
                      font-semibold group
                    "
                  >
                    Read More
                    <ArrowRight 
                      className="ml-2 group-hover:translate-x-1 
                      transition duration-300 w-5 h-5" 
                    />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>


        {/* View All Posts CTA */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <Link 
            href="/blog" 
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
            View All Posts
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