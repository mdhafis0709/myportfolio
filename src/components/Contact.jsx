import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';

// Custom inline SVG icons to avoid version export problems with lucide-react
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // Paste your Google Apps Script Web App URL here
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRsG71rFf1SwO3TeueV3h9TfOAuW3aD657hRsuxUIWpzqVIEBKe7nD0M5N61AVQnLhiQ/exec";

    if (SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE") {
      // Mock success if URL is not configured yet
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, 800);
      return;
    }

    const formDataBody = new URLSearchParams();
    formDataBody.append('name', formData.name);
    formDataBody.append('email', formData.email);
    formDataBody.append('message', formData.message);

    fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formDataBody.toString(),
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        setErrorMsg('Transmission failed. Please contact directly via email.');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container">
        {/* Left Side: Contact Information */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-card glass-panel" style={{ height: '100%' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <Sparkles size={20} style={{ color: 'var(--accent-cyan)' }} />
              Recruiter Hub
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Feel free to reach out directly through any of these communication channels, or send a message using the quick portal form.
            </p>

            <div className="contact-item" style={{ marginTop: '1.5rem' }}>
              <div className="contact-icon-wrapper">
                <Mail size={20} />
              </div>
              <div>
                <div className="contact-label">Email</div>
                <a href="mailto:mdhafis0709@gmail.com" className="contact-value">mdhafis0709@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <Phone size={20} />
              </div>
              <div>
                <div className="contact-label">Phone</div>
                <a href="tel:+919791431899" className="contact-value">+91 9791431899</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <MapPin size={20} />
              </div>
              <div>
                <div className="contact-label">Location</div>
                <span className="contact-value" style={{ cursor: 'default' }}>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '15px', marginTop: 'auto', paddingTop: '20px' }}>
              <a href="https://linkedin.com/in/mdhafis0709" target="_blank" rel="noreferrer" className="contact-icon-wrapper" style={{ textDecoration: 'none' }} title="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://github.com/mdhafis0709" target="_blank" rel="noreferrer" className="contact-icon-wrapper" style={{ textDecoration: 'none' }} title="GitHub">
                <GithubIcon />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <form className="contact-form glass-panel" onSubmit={handleSubmit}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '2rem 0' }}
              >
                <div style={{ fontSize: '3rem', color: 'var(--accent-cyan)' }}>✓</div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginTop: '10px' }}>Message Transmitted!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '5px' }}>
                  Thank you for reaching out. Mohamed Hafis will respond shortly.
                </p>
                <button
                  type="button"
                  className="btn-secondary"
                  style={{ marginTop: '20px' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    className="form-control"
                    placeholder="Type your message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={isSubmitting} 
                  style={{ width: '100%', justifyContent: 'center', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Transmitting...' : 'Transmit Message'}
                  <Send size={18} />
                </button>
                {errorMsg && (
                  <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '10px', textAlign: 'center', fontFamily: 'var(--font-mono)' }}>
                    {errorMsg}
                  </p>
                )}
              </>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
