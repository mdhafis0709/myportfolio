import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Brain, Cpu, CheckCircle2, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Generative AI & Agents',
      icon: <Brain size={20} style={{ color: 'var(--accent-cyan)' }} />,
      items: [
        { name: 'Generative AI & LLM Integration', level: 90 },
        { name: 'LangChain & LangGraph', level: 85 },
        { name: 'AI Agents & Agentic Workflows', level: 85 },
        { name: 'RAG (Retrieval-Augmented Gen)', level: 85 },
        { name: 'MCP (Model Context Protocol)', level: 80 }
      ]
    },
    {
      title: 'Backend & Databases',
      icon: <Server size={20} style={{ color: 'var(--accent-magenta)' }} />,
      items: [
        { name: 'Python', level: 90 },
        { name: 'FastAPI & Flask', level: 85 },
        { name: 'REST API Development', level: 90 },
        { name: 'MongoDB & MySQL', level: 80 }
      ]
    },
    {
      title: 'Frontend & Automation',
      icon: <Cpu size={20} style={{ color: 'var(--accent-purple)' }} />,
      items: [
        { name: 'React.js', level: 80 },
        { name: 'Playwright (Browser Automation)', level: 85 },
        { name: 'Git & GitHub versioning', level: 85 }
      ]
    }
  ];

  const highlights = [
    'Built AI-powered applications using Large Language Models (LLMs)',
    'Developed scalable REST APIs with FastAPI & Flask',
    'Created RAG-based Document Q&A Chatbots',
    'Designed multi-agent AI workflows using LangGraph, LangChain, and MCP',
    'Automated browser tasks and testing using Playwright',
    'Integrated databases and backend services for production-ready applications',
    'Built responsive web applications with React.js'
  ];

  return (
    <section id="skills">
      <h2 className="section-title">Technical Expertise</h2>
      
      {/* Skill Gauges Grid */}
      <div className="skills-container" style={{ marginBottom: '3rem' }}>
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            className="skills-category glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {cat.icon}
              {cat.title}
            </h3>
            
            <div className="skills-grid">
              {cat.items.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{skill.name}</span>
                    <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: sIdx * 0.1 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Highlights & Bio Quote Block */}
      <motion.div
        className="glass-panel"
        style={{ padding: '2.5rem', maxWidth: '1100px', margin: '0 auto', width: '100%' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="skills-competencies-grid">
          <div>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Terminal size={20} />
              Core Competencies & Accomplishments
            </h3>
            <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {highlights.map((text, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="skills-mission-block">
            <h4 style={{ fontSize: '1.1rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
              Mission Statement
            </h4>
            <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#e2e8f0', borderLeft: '3px solid var(--accent-magenta)', paddingLeft: '1rem', lineHeight: '1.6' }}>
              "I'm passionate about solving real-world problems with AI, designing intelligent automation, and building scalable backend systems."
            </blockquote>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
