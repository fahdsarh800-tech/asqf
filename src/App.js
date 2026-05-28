import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(hover: none)').matches;
    if (isMobile) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onEnter = () => { if (ringRef.current) ringRef.current.style.width = '52px'; if (ringRef.current) ringRef.current.style.height = '52px'; };
    const onLeave = () => { if (ringRef.current) ringRef.current.style.width = '32px'; if (ringRef.current) ringRef.current.style.height = '32px'; };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, width: '8px', height: '8px',
        borderRadius: '50%', backgroundColor: '#000', pointerEvents: 'none',
        zIndex: 99999, marginLeft: '-4px', marginTop: '-4px',
        transition: 'opacity 0.2s',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0, width: '32px', height: '32px',
        borderRadius: '50%', border: '1.5px solid rgba(0,0,0,0.5)', pointerEvents: 'none',
        zIndex: 99998, marginLeft: '-16px', marginTop: '-16px',
        transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1), height 0.3s cubic-bezier(0.4,0,0.2,1)',
      }} />
    </>
  );
};

const ScrollProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = (el.scrollTop || document.body.scrollTop) / (el.scrollHeight - el.clientHeight);
      setWidth(Math.round(scrolled * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, height: '3px',
      width: `${width}%`, backgroundColor: '#000',
      zIndex: 99997, transition: 'width 0.1s linear',
      pointerEvents: 'none',
    }} />
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App font-tajawal">
          <CustomCursor />
          <ScrollProgressBar />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
