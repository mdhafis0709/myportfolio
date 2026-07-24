import React from 'react';
import Navbar from './components/Navbar';
import Canvas3D from './components/Canvas3D';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      {/* 3D Canvas Background */}
      <Canvas3D />

      {/* Navigation Header */}
      <Navbar />

      {/* Scrolling Content Blocks */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Landing */}
        <Hero />

        {/* Interactive Terminal Widget (Recruiter Hub Highlight) */}
        <div className="terminal-section-wrapper">
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '1.5rem' }}>
            &gt;_ Interactive Recruiter Terminal
          </h2>
          <Terminal />
        </div>

        {/* Professional Experience */}
        <Experience />

        {/* Key Projects */}
        <Projects />

        {/* Technical Expertise */}
        <Skills />

        {/* Education Timeline */}
        <Education />

        {/* Contact Portal */}
        <Contact />

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Mohamed Hafis. Built with React, Three.js, and Vanilla CSS.</p>
        </footer>
      </div>
    </>
  );
}
