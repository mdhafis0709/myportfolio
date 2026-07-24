import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
  const [history, setHistory] = useState([
    { text: 'System initialized. Connected to Mohamed Hafis Core Engine.', type: 'info' },
    { text: 'Type "help" or click one of the actions below to begin exploring.', type: 'info' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const commands = {
    help: 'List of available commands: [about], [skills], [projects], [experience], [education], [contact], [clear]',
    about: "Mohamed Hafis - Python Developer & Full-Stack Engineer based in Chennai. Passionate about solving real-world problems with AI, designing intelligent automation, and building scalable backend systems.",
    skills: "AI & Backend: Python, FastAPI, Flask, REST APIs, Generative AI & LLM, LangChain, LangGraph, MCP, AI Agents, RAG, Playwright, MongoDB, MySQL.\nFrontend & Tools: React.js, Git, GitHub.",
    projects: '1. AI-Powered Retail CRM (iplacettp): React (Vite), FastAPI (Python), MongoDB, Groq LLM (Llama 3.3 70B).\n2. RAG-based Document Q&A Chatbot: Hugging Face, MongoDB Atlas Vector Search, Groq LLM.\n3. Grocery Delivery App - Buys: React-based store and checkout.\n4. News App with Chatbot: React-based with real-time news updates.\n5. College Website: Tailwind & Bootstrap.',
    experience: '1. Technical Support Engineer at Worktual Innovations (2025/04 - 2025/12). Provided support for CCaaS, Chatbots, and managed client resolutions.\n2. Software Developer Intern at EVN Management Service (2024/01 - 2024/06). Backend logic and database design.',
    education: 'B.TECH in Information Technology from Hindusthan Institute of Technology (2020 - 2024) - CGPA 8.03.\nHSC St. Antony Matriculation Higher Secondary School (2020) - 65%.\nSSLC St. Antony Matriculation Higher Secondary School (2018) - 76%.',
    contact: 'Email: mdhafis0709@gmail.com | Phone: +91 9791431899 | GitHub: mdhafis0709 | LinkedIn: mdhafis0709'
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    
    if (trimmed === '') return;

    let response = '';
    let responseType = 'output';

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (commands[trimmed]) {
      response = commands[trimmed];
    } else {
      response = `Command "${cmdText}" not found. Type "help" for a list of valid commands.`;
      responseType = 'error';
    }

    setHistory((prev) => [
      ...prev,
      { text: `visitor@hafis-portfolio:~$ ${cmdText}`, type: 'prompt' },
      { text: response, type: responseType }
    ]);
    
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="terminal-wrapper glass-panel">
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot dot-red" />
          <div className="terminal-dot dot-yellow" />
          <div className="terminal-dot dot-green" />
        </div>
        <div className="terminal-title">interactive-console.sh</div>
        <div style={{ width: '50px' }} />
      </div>

      <div className="terminal-body">
        {history.map((line, idx) => (
          <div key={idx} className={`terminal-line`}>
            {line.type === 'prompt' && (
              <span className="terminal-prompt">
                <span className="prompt-desktop">{line.text}</span>
                <span className="prompt-mobile">{line.text.replace('visitor@hafis-portfolio:~$', 'visitor:~$')}</span>
              </span>
            )}
            {line.type !== 'prompt' && (
              <span 
                style={{ 
                  color: line.type === 'error' ? '#ef4444' : line.type === 'info' ? '#a5f3fc' : '#38bdf8',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {line.text}
              </span>
            )}
          </div>
        ))}
        
        <div className="terminal-input-container">
          <span className="terminal-prompt">
            <span className="prompt-desktop">visitor@hafis-portfolio:~$</span>
            <span className="prompt-mobile">visitor:~$</span>
          </span>
          <input
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command..."
            autoFocus
          />
        </div>
        <div ref={terminalEndRef} />
      </div>

      {/* Recruiter Quick Actions */}
      <div style={{ background: 'rgba(20, 18, 38, 0.5)', padding: '15px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
          Quick commands:
        </p>
        <div className="terminal-help-links">
          {Object.keys(commands).map((cmd) => (
            <span
              key={cmd}
              className="terminal-link"
              onClick={() => executeCommand(cmd)}
            >
              {cmd}
            </span>
          ))}
          <span className="terminal-link" onClick={() => executeCommand('clear')} style={{ color: '#f43f5e' }}>
            clear
          </span>
        </div>
      </div>
    </div>
  );
}
