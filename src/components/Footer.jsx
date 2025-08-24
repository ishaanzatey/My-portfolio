import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      style={{
        textAlign: 'center',
        padding: '3rem',
        color: 'var(--text-tertiary)',
        fontSize: '0.9rem',
        borderTop: '1px solid var(--border-color)',
        background: 'var(--background-primary)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <p>© 2025 Ishan Zatey. Built with ❤️ and deployed on AWS S3.</p>
    </motion.footer>
  )
}

export default Footer
