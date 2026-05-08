import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import usePageTitle from '../hooks/usePageTitle';
import heroDesktop from '../hero image dekstop.jpg';
import featureImg from '../Feature - Driving Range.jpg';
import logo from '../logo utama.png';
import hole1  from '../hole 1 par 5.jpg';
import hole2  from '../hole 2 par 5.jpg';
import hole3  from '../hole 3 par 3.jpg';
import hole4  from '../hole 4 par 4.jpg';
import hole5  from '../hole 5 par 4.jpg';
import hole6  from '../hole 6 par 4.jpg';
import hole7  from '../hole 7 par 4.jpg';
import hole8  from '../hole 8 par 4.jpg';
import hole9  from '../hole 9 par 4.jpg';
import hole10 from '../hole 10 par 4.jpg';
import hole11 from '../hole 11 par 3.jpg';
import hole12 from '../hole 12 par 4.jpg';
import hole13 from '../hole 13 par 4.jpg';
import hole14 from '../hole 14 par 4.jpg';
import hole15 from '../hole 15 par 3.jpg';
import hole16 from '../hole 16 par 4.jpg';
import hole17 from '../hole 17 par 4.jpg';
import hole18 from '../hole 18 par 5.jpg';

// ── Responsive hook ──────────────────────────────────────────────
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

// Gallery imports
import galery1  from '../galerrty 1.jpg';
import galery2  from '../galerrty 2.jpg';
import galery3  from '../galery 3.jpg';
import galery4a from '../galerrty 4.jpg';
import galery4b from '../galery 4.jpg';
import galery6  from '../galery 6.jpg';
import galery7  from '../galery 7.jpg';
import galery8  from '../galery 8.jpg';
import galery9  from '../galery 9.jpg';
import galery10 from '../galery 10.jpg';
import galery11 from '../galery 11.jpg';
import galery12 from '../galery 12.jpg';
import galery13 from '../galery 13.jpg';

// ── Animation variants ──────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeInUpDelayed = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 70 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.15 } },
};

// ── Stat item data ───────────────────────────────────────────────
const stats = [
  { value: '1917', label: 'Tahun Berdiri' },
  { value: '18', label: 'Hole' },
  { value: 'Par 70', label: 'Par Course' },
  { value: '5.105 m', label: 'Panjang Course' },
];

// ── Course Features data ─────────────────────────────────────────
const courseFeatures = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="3" fill="#1a5c38" />
        <path d="M16 4C16 4 8 10 8 18C8 22.4 11.6 26 16 26C20.4 26 24 22.4 24 18C24 10 16 4 16 4Z" stroke="#1a5c38" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M4 28L12 20" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M28 28L20 20" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Lapangan 18 Hole',
    desc: 'Layout 18 hole par 70 sepanjang 5.105 meter yang dirancang untuk menantang pegolf dari semua level, dari pemula hingga profesional.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="20" width="24" height="4" rx="1" stroke="#1a5c38" strokeWidth="1.8" />
        <path d="M10 20V12L16 8L22 12V20" stroke="#1a5c38" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M13 20V16H19V20" stroke="#1a5c38" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 8V4" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="3" r="1.5" fill="#c9a84c" />
      </svg>
    ),
    title: 'Warisan Lapangan Sejak 1917',
    desc: 'Salah satu lapangan golf tertua di Indonesia. Berdiri sejak era kolonial Belanda dan direnovasi oleh arsitek Jepang Chohei Miyazawa pada 1994.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M4 22C8 18 12 14 16 16C20 18 24 12 28 10" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 26C8 22 12 20 16 22C20 24 24 18 28 16" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="8" cy="10" r="3" stroke="#1a5c38" strokeWidth="1.8" />
        <path d="M8 7V4" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Pemandangan Pegunungan',
    desc: 'Terletak di ketinggian 950–1.065 mdpl, setiap hole menawarkan pemandangan lembah dan hutan pinus yang memukau dengan udara pegunungan yang sejuk.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26L6 14L16 6L26 14L26 26" stroke="#1a5c38" strokeWidth="1.8" strokeLinejoin="round" />
        <rect x="12" y="18" width="8" height="8" stroke="#1a5c38" strokeWidth="1.8" />
        <path d="M10 14H22" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Clubhouse & Toko Pro',
    desc: 'Fasilitas clubhouse modern dengan pro shop lengkap, loker room, restoran, dan area istirahat yang nyaman untuk pegolf dan tamu.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="#1a5c38" strokeWidth="1.8" />
        <path d="M4 14H28" stroke="#1a5c38" strokeWidth="1.8" />
        <circle cx="10" cy="20" r="2" fill="#c9a84c" />
        <path d="M16 20H22" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Sekolah Golf',
    desc: 'Program golf school dengan instruktur berpengalaman untuk semua usia dan level. Tersedia sesi privat maupun kelas grup dengan jadwal fleksibel.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L20 12L28 13L22 19L24 28L16 24L8 28L10 19L4 13L12 12L16 4Z" stroke="#1a5c38" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 10L18 14L22 15L19 18L20 22L16 20L12 22L13 18L10 15L14 14L16 10Z" fill="#c9a84c" fillOpacity="0.3" stroke="#c9a84c" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Area Latihan',
    desc: 'Area practice luas mencakup driving range, putting green, dan chipping area. Ideal untuk pemanasan sebelum bermain atau latihan rutin.',
  },
];

// ── Stagger container ────────────────────────────────────────────
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ── Keunggulan list ──────────────────────────────────────────────
const highlights = [
  'Dirancang ulang oleh arsitek golf Jepang Chohei Miyazawa (1994)',
  'Ketinggian 950–1.065 mdpl dengan udara sejuk khas Bandung',
  'Salah satu lapangan golf tertua dan paling bersejarah di Indonesia',
  'Pemandangan lembah dan hutan pinus yang memukau di setiap hole',
  'Area practice luas, pro-shop, golf school, dan restoran',
  'Desain bergaya British klasik yang menantang namun nyaman',
];

// ── Gallery data ─────────────────────────────────────────────────
const galleryImages = [
  { src: galery1,  alt: 'Galeri Dago Heritage 1',  span: 'wide'   },
  { src: galery2,  alt: 'Galeri Dago Heritage 2',  span: 'normal' },
  { src: galery3,  alt: 'Galeri Dago Heritage 3',  span: 'normal' },
  { src: galery4a, alt: 'Galeri Dago Heritage 4',  span: 'normal' },
  { src: galery4b, alt: 'Galeri Dago Heritage 5',  span: 'tall'   },
  { src: galery6,  alt: 'Galeri Dago Heritage 6',  span: 'normal' },
  { src: galery7,  alt: 'Galeri Dago Heritage 7',  span: 'wide'   },
  { src: galery8,  alt: 'Galeri Dago Heritage 8',  span: 'normal' },
  { src: galery9,  alt: 'Galeri Dago Heritage 9',  span: 'normal' },
  { src: galery10, alt: 'Galeri Dago Heritage 10', span: 'normal' },
  { src: galery11, alt: 'Galeri Dago Heritage 11', span: 'normal' },
  { src: galery12, alt: 'Galeri Dago Heritage 12', span: 'normal' },
  { src: galery13, alt: 'Galeri Dago Heritage 13', span: 'normal' },
];

// ── GalleryItem Component ────────────────────────────────────────
const GalleryItem = ({ image, index, onClick }) => {
  const [hovered, setHovered] = useState(false);

  const gridStyle = {
    wide:   { gridColumn: 'span 2' },
    tall:   { gridRow: 'span 2' },
    normal: {},
  };

  return (
    <motion.div
      variants={cardFadeUp}
      onClick={() => onClick(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '2px',
        backgroundColor: '#1a2e20',
        ...gridStyle[image.span],
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '220px',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />

      {/* Hover overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(15,26,20,0.55)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}>
        {/* Zoom icon */}
        <div style={{
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          border: '2px solid #c9a84c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: hovered ? 'scale(1)' : 'scale(0.7)',
          transition: 'transform 0.3s ease',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="8" cy="8" r="5" stroke="#c9a84c" strokeWidth="1.8" />
            <path d="M12 12L16 16" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M6 8H10M8 6V10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <span style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.85)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          Lihat Foto
        </span>
      </div>

      {/* Gold border on hover */}
      <div style={{
        position: 'absolute',
        inset: 0,
        border: '2px solid #c9a84c',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }} />
    </motion.div>
  );
};

// ── Lightbox Component ───────────────────────────────────────────
const Lightbox = ({ images, activeIndex, onClose, onPrev, onNext }) => {
  if (activeIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(0,0,0,0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        {/* Image container */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
          style={{ position: 'relative', maxWidth: '90vw', maxHeight: '85vh' }}
        >
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '2px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            }}
          />

          {/* Caption */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '0.75rem 1rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.8)',
            letterSpacing: '0.05em',
          }}>
            {images[activeIndex].alt}
          </div>
        </motion.div>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: '1.5rem',
            right: '1.5rem',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.3)',
            backgroundColor: 'rgba(255,255,255,0.1)',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Prev button */}
        <button
          onClick={e => { e.stopPropagation(); onPrev(); }}
          style={{
            position: 'fixed',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.5)',
            backgroundColor: 'rgba(15,26,20,0.8)',
            color: '#c9a84c',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
          }}
        >
          ‹
        </button>

        {/* Next button */}
        <button
          onClick={e => { e.stopPropagation(); onNext(); }}
          style={{
            position: 'fixed',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            border: '1px solid rgba(201,168,76,0.5)',
            backgroundColor: 'rgba(15,26,20,0.8)',
            color: '#c9a84c',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
          }}
        >
          ›
        </button>

        {/* Counter */}
        <div style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.15em',
        }}>
          {activeIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── FeatureCard Component ────────────────────────────────────────
const FeatureCard = ({ feature }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardFadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#1a2e20' : '#162318',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.06)'}`,
        padding: '2rem',
        borderRadius: '2px',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Icon container */}
      <div style={{
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        backgroundColor: hovered ? 'rgba(201,168,76,0.12)' : 'rgba(26,92,56,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        transition: 'background-color 0.3s ease',
      }}>
        {feature.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.2rem',
        fontWeight: 700,
        color: hovered ? '#c9a84c' : '#ffffff',
        margin: '0 0 0.75rem 0',
        lineHeight: 1.3,
        transition: 'color 0.3s ease',
      }}>
        {feature.title}
      </h3>

      {/* Divider */}
      <div style={{
        width: hovered ? '2.5rem' : '1.5rem',
        height: '2px',
        backgroundColor: '#c9a84c',
        marginBottom: '1rem',
        transition: 'width 0.3s ease',
      }} />

      {/* Description */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.75,
        margin: 0,
      }}>
        {feature.desc}
      </p>
    </motion.div>
  );
};

// ── Hole data ────────────────────────────────────────────────────

const holes = [
  { num: 1,  par: 5, img: hole1  },
  { num: 2,  par: 5, img: hole2  },
  { num: 3,  par: 3, img: hole3  },
  { num: 4,  par: 4, img: hole4  },
  { num: 5,  par: 4, img: hole5  },
  { num: 6,  par: 4, img: hole6  },
  { num: 7,  par: 4, img: hole7  },
  { num: 8,  par: 4, img: hole8  },
  { num: 9,  par: 4, img: hole9  },
  { num: 10, par: 4, img: hole10 },
  { num: 11, par: 3, img: hole11 },
  { num: 12, par: 4, img: hole12 },
  { num: 13, par: 4, img: hole13 },
  { num: 14, par: 4, img: hole14 },
  { num: 15, par: 3, img: hole15 },
  { num: 16, par: 4, img: hole16 },
  { num: 17, par: 4, img: hole17 },
  { num: 18, par: 5, img: hole18 },
];

// ── HoleCarousel Component ───────────────────────────────────────
const HoleCarousel = ({ inView }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent(i => (i + 1) % holes.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const goTo = (i) => {
    setCurrent(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  };
  const prev = () => goTo((current - 1 + holes.length) % holes.length);
  const next = () => goTo((current + 1) % holes.length);
  const hole = holes[current];

  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* Content wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', padding: '1rem 0 2rem' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 0.5rem 0' }}>
          Hole Information
        </h3>
        {/* Hole number tabs */}
        <div className="gc-hole-tabs">
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', marginRight: '0.5rem', alignSelf: 'center', flexShrink: 0 }}>HOLE</span>
          {holes.map((h, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.8rem',
                fontWeight: i === current ? 700 : 400,
                color: i === current ? '#c9a84c' : 'rgba(255,255,255,0.6)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.2rem 0.4rem',
                flexShrink: 0,
                borderBottom: i === current ? '2px solid #c9a84c' : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {h.num}
            </button>
          ))}
        </div>
      </div>

      {/* Slide */}
      {/* Slide */}
      <div className="gc-container" style={{ maxWidth: '1000px' }}>
        {/* Slide wrapper */}
        <div className="gc-hole-wrap">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ position: 'relative' }}
            >
              {/* Gambar penuh */}
              <img
                src={hole.img}
                alt={`Hole ${hole.num}`}
                className="gc-hole-img"
              />

              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to left, rgba(0,0,0,0.15) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />

              {/* Info card */}
              <div className="gc-hole-card">
                {/* Logo area */}
                <div className="gc-hole-card-logo" style={{ textAlign: 'center' }}>
                  <img src={logo} alt="Dago Heritage" style={{ height: '44px', objectFit: 'contain', marginBottom: '0.2rem' }} />
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', color: '#888', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>Golf Course</p>
                </div>

                {/* Divider */}
                <div className="gc-hole-card-divider" style={{ height: '1px', backgroundColor: '#e0dbd0' }} />

                {/* Hole number & par */}
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 900, color: '#0f1a14', margin: '0 0 0.2rem 0', lineHeight: 1 }}>
                    HOLE {hole.num}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: '#444', margin: 0 }}>Par {hole.par}</p>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', backgroundColor: '#e0dbd0', width: '100%' }} />

                {/* Distance legend */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {[
                    { color: '#1a56db', label: hole.par === 3 ? '150' : hole.par === 5 ? '494' : '380' },
                    { color: '#d1d5db', label: hole.par === 3 ? '138' : hole.par === 5 ? '484' : '360', border: '1px solid #bbb' },
                    { color: '#dc2626', label: hole.par === 3 ? '125' : hole.par === 5 ? '451' : '340' },
                  ].map((d, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <div style={{ width: '13px', height: '13px', backgroundColor: d.color, border: d.border || 'none', borderRadius: '2px', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', fontWeight: 600, color: '#222' }}>{d.label}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', color: '#aaa', margin: 0 }}>Distance in yards</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next */}
          <button onClick={prev} style={{ position: 'absolute', left: '0.75rem', top: '40%', transform: 'translateY(-50%)', zIndex: 5, width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.6)', backgroundColor: 'rgba(15,26,20,0.6)', color: '#fff', cursor: 'pointer', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
          <button onClick={next} style={{ position: 'absolute', right: '0.75rem', top: '40%', transform: 'translateY(-50%)', zIndex: 5, width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.6)', backgroundColor: 'rgba(15,26,20,0.6)', color: '#fff', cursor: 'pointer', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '1.25rem' }}>
          {holes.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? '1.5rem' : '0.45rem', height: '0.45rem', borderRadius: '999px', border: 'none', backgroundColor: i === current ? '#c9a84c' : 'rgba(255,255,255,0.35)', cursor: 'pointer', padding: 0, transition: 'width 0.3s ease, background-color 0.3s ease' }} />
          ))}
        </div>
      </div>
      </div>{/* end content wrapper */}
    </div>
  );
};

// ── GolfCourse Component ─────────────────────────────────────────
const GolfCourse = () => {
  usePageTitle('Golf Course');
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: '-80px' });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: '-80px' });
  const isMobile = useIsMobile();

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length);
  const nextImage = () => setLightboxIndex(i => (i + 1) % galleryImages.length);

  return (
    <div style={{ backgroundColor: '#0f1a14', minHeight: '100vh' }}>

      {/* ── Global responsive styles ── */}
      <style>{`
        * { box-sizing: border-box; }

        .gc-hero-content { padding: 0 1.5rem; }
        .gc-section-pad  { padding: 5rem 0; }
        .gc-container    { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        .gc-2col         { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .gc-3col         { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .gc-stats        { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px; background: #d4cfc6; }
        .gc-img-hero     { height: 380px; }
        .gc-carousel-box { aspect-ratio: 16/9; }
        .gc-about-2col   { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }

        /* Hole slide */
        .gc-hole-wrap    { position: relative; border-radius: 16px; overflow: hidden;
                           box-shadow: 0 20px 60px rgba(0,0,0,0.4); background: #0f1a14; }
        .gc-hole-img     { width: 100%; height: 460px; object-fit: cover; display: block; }
        .gc-hole-card    { position: absolute; top: 1.25rem; right: 1.25rem; bottom: 1.25rem;
                           width: 220px; background: rgba(255,255,255,0.96); border-radius: 12px;
                           padding: 1.5rem 1.25rem; display: flex; flex-direction: column;
                           justify-content: center; gap: 0.85rem;
                           box-shadow: 0 8px 32px rgba(0,0,0,0.35); }

        /* Hole tabs scroll */
        .gc-hole-tabs    { display: flex; flex-wrap: wrap; justify-content: center;
                           gap: 0.25rem; padding: 0 1rem; margin-top: 0.75rem; }

        /* ── Tablet (≤ 900px) ── */
        @media (max-width: 900px) {
          .gc-3col         { grid-template-columns: repeat(2, 1fr); }
          .gc-about-2col   { gap: 3rem; }
          .gc-hole-img     { height: 380px; }
          .gc-hole-card    { width: 190px; padding: 1.25rem 1rem; gap: 0.7rem; }
        }

        /* ── Mobile (≤ 768px) ── */
        @media (max-width: 768px) {
          .gc-section-pad  { padding: 3rem 0; }
          .gc-container    { padding: 0 1rem; }
          .gc-2col         { grid-template-columns: 1fr; gap: 2rem; }
          .gc-3col         { grid-template-columns: 1fr; gap: 1rem; }
          .gc-stats        { grid-template-columns: repeat(2, 1fr); }
          .gc-img-hero     { height: 220px; }
          .gc-carousel-box { aspect-ratio: 4/3; }
          .gc-about-2col   { grid-template-columns: 1fr; gap: 2rem; }
          .gc-hero-content { padding: 0 1rem; }

          /* Hole slide — card pindah ke bawah gambar */
          .gc-hole-wrap    { border-radius: 12px; }
          .gc-hole-img     { height: 240px; }
          .gc-hole-card    { position: static; width: 100%; border-radius: 0 0 12px 12px;
                             flex-direction: row; flex-wrap: wrap; align-items: center;
                             gap: 0.6rem; padding: 1rem 1.25rem;
                             background: #fff; box-shadow: none; }
          .gc-hole-card-logo   { display: none; }
          .gc-hole-card-divider { display: none; }

          /* Hole tabs — scroll horizontal */
          .gc-hole-tabs    { flex-wrap: nowrap; overflow-x: auto; justify-content: flex-start;
                             padding: 0 1rem; scrollbar-width: none; -ms-overflow-style: none; }
          .gc-hole-tabs::-webkit-scrollbar { display: none; }
        }

        /* ── Small mobile (≤ 480px) ── */
        @media (max-width: 480px) {
          .gc-stats        { grid-template-columns: repeat(2, 1fr); }
          .gc-carousel-box { aspect-ratio: 1/1; }
          .gc-hole-img     { height: 200px; }
          .gc-hole-card    { padding: 0.85rem 1rem; gap: 0.5rem; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
        {/* Background */}
        <img
          src={heroDesktop}
          alt="Golf Course Dago Heritage"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,15,10,0.72) 0%, rgba(5,15,10,0.45) 50%, rgba(5,15,10,0.80) 100%)' }} />
        {/* Bottom fade — dihandle wave divider */}

        {/* Content */}
        <div className="gc-hero-content" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>

          {/* ── Emblem / Badge ── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0,
              marginBottom: '2.5rem',
              userSelect: 'none',
            }}
          >
            {/* Top thin line */}
            <div style={{ width: '60px', height: '1px', backgroundColor: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }} />

            {/* DAGO */}
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
              fontWeight: 400,
              letterSpacing: '0.45em',
              color: 'rgba(255,255,255,0.85)',
              textTransform: 'uppercase',
              marginBottom: '0.1rem',
            }}>
              DAGO
            </span>

            {/* HERITAGE — big */}
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#ffffff',
              lineHeight: 1,
              textTransform: 'uppercase',
            }}>
              HERITAGE
            </span>

            {/* 1917 */}
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1.4rem, 4vw, 2.5rem)',
              fontWeight: 300,
              letterSpacing: '0.5em',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.2,
            }}>
              1917
            </span>

            {/* Thin divider line */}
            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.35)', margin: '0.5rem 0' }} />

            {/* Golf Course */}
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.65rem, 1.2vw, 0.8rem)',
              fontWeight: 400,
              letterSpacing: '0.35em',
              color: 'rgba(255,255,255,0.7)',
              textTransform: 'uppercase',
            }}>
              Golf Course
            </span>

            {/* Bottom thin line */}
            <div style={{ width: '60px', height: '1px', backgroundColor: 'rgba(255,255,255,0.5)', marginTop: '0.6rem' }} />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
            style={{ position: 'absolute', bottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>Scroll</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              style={{ width: '1px', height: '2rem', background: 'linear-gradient(to bottom, #c9a84c, transparent)' }} />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WAVE DIVIDER — dark → krem
      ═══════════════════════════════════════════════════════════ */}
      <div style={{ backgroundColor: '#0f1a14', lineHeight: 0, marginBottom: '-2px' }}>
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
          <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#f5f0e8" />
        </svg>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — ABOUT US + HOLE INFORMATION
      ═══════════════════════════════════════════════════════════ */}
      <section ref={aboutRef} style={{ position: 'relative', overflow: 'hidden' }}>

        {/* ── Shared background lapangan golf ── */}
        <img
          src={heroDesktop}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
            filter: 'blur(6px) brightness(0.32)',
            transform: 'scale(1.05)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,25,15,0.52)' }} />

        {/* ── Content wrapper ── */}
        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* ── About Us ── */}
          <div className="gc-container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={aboutInView ? 'visible' : 'hidden'}
              style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}
            >
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 1.5rem 0' }}>
                Tentang Kami
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                Didirikan pada tahun 1917, Dago Heritage Golf Course adalah salah satu lapangan golf tertua di Indonesia yang menawarkan pengalaman bermain golf tak tertandingi. Berlokasi di kawasan Dago Bandung yang indah dengan udara yang sejuk, lapangan golf ini memiliki 18 hole yang dirancang dengan cermat untuk menantang dan menginspirasi pegolf dari semua tingkat kemampuan. Sebagai salah satu destinasi golf bersejarah di Indonesia, Dago Heritage Golf Course tidak hanya menawarkan keindahan alam yang memukau, tetapi juga fasilitas modern dan pelayanan yang ramah. Dengan perpaduan tradisi dan inovasi, kami berkomitmen untuk memberikan pengalaman bermain golf yang tak terlupakan bagi seluruh pengunjung.
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.82)', lineHeight: 1.85, marginBottom: '2rem' }}>
                Bergabunglah bersama kami di Dago Heritage Golf Course dan nikmati keindahan serta tantangan bermain golf di salah satu lapangan golf legendaris di Indonesia.
              </p>

              {/* VIP Room & Restaurant */}
              <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.4rem' }}>VIP Room Golf Course</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: 0 }}>
                    Nikmati kenyamanan dan kemewahan di VIP Room Dago Heritage Golf Course, yang dirancang khusus bagi pegolf yang mencari tempat istirahat eksklusif setelah satu putaran golf yang menantang. Dengan kapasitas hingga 10 orang, ruang VIP kami adalah tempat sempurna untuk bersantai, berdiskusi, atau merayakan kemenangan bersama teman, memastikan pengalaman tak terlupakan bagi pegolf yang menghargai kualitas dan privasi.
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.4rem' }}>Restoran</p>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, margin: 0 }}>
                    Restoran Dago Heritage Golf Course adalah tempat yang sempurna untuk bersantap, bersantai, atau mengadakan acara spesial dengan latar pemandangan yang memukau dan hiburan musik live.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider tipis */}
          <div style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.25)', maxWidth: '1200px', margin: '0 auto' }} />

          {/* ── Hole Information ── */}
          <HoleCarousel inView={aboutInView} />

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — COURSE FEATURES
      ═══════════════════════════════════════════════════════════ */}
      <section ref={featuresRef} className="gc-section-pad" style={{ backgroundColor: '#0f1a14' }}>
        <div className="gc-container">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '1rem' }}>
              Fasilitas &amp; Keunggulan
            </p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, margin: '0 0 1.25rem 0' }}>
              Kenapa Bermain di{' '}
              <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Dago Heritage?</span>
            </h2>
            <div style={{ width: '3.5rem', height: '2px', backgroundColor: '#c9a84c', margin: '0 auto' }} />
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="gc-3col"
            variants={staggerContainer}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
          >
            {courseFeatures.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — GALLERY CAROUSEL
      ═══════════════════════════════════════════════════════════ */}
      <GalleryCarousel />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — ABOUT US
      ═══════════════════════════════════════════════════════════ */}
      <AboutUs />

    </div>
  );
};

// ── Gallery Carousel Component ───────────────────────────────────
const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-slide every 3.5s
  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent(i => (i + 1) % galleryImages.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const goTo = (i) => {
    setCurrent(i);
    setPaused(true);
    setTimeout(() => setPaused(false), 6000);
  };
  const prev = () => goTo((current - 1 + galleryImages.length) % galleryImages.length);
  const next = () => goTo((current + 1) % galleryImages.length);

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
      className="gc-section-pad"
    >
      {/* Background: lapangan golf blur */}
      <img
        src={heroDesktop}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          filter: 'blur(8px) brightness(0.45)',
          transform: 'scale(1.05)',
        }}
      />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,20,12,0.55)' }} />

      {/* Content */}
      <div className="gc-container" style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '0.75rem' }}>
            Galeri Foto
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.4, margin: '0 0 0.5rem 0' }}>
            Gallery
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', margin: 0 }}>
            Berikut adalah beberapa foto dari berbagai acara yang diselenggarakan di{' '}
            <span style={{ color: '#c9a84c', fontWeight: 600 }}>DAGO Heritage.</span>
          </p>
        </div>

        {/* Slide container */}
        <div
          className="gc-carousel-box"
          style={{
            position: 'relative',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            backgroundColor: '#0f1a14',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={galleryImages[current].src}
              alt={galleryImages[current].alt}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </AnimatePresence>

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            style={{
              position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
              zIndex: 5, width: '2.75rem', height: '2.75rem', borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.6)', backgroundColor: 'rgba(15,26,20,0.75)',
              color: '#c9a84c', cursor: 'pointer', fontSize: '1.4rem', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >‹</button>
          <button
            onClick={next}
            style={{
              position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
              zIndex: 5, width: '2.75rem', height: '2.75rem', borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.6)', backgroundColor: 'rgba(15,26,20,0.75)',
              color: '#c9a84c', cursor: 'pointer', fontSize: '1.4rem', display: 'flex',
              alignItems: 'center', justifyContent: 'center',
            }}
          >›</button>

          {/* Counter badge */}
          <div style={{
            position: 'absolute', top: '1rem', right: '1rem', zIndex: 5,
            backgroundColor: 'rgba(15,26,20,0.75)', border: '1px solid rgba(201,168,76,0.4)',
            padding: '0.25rem 0.75rem', fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em',
          }}>
            {current + 1} / {galleryImages.length}
          </div>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? '1.75rem' : '0.5rem',
                height: '0.5rem',
                borderRadius: '999px',
                border: 'none',
                backgroundColor: i === current ? '#c9a84c' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                padding: 0,
                transition: 'width 0.3s ease, background-color 0.3s ease',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// ── Section 5 — About Us ─────────────────────────────────────────
const AboutUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{ backgroundColor: '#0f1a14', position: 'relative', overflow: 'hidden' }}
      className="gc-section-pad"
    >
      {/* Decorative background circle */}
      <div style={{
        position: 'absolute', top: '-10rem', right: '-10rem',
        width: '40rem', height: '40rem', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,92,56,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-8rem', left: '-8rem',
        width: '30rem', height: '30rem', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="gc-container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Top divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.3)', marginBottom: '5rem', transformOrigin: 'left' }}
        />

        {/* 2-column layout */}
        <div className="gc-about-2col">

          {/* LEFT — Logo + tagline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem' }}
          >
            {/* Logo */}
            <img
              src={logo}
              alt="Dago Heritage Logo"
              style={{ height: '90px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />

            {/* Divider */}
            <div style={{ width: '4rem', height: '2px', backgroundColor: '#c9a84c' }} />

            {/* Tagline */}
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontStyle: 'italic',
              color: '#c9a84c',
              lineHeight: 1.4,
              margin: 0,
            }}>
              "Where Heritage Meets Excellence"
            </p>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              margin: 0,
            }}>
              Dago Heritage Golf &amp; Resort — Est. 1917
            </p>

            {/* Social / CTA */}
            <a
              href="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                border: '1px solid rgba(201,168,76,0.5)', color: '#c9a84c',
                fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                padding: '0.75rem 1.75rem', textDecoration: 'none',
                transition: 'background-color 0.25s, color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#c9a84c'; e.currentTarget.style.color = '#0f1a14'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#c9a84c'; }}
            >
              Hubungi Kami
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>

          {/* RIGHT — Sejarah teks */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '1rem' }}>
              Tentang Kami
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 700, color: '#ffffff',
              lineHeight: 1.25, margin: '0 0 1.5rem 0',
            }}>
              Lebih dari Sekadar <br />
              <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Lapangan Golf</span>
            </h2>

            <div style={{ width: '3rem', height: '2px', backgroundColor: '#c9a84c', marginBottom: '1.75rem' }} />

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Dago Heritage 1917 bukan sekadar lapangan golf — ini adalah warisan budaya dan sejarah yang telah menemani Bandung selama lebih dari satu abad. Didirikan pada masa kolonial Belanda, lapangan ini menjadi saksi bisu perjalanan panjang olahraga golf di Indonesia.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Berlokasi di kawasan Dago Atas yang asri, di ketinggian 950–1.065 meter di atas permukaan laut, Dago Heritage menawarkan pengalaman bermain golf yang tak tertandingi — dikelilingi hutan pinus, udara sejuk pegunungan, dan panorama lembah Bandung yang memukau.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, marginBottom: '2rem' }}>
              Setelah renovasi besar pada 1994 oleh arsitek golf Jepang <strong style={{ color: '#c9a84c' }}>Chohei Miyazawa</strong>, Dago Heritage hadir dengan wajah baru yang memadukan keanggunan desain British klasik dengan standar lapangan golf modern bertaraf internasional.
            </p>

            {/* Timeline milestones */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { year: '1917', desc: 'Lapangan golf didirikan pada era kolonial Belanda' },
                { year: '1994', desc: 'Renovasi besar oleh arsitek Chohei Miyazawa' },
                { year: '2000s', desc: 'Berkembang menjadi resort golf bertaraf internasional' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <span style={{
                    flexShrink: 0,
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.9rem', fontWeight: 700,
                    color: '#c9a84c', minWidth: '3.5rem',
                    paddingTop: '0.1rem',
                  }}>{item.year}</span>
                  <div style={{ flex: 1, borderLeft: '1px solid rgba(201,168,76,0.25)', paddingLeft: '1rem' }}>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', margin: 0, lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.3)', marginTop: '5rem', transformOrigin: 'right' }}
        />

      </div>
    </section>
  );
};

export default GolfCourse;
