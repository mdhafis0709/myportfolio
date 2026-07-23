import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const item of navItems) {
        const el = document.getElementById(item.target);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.target);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar-container glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => handleNavClick('home')}>
        <Cpu className="glow-text-cyan" style={{ color: 'var(--accent-cyan)' }} size={24} />
        <span style={{ fontWeight: 800, letterSpacing: '1px', fontSize: '1.2rem', background: 'linear-gradient(90deg, #fff, var(--accent-cyan))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          MD HAFIS
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="nav-links" style={{ display: 'flex', margin: 0, padding: 0 }}>
        {navItems.map((item) => (
          <li key={item.target}>
            <span
              className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
              onClick={() => handleNavClick(item.target)}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
