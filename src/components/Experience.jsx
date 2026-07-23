import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      date: '2025/04 – 2025/12',
      role: 'Technical Support Engineer',
      company: 'Worktual Innovations Pvt Ltd',
      location: 'Chennai, India',
      tasks: [
        'Provide technical support for multiple SaaS-based products including Contact Center as a Service (CCaaS), Chatbots, Customer Value Management (CVM), Customer Data Platform (CDP), and Ticketing Solutions.',
        'Act as the primary point of contact for clients, handling escalated issues and coordinating with the development team to ensure timely resolution.',
        'Conduct manual testing across 7+ products to identify, document, and report issues, ensuring product stability and quality.',
        'Perform end-to-end product implementation for new customers, including setup, configuration, and onboarding support.'
      ]
    },
    {
      date: '2024/01 – 2024/06',
      role: 'Software Developer Internship',
      company: 'EVN Management Service Pvt Ltd',
      location: 'Chennai, India',
      tasks: [
        'Assisted in designing and developing scalable web applications using React.js and Node.js.',
        'Contributed to backend logic implementation and database schema design using Python and SQL.',
        'Supported debugging and performance optimization tasks for existing modules.',
        'Collaborated with cross-functional teams following Agile/Scrum methodology.'
      ]
    }
  ];

  return (
    <section id="experience">
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="timeline">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`timeline-item ${isLeft ? 'timeline-left' : 'timeline-right'}`}
              initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="timeline-content glass-panel">
                <span className="timeline-date">
                  <Calendar size={14} style={{ marginRight: '6px', display: 'inline', verticalAlign: 'middle' }} />
                  {exp.date}
                </span>
                
                <h3 className="timeline-role">{exp.role}</h3>
                
                <div className="timeline-org" style={{ display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginTop: '4px' }}>
                  <span style={{ fontWeight: 600 }}>{exp.company}</span>
                  <span style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', fontSize: '0.9rem' }}>
                    <MapPin size={14} style={{ marginRight: '3px' }} />
                    {exp.location}
                  </span>
                </div>

                <ul className="timeline-list" style={{ marginTop: '1rem' }}>
                  {exp.tasks.map((task, tIdx) => (
                    <li key={tIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
