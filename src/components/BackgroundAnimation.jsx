import React from 'react'
import { motion } from 'framer-motion'

const BackgroundAnimation = ({ scrollProgress }) => {
  console.log('BackgroundAnimation rendering')

  return (
    <motion.div
      className="background-animation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(-45deg, #f8f9fa, #e9ecef, #dee2e6, #ced4da, #adb5bd, #6c757d)',
        backgroundSize: '400% 400%',
        opacity: 0.15,
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        backgroundPosition: {
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    />
  )
}

export default BackgroundAnimation
