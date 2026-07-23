import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal as TerminalIcon, FileText } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <section id="home">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-greeting">
          Hello World, I'm
        </motion.div>
        
        <motion.h1 variants={itemVariants} className="hero-name">
          Mohamed Hafis
        </motion.h1>
        
        <motion.div variants={itemVariants} className="hero-title">
          <span style={{ color: 'var(--text-primary)' }}>Python Developer, </span>
          <span className="glow-text-cyan" style={{ color: 'var(--accent-cyan)' }}>AI Engineer</span>
        </motion.div>
        
        <motion.p variants={itemVariants} className="hero-desc">
          Passionate about solving real-world problems with AI, designing intelligent automation, and building scalable backend systems using Python, FastAPI, and React.
        </motion.p>
        
        <motion.div variants={itemVariants} className="hero-actions">
          <button className="btn-primary" onClick={() => handleScroll('projects')}>
            View My Projects
            <ArrowRight size={18} />
          </button>
          
          <button className="btn-secondary" onClick={() => handleScroll('contact')}>
            Get In Touch
            <TerminalIcon size={18} />
          </button>

          <a 
            href="/resume.pdf" 
            download="Mohamed_Hafis_Resume.pdf" 
            className="btn-secondary" 
            style={{ borderColor: 'var(--accent-magenta)', color: '#fff', textDecoration: 'none' }}
          >
            Download Resume
            <FileText size={18} style={{ color: 'var(--accent-magenta)' }} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
