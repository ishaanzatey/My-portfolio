import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.section
      id="about"
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
        About Me
      </motion.h3>
      
      <motion.p
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          lineHeight: 1.8,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Skilled in Python, Shell Scripting, AWS, Kubernetes, Docker, Terraform, Jenkins, 
        and observability tools like Grafana, Prometheus, and Splunk. I thrive on solving 
        infrastructure challenges, automating workflows, and enabling seamless deployments.
      </motion.p>
    </motion.section>
  )
}

export default About
