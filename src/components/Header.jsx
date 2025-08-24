import React from 'react'
import { motion } from 'framer-motion'

const Header = ({ isScrolled }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.header
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 5%',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderBottom: '1px solid rgba(222, 226, 230, 0.3)',
      }}
      animate={{
        boxShadow: isScrolled ? 'var(--shadow-light)' : 'none',
        y: isScrolled ? 0 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.h1
        style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Ishan Zatey
      </motion.h1>
      
      <nav style={{ display: 'flex', gap: '2.5rem' }}>
        {['about', 'projects', 'contact'].map((section) => (
          <motion.a
            key={section}
            href={`#${section}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(section)
            }}
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              fontWeight: 500,
              padding: '0.5rem 0',
              cursor: 'pointer',
              position: 'relative',
              textTransform: 'capitalize',
            }}
            whileHover={{ color: 'var(--text-primary)' }}
            transition={{ duration: 0.2 }}
          >
            {section}
            <motion.div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                scaleX: 0,
                transformOrigin: 'left',
              }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
      </nav>
    </motion.header>
  )
}

export default Header
