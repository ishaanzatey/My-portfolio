import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I'm Ishan 👋"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section
      className="hero"
      style={{
        textAlign: 'center',
        padding: '8rem 10% 6rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          marginBottom: '1.5rem',
          color: 'var(--text-primary)',
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {displayText}
      </motion.h2>
      
      <motion.p
        style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
          maxWidth: '700px',
          margin: '0 auto',
          color: 'var(--text-secondary)',
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Middleware Engineer & Site Reliability Specialist with 3.6+ years of experience. 
        Passionate about DevOps, Automation, and Cloud Engineering — building reliable and scalable systems.
      </motion.p>
    </motion.section>
  )
}

export default Hero
