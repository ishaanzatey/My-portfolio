import React, { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Modal from './Modal'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCardRef, setSelectedCardRef] = useState(null)

  const projects = [
    {
      id: 1,
      title: "Online Shopping App (Hackathon)",
      description: "Built and deployed a scalable shopping app on Kubernetes with CI/CD (Jenkins + GitHub), HPA scaling, Prometheus-Grafana monitoring, and AWS EC2 hosting. The application features a microservices architecture with automatic scaling based on demand and comprehensive monitoring.",
      tech: ["Kubernetes", "Jenkins", "AWS", "Prometheus", "Grafana", "Docker", "GitHub Actions"],
      features: [
        "Microservices architecture with Kubernetes orchestration",
        "CI/CD pipeline with Jenkins and GitHub integration",
        "Horizontal Pod Autoscaling (HPA) for dynamic scaling",
        "Real-time monitoring with Prometheus and Grafana",
        "AWS EC2 hosting with load balancer configuration",
        "Containerized deployment with Docker"
      ]
    },
    {
      id: 2,
      title: "SSL Certificate Monitoring",
      description: "Automated SSL/TLS monitoring for 160+ Linux servers using Shell, cron, and Rundeck. Reduced outages by 40% with proactive alerts and automated renewal processes. The system provides comprehensive certificate health monitoring across multiple environments.",
      tech: ["Shell Scripting", "Rundeck", "Linux", "Automation", "Cron", "SSL/TLS", "Monitoring"],
      features: [
        "Automated SSL certificate expiration monitoring",
        "Proactive alerts 30 days before expiration",
        "Integration with Rundeck for centralized management",
        "Cron-based scheduling for regular checks",
        "Multi-server monitoring (160+ servers)",
        "Automated renewal process for eligible certificates"
      ]
    },
    {
      id: 3,
      title: "Disk Space Monitoring",
      description: "Developed Python automation for disk usage alerts via SMTP & APIs, reducing manual checks and improving response times. The system provides intelligent disk space monitoring with configurable thresholds and multiple notification channels.",
      tech: ["Python", "SMTP", "APIs", "Monitoring", "Automation", "Linux", "Shell Scripting"],
      features: [
        "Intelligent disk space monitoring with configurable thresholds",
        "Multiple notification channels (SMTP, API, Slack)",
        "Automated cleanup recommendations",
        "Historical usage tracking and reporting",
        "Integration with existing monitoring systems",
        "Customizable alert rules and escalation policies"
      ]
    },
    {
      id: 4,
      title: "App Server Cache Automation",
      description: "Enhanced cache-clearing automation with Python + RPA integration, saving hours of manual intervention weekly. The system provides intelligent cache management with automated clearing schedules and performance optimization.",
      tech: ["Python", "RPA", "Automation", "Cache", "Performance", "Scheduling", "Monitoring"],
      features: [
        "Automated cache clearing with intelligent scheduling",
        "RPA integration for complex cache operations",
        "Performance monitoring and optimization",
        "Automated backup before cache operations",
        "Rollback capabilities for failed operations",
        "Comprehensive logging and audit trails"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const openModal = useCallback((project, cardRef) => {
    setSelectedProject(project)
    setSelectedCardRef(cardRef)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedProject(null)
    setSelectedCardRef(null)
  }, [])

  return (
    <>
      <motion.section
        id="projects"
        ref={ref}
        style={{
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
          Featured Projects
        </motion.h3>
        
        <motion.div
          className="projects"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            marginTop: '2rem',
          }}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const cardRef = useRef(null)
            
            return (
              <motion.div
                key={project.id}
                ref={cardRef}
                className="card"
                style={{
                  background: 'var(--background-primary)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-light)',
                  border: '1px solid var(--border-color)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                }}
                variants={cardVariants}
                whileHover={{ 
                  y: -6, 
                  boxShadow: 'var(--shadow-medium)',
                  borderColor: 'var(--primary-color)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={() => openModal(project, cardRef)}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, var(--primary-color), var(--secondary-color))',
                    scaleX: 0,
                    transformOrigin: 'left',
                  }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <h4 style={{
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                }}>
                  {project.title}
                </h4>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                }}>
                  {project.description.length > 150 
                    ? `${project.description.substring(0, 150)}...` 
                    : project.description
                  }
                </p>

                <div style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span>Click to view full details</span>
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    →
                  </motion.span>
                </div>
                
                <div className="tech-stack" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      style={{
                        background: 'var(--background-secondary)',
                        color: 'var(--text-secondary)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        fontWeight: 500,
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 4 && (
                    <span style={{
                      background: 'var(--background-secondary)',
                      color: 'var(--text-secondary)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '16px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                    }}>
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.section>

      {/* Project Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        project={selectedProject}
        cardRef={selectedCardRef}
      />
    </>
  )
}

export default Projects
