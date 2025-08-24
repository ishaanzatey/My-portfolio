import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ isOpen, onClose, project, cardRef }) => {
  const modalRef = useRef(null)

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  // Get the exact position and size of the clicked card
  const getCardTransform = () => {
    if (cardRef?.current) {
      const rect = cardRef.current.getBoundingClientRect()
      
      // Get the center of the card
      const cardCenterX = rect.left + rect.width / 2
      const cardCenterY = rect.top + rect.height / 2
      
      // Get the center of the viewport
      const viewportCenterX = window.innerWidth / 2
      const viewportCenterY = window.innerHeight / 2
      
      // The modal starts at the card position and moves to center
      // So we need to offset it by the difference between card and viewport centers
      const offsetX = cardCenterX - viewportCenterX
      const offsetY = cardCenterY - viewportCenterY
      
      // Calculate the scale from card size to modal size
      const scaleX = rect.width / 600 // modal width is 600px
      const scaleY = rect.height / 400 // approximate modal height
      
      return {
        translateX: offsetX,
        translateY: offsetY,
        scaleX,
        scaleY,
        cardWidth: rect.width,
        cardHeight: rect.height,
        cardLeft: rect.left,
        cardTop: rect.top,
      }
    }
    return null
  }

  const cardTransform = getCardTransform()

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        className="modal-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ 
          duration: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom cubic-bezier for Apple-like feel
        }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Blurred background */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          initial={{ backdropFilter: 'blur(0px)', background: 'rgba(0, 0, 0, 0)' }}
          animate={{ backdropFilter: 'blur(20px)', background: 'rgba(0, 0, 0, 0.08)' }}
          exit={{ backdropFilter: 'blur(0px)', background: 'rgba(0, 0, 0, 0)' }}
          transition={{ 
            duration: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        />
        
        {/* Modal content with Apple-like smooth transition */}
        <motion.div
          className="modal-content"
          style={{
            background: 'var(--background-primary)',
            borderRadius: '24px',
            padding: '3rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative',
            zIndex: 1001,
            boxShadow: 'var(--shadow-heavy)',
            border: '1px solid var(--border-color)',
          }}
          initial={cardTransform ? {
            translateX: cardTransform.translateX,
            translateY: cardTransform.translateY,
            scaleX: cardTransform.scaleX,
            scaleY: cardTransform.scaleY,
            borderRadius: '20px',
            opacity: 0.9,
          } : {
            scale: 0.9,
            opacity: 0,
            y: 20,
          }}
          animate={{
            translateX: 0,
            translateY: 0,
            scaleX: 1,
            scaleY: 1,
            borderRadius: '24px',
            opacity: 1,
          }}
          exit={cardTransform ? {
            translateX: cardTransform.translateX,
            translateY: cardTransform.translateY,
            scaleX: cardTransform.scaleX,
            scaleY: cardTransform.scaleY,
            borderRadius: '20px',
            opacity: 0.9,
          } : {
            scale: 0.9,
            opacity: 0,
            y: 20,
          }}
          transition={{ 
            duration: 0.08,
            ease: [0.25, 0.46, 0.45, 0.94], // Apple's signature easing
            scale: {
              duration: 0.06,
              ease: [0.25, 0.46, 0.45, 0.94]
            },
            borderRadius: {
              duration: 0.06,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'var(--text-secondary)',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            whileHover={{ 
              background: 'var(--background-secondary)',
              color: 'var(--text-primary)',
              scale: 1.1
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            aria-label="Close modal"
          >
            ×
          </motion.button>

          {/* Project title */}
          <motion.h2
            id="modal-title"
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              paddingRight: '3rem',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.01, 
              duration: 0.06,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {project.title}
          </motion.h2>

          {/* Project description */}
          <motion.p
            id="modal-description"
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.02, 
              duration: 0.06,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {project.description}
          </motion.p>

          {/* Technology stack */}
          <motion.div
            style={{
              marginBottom: '2rem',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.03, 
              duration: 0.06,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}>
              Technologies Used
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  style={{
                    background: 'var(--background-secondary)',
                    color: 'var(--text-secondary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    border: '1px solid var(--border-color)',
                  }}
                  initial={{ opacity: 0, scale: 0.95, y: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 0.04 + index * 0.01, 
                    duration: 0.06,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.08 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Additional project details */}
          <motion.div
            style={{
              background: 'var(--background-secondary)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.05, 
              duration: 0.06,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
            }}>
              Key Features
            </h3>
            <ul style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              paddingLeft: '1.5rem',
            }}>
              {project.features?.map((feature, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  {feature}
                </li>
              )) || (
                <>
                  <li>Scalable architecture design</li>
                  <li>Performance optimization</li>
                  <li>Security best practices</li>
                  <li>Monitoring and alerting</li>
                </>
              )}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal
