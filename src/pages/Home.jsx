import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import usePageTitle from '../hooks/usePageTitle';
import heroDesktop from '../hero image dekstop.jpg';
import heroMobile from '../hero mobile image.jpg';
import featureHotel from '../feature hotel.jpg';
import featureDriving from '../Feature - Driving Range.jpg';
import featureCourse from '../hero image dekstop.jpg';
import promo0 from '../promo 0.jpg';
import promo1 from '../promo 1.jpg';
import promo2 from '../promo 2.jpg';
import promo3 from '../promo 3.jpg';
import promo4 from '../promo 4.jpg';
import promo7 from '../promo 7.jpg';
import promo8 from '../promo 8.jpg';
import promo4Duplicate from '../promo 4.jpg'; // Using promo 4 as fallback for missing promo 9
import news1 from '../news 1.jpg';
import news2 from '../news 2.jpg';

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

// ── Animation variants ───────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const staggerCards = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

// ── Feature cards data ───────────────────────────────────────────
const features = [
  {
    img: featureHotel,
    title: 'Swiss-Belresort Hotel',
    desc: 'Experience luxury mountain hospitality at Swiss-Belresort Dago Heritage — where comfort meets the serene beauty of Bandung highlands.',
    label: 'Hotel & Resort',
    href: 'https://www.swiss-belhotel.com',
    external: true,
  },
  {
    img: featureCourse,
    title: 'Golf Course',
    desc: 'Play on one of Indonesia\'s oldest and most prestigious 18-hole golf courses, redesigned by Japanese architect Chohei Miyazawa in 1994.',
    label: 'Golf Course',
    href: '/course',
    external: false,
  },
  {
    img: featureDriving,
    title: 'Driving Range',
    desc: 'Sharpen your swing at our modern driving range facility — perfect for warm-ups, practice sessions, and golf school programs.',
    label: 'Driving Range',
    href: '/driving-range',
    external: false,
  },
];

// ── FeatureCard Component ────────────────────────────────────────
const FeatureCard = ({ feature }) => {
  const [hovered, setHovered] = useState(false);

  const cardContent = (
    <motion.div
      variants={cardFadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '480px',
        borderRadius: '2px',
      }}
    >
      {/* Image */}
      <img
        src={feature.img}
        alt={feature.title}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}
      />

      {/* Base gradient — always visible */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(10,20,14,0.92) 0%, rgba(10,20,14,0.4) 50%, rgba(10,20,14,0.1) 100%)',
        transition: 'opacity 0.4s ease',
      }} />

      {/* Hover overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(10,20,14,0.55)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }} />

      {/* Gold border on hover */}
      <div style={{
        position: 'absolute',
        inset: 0,
        border: '2px solid #c9a84c',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute',
        inset: 0,
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        {/* Label badge */}
        <span style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          padding: '0.25rem 0.75rem',
          border: '1px solid rgba(201,168,76,0.6)',
          color: '#c9a84c',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '0.75rem',
          transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          opacity: hovered ? 1 : 0.7,
          transition: 'transform 0.3s ease, opacity 0.3s ease',
        }}>
          {feature.label}
        </span>

        {/* Title */}
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
          fontWeight: 700,
          color: '#ffffff',
          margin: '0 0 0.75rem 0',
          lineHeight: 1.2,
        }}>
          {feature.title}
        </h3>

        {/* Divider */}
        <div style={{
          width: hovered ? '3rem' : '1.5rem',
          height: '2px',
          backgroundColor: '#c9a84c',
          marginBottom: '0.75rem',
          transition: 'width 0.4s ease',
        }} />

        {/* Description — only on hover */}
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.8)',
          lineHeight: 1.7,
          margin: '0 0 1.25rem 0',
          maxHeight: hovered ? '100px' : '0',
          overflow: 'hidden',
          opacity: hovered ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
        }}>
          {feature.desc}
        </p>

        {/* CTA */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#c9a84c',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 0.3s ease',
        }}>
          Explore
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </motion.div>
  );

  if (feature.external) {
    return (
      <a href={feature.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={feature.href} style={{ textDecoration: 'none', display: 'block' }}>
      {cardContent}
    </Link>
  );
};

// ── What's On data ───────────────────────────────────────────────
const whatsOnItems = [
  { src: promo0, alt: 'Event Dago Heritage 1',   category: 'Event' },
  { src: promo1, alt: 'Event Dago Heritage 2',   category: 'Event' },
  { src: promo2, alt: 'Golf Course Promo',        category: 'Golf Course' },
  { src: promo3, alt: 'Driving Range Promo',      category: 'Driving' },
  { src: promo4, alt: 'Event Dago Heritage 3',   category: 'Event' },
  { src: promo7, alt: 'Golf Course Event',        category: 'Golf Course' },
  { src: promo8, alt: 'Driving Range Event',      category: 'Driving' },
  { src: promo4Duplicate, alt: 'Event Dago Heritage 4',   category: 'Event' },
  { src: news1,  alt: 'News Dago Heritage 1',    category: 'Event' },
  { src: news2,  alt: 'News Dago Heritage 2',    category: 'Golf Course' },
];

const tabs = ['All', 'Event', 'Golf Course', 'Driving'];

// ── PromoItem Component ──────────────────────────────────────────
const PromoItem = ({ item, index, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 3) * 0.1 }}
      onClick={() => onClick(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '2px',
        backgroundColor: '#1a2e20',
        aspectRatio: '4/3',
      }}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: 'rgba(10,20,14,0.6)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
      }}>
        {/* Magnifier icon */}
        <div style={{
          width: '3rem', height: '3rem', borderRadius: '50%',
          border: '2px solid #c9a84c',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
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
          fontFamily: 'Inter, sans-serif', fontSize: '0.7rem',
          color: 'rgba(255,255,255,0.85)', letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>Lihat Foto</span>
      </div>

      {/* Gold border */}
      <div style={{
        position: 'absolute', inset: 0,
        border: '2px solid #c9a84c',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }} />
    </motion.div>
  );
};

// ── Lightbox Component ───────────────────────────────────────────
const WhatsOnLightbox = ({ items, activeIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

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
          position: 'fixed', inset: 0, zIndex: 1000,
          backgroundColor: 'rgba(0,0,0,0.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
        }}
      >
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
            src={items[activeIndex].src}
            alt={items[activeIndex].alt}
            style={{
              maxWidth: '90vw', maxHeight: '85vh',
              objectFit: 'contain', display: 'block',
              borderRadius: '2px', boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '0.75rem 1rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
            fontFamily: 'Inter, sans-serif', fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.8)', letterSpacing: '0.05em',
          }}>
            {items[activeIndex].alt}
          </div>
        </motion.div>

        {/* Close */}
        <button onClick={onClose} style={{
          position: 'fixed', top: '1.5rem', right: '1.5rem',
          width: '2.5rem', height: '2.5rem', borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.3)',
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: '#fff', cursor: 'pointer', fontSize: '1.2rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>✕</button>

        {/* Prev */}
        <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{
          position: 'fixed', left: '1rem', top: '50%', transform: 'translateY(-50%)',
          width: '3rem', height: '3rem', borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.5)',
          backgroundColor: 'rgba(15,26,20,0.8)',
          color: '#c9a84c', cursor: 'pointer', fontSize: '1.4rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>‹</button>

        {/* Next */}
        <button onClick={e => { e.stopPropagation(); onNext(); }} style={{
          position: 'fixed', right: '1rem', top: '50%', transform: 'translateY(-50%)',
          width: '3rem', height: '3rem', borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.5)',
          backgroundColor: 'rgba(15,26,20,0.8)',
          color: '#c9a84c', cursor: 'pointer', fontSize: '1.4rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>›</button>

        {/* Counter */}
        <div style={{
          position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em',
        }}>
          {activeIndex + 1} / {items.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Home Component ───────────────────────────────────────────────
const Home = () => {
  usePageTitle('Home');
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const whatsOnRef = useRef(null);
  const whatsOnInView = useInView(whatsOnRef, { once: true, margin: '-80px' });

  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeTab === 'All'
    ? whatsOnItems
    : whatsOnItems.filter(item => item.category === activeTab);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i - 1 + filteredItems.length) % filteredItems.length);
  const nextImage = () => setLightboxIndex(i => (i + 1) % filteredItems.length);

  return (
    <div style={{ backgroundColor: '#0f1a14' }}>

      {/* ═══════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={isMobile ? heroMobile : heroDesktop}
          alt="Dago Heritage Golf Course — pemandangan lapangan golf 18 hole di Bandung"
          loading="eager"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, rgba(10,20,14,0.75) 80%, rgba(10,20,14,0.95) 100%)',
        }} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: 'relative', zIndex: 10,
            textAlign: 'center', padding: '0 1.5rem',
            maxWidth: '900px', width: '100%',
          }}
        >
          <motion.span variants={fadeUp} style={{
            display: 'inline-block', marginBottom: '1.5rem',
            padding: '0.375rem 1.25rem',
            border: '1px solid rgba(201,168,76,0.6)',
            color: '#c9a84c', fontSize: '0.7rem',
            letterSpacing: '0.3em', textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
          }}>
            Dago Heritage Golf &amp; Resort — Est. 1917
          </motion.span>

          <motion.h1 variants={fadeUp} style={{
            fontFamily: "'Playfair Display', serif",
            color: '#ffffff',
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.02em', margin: '0 0 1.5rem 0',
          }}>
            Perfect Golfing{' '}
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Destination</span>
          </motion.h1>

          <motion.div variants={fadeUp} style={{
            width: '4rem', height: '1px',
            backgroundColor: '#c9a84c', margin: '0 auto 1.75rem',
          }} />

          <motion.p variants={fadeUpSlow} style={{
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(255,255,255,0.78)',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 2.5rem',
          }}>
            DAGO Heritage offers a complete package of golf experience —
            18 challenging holes, stunning mountain views, and world-class
            facilities nestled in the heart of Bandung.
          </motion.p>

          <motion.div variants={fadeUp} style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '1rem', justifyContent: 'center',
          }}>
            <Button variant="secondary" href="/course">
              Explore Our Course
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button variant="outline" href="/contact" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}>
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            position: 'absolute', bottom: '2rem', left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '0.4rem', zIndex: 10,
          }}
        >
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
            letterSpacing: '0.25em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
          }}>Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5 8L10 13L15 8" stroke="rgba(201,168,76,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — EXPLORE DAGO HERITAGE
      ═══════════════════════════════════════════════════════ */}
      <section ref={sectionRef} style={{ backgroundColor: '#0f1a14', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle
              title="Explore Dago Heritage"
              subtitle="Fasilitas Kami"
              align="center"
              theme="light"
            />
          </div>

          {/* Cards grid */}
          <motion.div
            variants={staggerCards}
            initial="hidden"
            animate={sectionInView ? 'visible' : 'hidden'}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {features.map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — WHAT'S ON
      ═══════════════════════════════════════════════════════ */}
      <section id="whatson" ref={whatsOnRef} style={{ backgroundColor: '#0f1a14', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <SectionTitle
              title="What's On"
              subtitle="Event & Promo"
              align="center"
              theme="light"
            />
          </div>

          {/* Tab filters */}
          <AnimatedSection direction="up" delay={0.2} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: activeTab === tab ? 700 : 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.6rem 1.5rem',
                  backgroundColor: activeTab === tab ? '#c9a84c' : 'transparent',
                  color: activeTab === tab ? '#0f1a14' : 'rgba(255,255,255,0.7)',
                  border: `1px solid ${activeTab === tab ? '#c9a84c' : 'rgba(255,255,255,0.3)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.borderColor = '#c9a84c';
                    e.currentTarget.style.color = '#c9a84c';
                  }
                }}
                onMouseLeave={e => {
                  if (activeTab !== tab) {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </AnimatedSection>

          {/* Promo grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}>
            {filteredItems.map((item, i) => (
              <PromoItem key={i} item={item} index={i} onClick={openLightbox} />
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      <WhatsOnLightbox
        items={filteredItems}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — LATEST NEWS
      ═══════════════════════════════════════════════════════ */}
      <LatestNews />

    </div>
  );
};

// ── Latest News data ─────────────────────────────────────────────
const newsItems = [
  {
    img: news1,
    category: 'Berita Golf',
    date: 'Minggu, Feb. 15, 2026',
    title: 'Danny Ganiarto Terpilih Pimpin PGB 2025–2029',
    summary: 'Danny Ganiarto resmi terpilih sebagai Ketua Umum Persatuan Golf Bandung (PGB) periode 2025–2029 dalam Musyawarah Besar yang digelar di Dago Heritage Golf Course. Kepemimpinan baru ini diharapkan membawa angin segar bagi perkembangan olahraga golf di Bandung dan sekitarnya.',
    href: 'https://cirebon.pikiran-rakyat.com/',
  },
  {
    img: news2,
    category: 'Organisasi',
    date: 'Selasa, Feb. 24, 2026',
    title: 'Kepengurusan Baru PGB 2025 sd 2029',
    summary: 'Susunan kepengurusan baru Persatuan Golf Bandung (PGB) periode 2025–2029 resmi diumumkan. Dengan formasi yang solid dan berpengalaman, kepengurusan baru ini siap mendorong prestasi atlet golf Bandung di tingkat nasional maupun internasional.',
    href: 'https://cirebon.pikiran-rakyat.com/',
  },
];

// ── NewsCard Component ───────────────────────────────────────────
const NewsCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <motion.div
        variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: hovered
            ? '0 20px 50px rgba(0,0,0,0.18)'
            : '0 4px 20px rgba(0,0,0,0.08)',
          transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
          transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {/* Image */}
        <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }}
          />
          {/* Category badge */}
          <span style={{
            position: 'absolute', top: '1rem', left: '1rem',
            backgroundColor: '#c9a84c', color: '#0f1a14',
            fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
            fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', padding: '0.3rem 0.75rem',
          }}>
            {item.category}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '1.75rem' }}>
          {/* Date */}
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
            color: '#999', letterSpacing: '0.05em',
            margin: '0 0 0.75rem 0',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
          }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <rect x="1" y="2" width="11" height="10" rx="1.5" stroke="#999" strokeWidth="1.2" />
              <path d="M4 1V3M9 1V3M1 5H12" stroke="#999" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {item.date}
          </p>

          {/* Title */}
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            fontWeight: 700,
            color: hovered ? '#1a5c38' : '#0f1a14',
            lineHeight: 1.35, margin: '0 0 1rem 0',
            transition: 'color 0.3s ease',
          }}>
            {item.title}
          </h3>

          {/* Divider */}
          <div style={{
            width: hovered ? '3rem' : '1.5rem', height: '2px',
            backgroundColor: '#c9a84c', marginBottom: '1rem',
            transition: 'width 0.3s ease',
          }} />

          {/* Summary */}
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
            color: '#666', lineHeight: 1.75, margin: '0 0 1.5rem 0',
          }}>
            {item.summary}
          </p>

          {/* Read more */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            color: '#1a5c38', fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase',
            transform: hovered ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
          }}>
            Baca Selengkapnya
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

// ── LatestNews Section ───────────────────────────────────────────
const LatestNews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      style={{ backgroundColor: '#f5f0e8', padding: '6rem 0' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <SectionTitle
            title="Latest News"
            subtitle="Berita Terkini"
            align="center"
            theme="dark"
          />
        </div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
          }}
        >
          {newsItems.map((item, i) => (
            <NewsCard key={i} item={item} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
