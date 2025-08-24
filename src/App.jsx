import React, { useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAnimation from './components/BackgroundAnimation'
import FloatingParticles from './components/FloatingParticles'
import './App.css'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const springConfig = { stiffness: 300, damping: 30 }
  
  // Smooth scroll progress for background animation
  const scrollProgress = useSpring(
    useTransform(scrollY, [0, 1000], [0, 1]),
    springConfig
  )

  // Handle scroll events with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 50
    setIsScrolled(scrolled)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    console.log('App mounted, components should render')
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Debug: Check if components are rendering
  console.log('App rendering, isScrolled:', isScrolled)

  return (
    <div className="app">
      {/* Aesthetic minimalist background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          background: 'linear-gradient(-45deg, #f8f9fa, #e9ecef, #dee2e6, #ced4da, #adb5bd, #6c757d)',
          backgroundSize: '400% 400%',
          opacity: 0.4,
          animation: 'gradientShift 30s ease infinite',
        }}
      />
      
      <BackgroundAnimation scrollProgress={scrollProgress} />
      <FloatingParticles />
      
      <Header isScrolled={isScrolled} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
