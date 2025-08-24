import React from 'react'
import { motion } from 'framer-motion'

const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 6,
    duration: Math.random() * 3 + 4,
    size: Math.random() * 2 + 1,
  }))

  return (
    <div className="particles" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'var(--primary-color)',
            borderRadius: '50%',
            opacity: 0.08,
          }}
          animate={{
            y: [-15, 0, -15],
            opacity: [0.08, 0.2, 0.08],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
