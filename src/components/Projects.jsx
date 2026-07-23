import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink, MessageSquare, ShoppingCart, Globe, Newspaper, Smartphone } from 'lucide-react';

// Custom inline SVG for Github to avoid package version mismatch
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      year: '2026',
      title: 'AI-Powered Retail CRM (iplacettp)',
      desc: 'Bespoke end-to-end CRM solution tailored for mobile retail client iplacettp to automate inventory, quick invoicing, and finance tracking, empowered by Groq LLM & Llama-3.3 for AI-driven sales/expense analytics.',
      tags: ['ReactJS', 'FastAPI', 'Python', 'MongoDB', 'Groq LLM', 'TailwindCSS'],
      icon: <Smartphone size={24} />,
      link: '#'
    },
    {
      year: '2025',
      title: 'RAG-based Document Q&A Chatbot',
      desc: 'A Retrieval-Augmented Generation (RAG) application allowing users to upload files and perform context-aware Q&A. Uses Hugging Face embeddings, MongoDB Atlas Vector Search, and Groq LLM API with secure multi-user session management.',
      tags: ['MongoDB Atlas', 'Groq LLM', 'Hugging Face', 'Python', 'React'],
      icon: <MessageSquare size={24} />,
      link: '#'
    },
    {
      year: '2025',
      title: 'Grocery Delivery App – Buys',
      desc: 'A complete e-commerce grocery delivery system featuring full product catalogs, shopping cart logic, secure checkout process, and real-time shipment status tracking.',
      tags: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'CSS Modules'],
      icon: <ShoppingCart size={24} />,
      link: '#'
    },
    {
      year: '2024',
      title: 'News App with Chatbot',
      desc: 'Aggregates global real-time news feeds based on topic categories and features an integrated AI-powered conversational bot to discuss articles with users.',
      tags: ['ReactJS', 'AI Integration', 'NewsAPI', 'JavaScript'],
      icon: <Newspaper size={24} />,
      link: '#'
    },
    {
      year: '2024',
      title: 'College Website',
      desc: 'Developed the official web presence for the Information Technology department at Hindusthan Institute of Technology, styling with Bootstrap and Tailwind CSS.',
      tags: ['HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'JavaScript'],
      icon: <Globe size={24} />,
      link: 'http://hit.edu.in/it'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="projects">
      <h2 className="section-title">Key Projects</h2>
      
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card glass-panel"
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={cardVariants}
            whileHover={{ y: -8 }}
          >
            <div>
              <div className="project-header">
                <div className="project-icon" style={{ background: 'rgba(0, 242, 254, 0.1)', padding: '10px', borderRadius: '10px' }}>
                  {proj.icon}
                </div>
                <div className="project-links">
                  <a href="https://github.com/mdhafis0709" target="_blank" rel="noreferrer" className="project-link" title="GitHub Code">
                    <GithubIcon />
                  </a>
                  {proj.link !== '#' && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="project-link" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '0.3rem' }}>
                {proj.year}
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
            </div>

            <div className="project-tags">
              {proj.tags.map((tag, tIdx) => (
                <span key={tIdx} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
