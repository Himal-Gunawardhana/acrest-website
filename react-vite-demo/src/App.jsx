import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse position relative to center of screen
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Background gradients outside of root to take full viewport */}
      {/* This is handled in index.html or we can portal it. 
          For simplicity, we placed them in a fixed position in index.css */}
          
      <div className="bg-gradients">
        <div 
          className="blob blob-1" 
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        ></div>
        <div 
          className="blob blob-2"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        ></div>
      </div>
      
      <div className="app-container">
        <div className="glass-card">
          <h1 className="title">Stellar React</h1>
          <p className="subtitle">
            Experience the future of web design. Built with React and Vite, featuring 
            modern glassmorphism, dynamic gradients, and fluid micro-animations.
          </p>
          
          <button 
            className="action-btn"
            onClick={() => setCount((c) => c + 1)}
          >
            Cosmic Clicks: {count}
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">10x</div>
            <div className="stat-label">Faster Build</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">Zero</div>
            <div className="stat-label">Config Required</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">100%</div>
            <div className="stat-label">Wow Factor</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
