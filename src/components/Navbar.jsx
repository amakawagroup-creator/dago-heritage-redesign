import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../logo utama.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Store pending scroll target after cross-page navigation
  const pendingScroll = useRef(null);

  // ── Detect scroll untuk background navbar ──────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Close mobile menu saat route berubah ───────────────────────
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // ── Lock body scroll saat mobile menu terbuka ──────────────────
  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', mobileOpen);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [mobileOpen]);

  // ── Execute pending scroll after navigation completes ──────────
  useEffect(() => {
    if (!pendingScroll.current) return;
    const { targetId, targetPath } = pendingScroll.current;

    // Only execute if we're now on the right page
    if (location.pathname === targetPath) {
      pendingScroll.current = null;
      // Use requestAnimationFrame to wait for DOM paint
      const tryScroll = (attempts = 0) => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 88;
          const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        } else if (attempts < 10) {
          // Retry up to 10 times (500ms total) if element not yet rendered
          setTimeout(() => tryScroll(attempts + 1), 50);
        }
      };
      requestAnimationFrame(() => tryScroll());
    }
  }, [location.pathname]);

  // ── Scroll helper ───────────────────────────────────────────────
  const scrollToSection = (e, targetId, targetPath) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname === targetPath) {
      // Already on the right page — scroll directly
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 88;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    } else {
      // Navigate first, then scroll after route change triggers the effect above
      pendingScroll.current = { targetId, targetPath };
      navigate(targetPath);
    }
  };

  // ── Navigation links ────────────────────────────────────────────
  const navLinks = [
    { label: 'Home',          path: '/' },
    { label: 'Golf Course',   path: '/course' },
    { label: 'Green Fees',    path: '/green-fees' },
    { label: 'Driving Range', path: '/driving-range' },
    { label: "What's On",     path: '/', anchor: 'whatson' },
    { label: 'About Us',      path: '/course', anchor: 'about' },
    { label: 'Contact Us',    path: '/contact' },
  ];

  // ── Active state ────────────────────────────────────────────────
  const isActive = (link) => {
    if (link.anchor) return false; // anchor links never show as "active page"
    return location.pathname === link.path;
  };

  // ── Shared link style ───────────────────────────────────────────
  const linkStyle = (active) => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    fontWeight: active ? 600 : 500,
    color: active ? '#c9a84c' : '#ffffff',
    textDecoration: 'none',
    letterSpacing: '0.03em',
    position: 'relative',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  });

  const activeUnderline = (
    <span style={{
      position: 'absolute',
      bottom: '-6px',
      left: 0,
      right: 0,
      height: '2px',
      backgroundColor: '#c9a84c',
      borderRadius: '2px',
    }} />
  );

  const hoverHandlers = (active) => ({
    onMouseEnter: (e) => { if (!active) e.currentTarget.style.color = '#c9a84c'; },
    onMouseLeave: (e) => { if (!active) e.currentTarget.style.color = '#ffffff'; },
  });

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 9999,
        backgroundColor: scrolled ? 'rgba(15,26,20,0.97)' : 'rgba(15,26,20,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid rgba(201,168,76,0.15)'
          : '1px solid rgba(255,255,255,0.08)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
        transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px',
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', zIndex: 10001, flexShrink: 0 }}>
            <img src={logo} alt="Dago Heritage Golf & Resort" style={{ height: '52px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Menu */}
          <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link) => {
              const active = isActive(link);

              if (link.anchor) {
                return (
                  <a
                    key={link.label}
                    href={`${link.path}#${link.anchor}`}
                    onClick={(e) => scrollToSection(e, link.anchor, link.path)}
                    style={linkStyle(false)}
                    {...hoverHandlers(false)}
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  to={link.path}
                  style={linkStyle(active)}
                  {...hoverHandlers(active)}
                >
                  {link.label}
                  {active && activeUnderline}
                </Link>
              );
            })}
          </div>

          {/* Hamburger */}
          <button
            className="mobile-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '40px',
              height: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10001,
              padding: 0,
            }}
          >
            {[
              mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
              null, // middle bar
              mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            ].map((transform, i) => (
              <span key={i} style={{
                width: '24px',
                height: '2px',
                backgroundColor: '#ffffff',
                borderRadius: '2px',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: transform ?? 'none',
                opacity: i === 1 && mobileOpen ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              zIndex: 9998,
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 0, right: 0, bottom: 0,
              width: '280px',
              maxWidth: '85vw',
              backgroundColor: '#0f1a14',
              zIndex: 10000,
              padding: '96px 2rem 2rem',
              overflowY: 'auto',
              boxShadow: '-4px 0 24px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {navLinks.map((link, index) => {
                const active = isActive(link);
                const sharedMobileStyle = {
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: active ? 600 : 500,
                  color: active ? '#c9a84c' : '#ffffff',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'color 0.2s ease',
                };

                const activeDot = active && (
                  <span style={{ width: '6px', height: '6px', backgroundColor: '#c9a84c', borderRadius: '50%', flexShrink: 0 }} />
                );

                if (link.anchor) {
                  return (
                    <motion.a
                      key={link.label}
                      href={`${link.path}#${link.anchor}`}
                      onClick={(e) => scrollToSection(e, link.anchor, link.path)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      style={sharedMobileStyle}
                    >
                      {link.label}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.4 }}>
                        <path d="M4 8H12M12 8L8 4M12 8L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.a>
                  );
                }

                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link to={link.path} style={sharedMobileStyle}>
                      {link.label}
                      {activeDot}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1100px) {
          .desktop-menu { gap: 1.25rem !important; }
        }
        @media (max-width: 900px) {
          .desktop-menu { display: none !important; }
          .mobile-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-hamburger { display: none !important; }
        }
        html { scroll-behavior: smooth; }
        body.mobile-menu-open { overflow: hidden; }
      `}</style>
    </>
  );
};

export default Navbar;
