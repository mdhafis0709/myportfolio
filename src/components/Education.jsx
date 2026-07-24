import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const educationItems = [
    {
      period: '2020 – 2024',
      degree: 'B.TECH - INFORMATION TECHNOLOGY',
      institution: 'Hindusthan Institute of Technology',
      location: 'Coimbatore, India',
      detail: 'CGPA: 8.03 / 10.0',
      icon: <GraduationCap size={22} />
    },
    {
      period: '2019 – 2020',
      degree: 'HSC (Higher Secondary Certificate)',
      institution: "St. Antony's Matriculation Higher Secondary School",
      location: 'Thiruthuraipoondi, India',
      detail: 'Score: 65%',
      icon: <Award size={22} />
    },
    {
      period: '2017 – 2018',
      degree: 'SSLC (Secondary School Leaving Certificate)',
      institution: "St. Antony's Matriculation Higher Secondary School",
      location: 'Thiruthuraipoondi, India',
      detail: 'Score: 76%',
      icon: <Award size={22} />
    }
  ];

  return (
    <section id="education">
      <h2 className="section-title">Education History</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        {educationItems.map((edu, idx) => (
          <motion.div
            key={idx}
            className="glass-panel education-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div style={{ background: 'rgba(236, 56, 188, 0.1)', padding: '15px', borderRadius: '50%', color: 'var(--accent-magenta)', flexShrink: 0 }}>
              {edu.icon}
            </div>
            
            <div style={{ flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 600 }}>
                  {edu.period}
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {edu.location}
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '5px', color: '#fff' }}>
                {edu.degree}
              </h3>
              
              <p style={{ color: 'var(--accent-magenta)', fontWeight: 500, fontSize: '1rem', marginTop: '2px' }}>
                {edu.institution}
              </p>
              
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.04)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '8px', fontFamily: 'var(--font-mono)' }}>
                {edu.detail}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
