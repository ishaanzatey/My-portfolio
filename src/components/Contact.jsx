import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      id="contact"
      ref={ref}
      style={{
        background: 'var(--background-secondary)',
        padding: '6rem 10%',
        position: 'relative',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h3
        style={{
          fontSize: 'clamp(2rem, 4vw, 2.5rem)',
          marginBottom: '3rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Contact
      </motion.h3>
      
      <motion.p
        style={{
          textAlign: 'center',
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        📧{' '}
        <motion.a
          href="mailto:ishaan.zate@gmail.com"
          style={{
            color: 'var(--primary-color)',
            fontWeight: 500,
            textDecoration: 'none',
            position: 'relative',
          }}
          whileHover={{ color: 'var(--secondary-color)' }}
          transition={{ duration: 0.2 }}
        >
          ishaan.zate@gmail.com
        </motion.a>
        {' | '}
        🔗{' '}
        <motion.a
          href="https://linkedin.com/in/ishanzatey"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--primary-color)',
            fontWeight: 500,
            textDecoration: 'none',
            position: 'relative',
          }}
          whileHover={{ color: 'var(--secondary-color)' }}
          transition={{ duration: 0.2 }}
        >
          LinkedIn
        </motion.a>
        {' | '}
        💻{' '}
        <motion.a
          href="https://github.com/ishanzatey"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--primary-color)',
            fontWeight: 500,
            textDecoration: 'none',
            position: 'relative',
          }}
          whileHover={{ color: 'var(--secondary-color)' }}
          transition={{ duration: 0.2 }}
        >
          GitHub
        </motion.a>
      </motion.p>
    </motion.section>
  )
}

export default Contact
