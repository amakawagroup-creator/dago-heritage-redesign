import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import usePageTitle from '../hooks/usePageTitle';
import heroDriving from '../Feature - Driving Range.jpg';
import heroMobile from '../Hero Driving Range mobile.jpg';
import drive1 from '../drive 1.jpg';
import drive2 from '../drive 2.jpg';
import drive3 from '../drive 3.jpg';
import drive4 from '../drive 4.jpg';
import drive5 from '../drive 5.jpg';
import drive6 from '../drive 6.jpg';
import drive7 from '../drive 7.jpg';
import drive8 from '../drive 8.jpg';

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

// ── Pricing data ─────────────────────────────────────────────────
const pricingPackages = [
  {
    name: 'Regular Session',
    duration: '1 Jam',
    price: 'Rp 75.000',
    balls: '50 Bola',
    features: ['Covered Bay', 'Automatic Tee-Up', 'Towel Service'],
    highlight: false,
  },
  {
    name: 'Extended Session',
    duration: '2 Jam',
    price: 'Rp 130.000',
    balls: '100 Bola',
    features: ['Covered Bay', 'Automatic Tee-Up', 'Towel Service', 'Locker Access'],
    highlight: true,
  },
  {
    name: 'VIP Session',
    duration: '2 Jam',
    price: 'Rp 250.000',
    balls: '100 Bola',
    features: ['VIP Bay', 'Automatic Tee-Up', 'Towel Service', 'Locker Access', 'Complimentary Drink'],
    highlight: false,
  },
];

// ── Animation variants (kept for stagger usage) ─────────────────
// (used via motion.div variants in facility grid)

// ── Facility cards data ──────────────────────────────────────────
const facilities = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="10" width="28" height="18" rx="2" stroke="#1a5c38" strokeWidth="1.8"/>
        <path d="M4 16H32" stroke="#c9a84c" strokeWidth="1.8"/>
        <path d="M12 10V8M24 10V8" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Covered Bays',
    desc: 'Fully covered practice bays protecting you from sun and rain, allowing year-round practice in comfort.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="22" r="5" stroke="#1a5c38" strokeWidth="1.8"/>
        <path d="M18 17V10" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M14 10H22" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M10 28H26" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Automatic Tee-Up',
    desc: 'State-of-the-art automatic ball tee-up system for seamless, uninterrupted practice sessions.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="8" width="24" height="20" rx="2" stroke="#1a5c38" strokeWidth="1.8"/>
        <path d="M6 16H30" stroke="#c9a84c" strokeWidth="1.8"/>
        <circle cx="12" cy="22" r="2" fill="#c9a84c"/>
        <path d="M18 22H24" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Pro Shop',
    desc: 'Fully stocked pro shop with the latest golf equipment, apparel, and accessories from top brands.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="14" r="5" stroke="#1a5c38" strokeWidth="1.8"/>
        <path d="M10 28C10 24 13.6 21 18 21C22.4 21 26 24 26 28" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M28 10L32 14L28 18" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Coaching Available',
    desc: 'Professional golf instructors available for private and group lessons for all skill levels.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="12" width="10" height="14" rx="1" stroke="#1a5c38" strokeWidth="1.8"/>
        <rect x="20" y="8" width="10" height="18" rx="1" stroke="#1a5c38" strokeWidth="1.8"/>
        <path d="M6 26H30" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'VIP Room',
    desc: 'Private VIP rooms for exclusive practice sessions and special events with premium service.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M8 28V16L18 8L28 16V28" stroke="#1a5c38" strokeWidth="1.8" strokeLinejoin="round"/>
        <rect x="14" y="20" width="8" height="8" stroke="#1a5c38" strokeWidth="1.8"/>
        <path d="M12 16H24" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Locker Room',
    desc: 'Exclusive locker room with modern amenities to ensure your comfort before and after sessions.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M8 12C8 12 10 8 18 8C26 8 28 12 28 12V24C28 26 26 28 18 28C10 28 8 26 8 24V12Z" stroke="#1a5c38" strokeWidth="1.8"/>
        <path d="M12 18H24" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M18 14V22" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Restaurant',
    desc: 'Enjoy delicious meals and refreshments with stunning views of the driving range and nature.',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="8" width="28" height="20" rx="2" stroke="#1a5c38" strokeWidth="1.8"/>
        <path d="M4 16H32" stroke="#c9a84c" strokeWidth="1.8"/>
        <path d="M12 22H24" stroke="#1a5c38" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Ball Room',
    desc: 'Spacious ball room for events, tournaments, and corporate gatherings in an elegant setting.',
  },
];

// ── FacilityCard Component (icon-based) ─────────────────────────
const FacilityCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: (index % 4) * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? '#1a2e20' : '#162318',
        border: `1px solid ${hovered ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '8px',
        padding: '2rem 1.75rem',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.12)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
      }}
    >
      {/* Icon */}
      <div style={{
        width: '3.5rem',
        height: '3.5rem',
        borderRadius: '50%',
        backgroundColor: hovered ? 'rgba(201,168,76,0.12)' : 'rgba(26,92,56,0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.25rem',
        transition: 'background-color 0.3s ease',
      }}>
        {item.icon}
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.1rem',
        fontWeight: 700,
        color: hovered ? '#c9a84c' : '#ffffff',
        margin: '0 0 0.6rem 0',
        lineHeight: 1.3,
        transition: 'color 0.3s ease',
      }}>
        {item.title}
      </h3>

      <div style={{
        width: hovered ? '2.5rem' : '1.5rem',
        height: '2px',
        backgroundColor: '#c9a84c',
        marginBottom: '0.75rem',
        transition: 'width 0.3s ease',
      }} />

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.875rem',
        color: 'rgba(255,255,255,0.6)',
        lineHeight: 1.75,
        margin: 0,
      }}>
        {item.desc}
      </p>
    </motion.div>
  );
};

// ── PricingCard Component ────────────────────────────────────────
const PricingCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: item.highlight ? '#1a2e20' : '#162318',
        border: `2px solid ${item.highlight ? '#c9a84c' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '8px',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,0.5)' : item.highlight ? '0 10px 30px rgba(201,168,76,0.2)' : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {item.highlight && (
        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#c9a84c', color: '#0f1a14', fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '0.3rem 1rem', borderRadius: '999px' }}>
          Best Value
        </div>
      )}
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: item.highlight ? '#c9a84c' : '#ffffff', margin: '0 0 0.4rem 0' }}>{item.name}</h3>
      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', margin: '0 0 0.5rem 0', letterSpacing: '0.05em' }}>{item.duration} · {item.balls}</p>
      <div style={{ width: '2rem', height: '2px', backgroundColor: '#c9a84c', margin: '0 auto 1.5rem' }} />
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.25rem', fontWeight: 700, color: '#c9a84c', margin: '0 0 2rem 0', lineHeight: 1 }}>{item.price}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        {item.features.map((f, i) => (
          <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8L6.5 11.5L13 4.5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {f}
          </li>
        ))}
      </ul>
      <Button variant={item.highlight ? 'secondary' : 'outline'} href="/contact" style={{ width: '100%' }}>Book Now</Button>
    </motion.div>
  );
};

// ── DrivingRange Component ───────────────────────────────────────
const DrivingRange = () => {
  usePageTitle('Driving Range');
  const isMobile = useIsMobile();
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: '-80px' });
  const facilitiesRef = useRef(null);
  const facilitiesInView = useInView(facilitiesRef, { once: true, margin: '-80px' });
  const pricingRef = useRef(null);
  const pricingInView = useInView(pricingRef, { once: true, margin: '-80px' });

  return (
    <div style={{ backgroundColor: '#0f1a14', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; }
        .dr-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
        @media (max-width: 768px) { .dr-container { padding: 0 1rem; } }
      `}</style>


      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', width: '100%', minHeight: '70vh', paddingTop: '80px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={isMobile ? heroMobile : heroDriving}
          alt="Dago Heritage Driving Range — fasilitas driving range modern di Bandung"
          loading="eager"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,15,10,0.65) 0%, rgba(5,15,10,0.45) 40%, rgba(10,20,14,0.88) 100%)' }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1.5rem', maxWidth: '800px' }}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            style={{ display: 'inline-block', marginBottom: '1.25rem', padding: '0.35rem 1.25rem', border: '1px solid rgba(201,168,76,0.6)', color: '#c9a84c', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
            Dago Heritage Golf &amp; Resort
          </motion.span>

          <h1 style={{ fontFamily: "'Playfair Display', serif", color: '#ffffff', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 1rem 0' }}>
            Driving <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Range</span>
          </h1>

          <div style={{ width: '4rem', height: '2px', backgroundColor: '#c9a84c', margin: '0 auto 1.5rem' }} />

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', maxWidth: '560px', lineHeight: 1.8, margin: '0 auto 2.5rem' }}>
            Sharpen your swing at Bandung's most modern driving range — where cutting-edge technology meets the natural beauty of Dago highlands.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Button variant="secondary" href="https://wa.me/628112341917" target="_blank">Book a Session</Button>
            <Button variant="outline" href="#facilities" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#ffffff' }}>Explore Facilities</Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', zIndex: 10 }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 8L10 13L15 8" stroke="rgba(201,168,76,0.7)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — TENTANG DRIVING RANGE
      ══════════════════════════════════════════════════════ */}
      <section ref={aboutRef} style={{ backgroundColor: '#0f1a14', padding: '6rem 0' }}>
        <div className="dr-container">
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '5rem', alignItems: 'center' }}>

            {/* Text column */}
            <AnimatedSection direction="left" delay={0}>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: '1rem', margin: '0 0 1rem 0' }}>
                  Brand New Facility
                </p>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
                  Brand New{' '}
                  <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Driving Range</span>
                </h2>
                <div style={{ width: '3rem', height: '3px', backgroundColor: '#c9a84c', marginBottom: '1.75rem', borderRadius: '2px' }} />
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, margin: '0 0 1.25rem 0' }}>
                  Dago Heritage proudly presents its brand new driving range — a state-of-the-art facility designed by combining modern, classic, and back-to-nature aesthetics. Nestled at 950–1,065 meters above sea level, every swing is accompanied by the cool mountain air of Bandung.
                </p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.85, margin: '0 0 2rem 0' }}>
                  Equipped with automatic tee-up systems, covered bays, VIP rooms, a pro shop, and professional coaching — this is the ultimate practice destination for golfers of all levels.
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Automatic ball tee-up system di setiap bay',
                    'Covered bays — nyaman di segala cuaca',
                    'Professional coaching tersedia setiap hari',
                    'Pemandangan pegunungan Bandung yang memukau',
                  ].map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4.5 7.5L8 3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Image column */}
            <AnimatedSection direction="right" delay={0.15}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <img src={drive1} alt="Gedung baru Dago Heritage Driving Range" loading="lazy"
                  style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '4px', gridRow: 'span 2' }} />
                <img src={drive2} alt="Bay latihan driving range Dago Heritage" loading="lazy"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '4px' }} />
                <img src={drive3} alt="Locker room driving range Dago Heritage" loading="lazy"
                  style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: '4px' }} />
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — FASILITAS
      ══════════════════════════════════════════════════════ */}
      <section id="facilities" ref={facilitiesRef} style={{ backgroundColor: '#0a1510', padding: '6rem 0' }}>
        <div className="dr-container">
          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle title="Fasilitas Kami" subtitle="World-Class Facilities" align="center" theme="light" />
          </div>

          <motion.div
            initial="hidden"
            animate={facilitiesInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}
          >
            {facilities.map((item, i) => (
              <FacilityCard key={i} item={item} index={i} />
            ))}
          </motion.div>

          {/* Photo gallery strip */}
          <AnimatedSection direction="up" delay={0.2} style={{ marginTop: '4rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
              {[drive5, drive6, drive7, drive8].map((img, i) => (
                <div key={i} style={{ overflow: 'hidden', borderRadius: '4px', aspectRatio: '1/1' }}>
                  <img src={img} alt={`Fasilitas Driving Range Dago Heritage ${i + 5}`} loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — HARGA / PAKET
      ══════════════════════════════════════════════════════ */}
      <section ref={pricingRef} style={{ backgroundColor: '#0f1a14', padding: '6rem 0' }}>
        <div className="dr-container">
          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle title="Paket & Harga" subtitle="Pricing" align="center" theme="light" />
          </div>

          <motion.div
            initial="hidden"
            animate={pricingInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '3rem' }}
          >
            {pricingPackages.map((item, i) => (
              <PricingCard key={i} item={item} />
            ))}
          </motion.div>

          {/* Reservation note */}
          <AnimatedSection direction="up" delay={0.3}>
            <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '8px', backgroundColor: 'rgba(201,168,76,0.04)' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', margin: '0 0 1rem 0', lineHeight: 1.7 }}>
                Harga dapat berubah sewaktu-waktu. Untuk informasi terkini dan reservasi, hubungi kami langsung.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <Button variant="primary" href="tel:+628112341917">
                  📞 +62 0811 234 1917
                </Button>
                <Button variant="outline" href="https://wa.me/628112341917" target="_blank">
                  💬 WhatsApp
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#1a5c38', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.1) 0%, transparent 55%), radial-gradient(circle at 20% 50%, rgba(0,0,0,0.2) 0%, transparent 50%)', pointerEvents: 'none' }} />

        <div className="dr-container" style={{ position: 'relative', zIndex: 1 }}>
          <AnimatedSection direction="up" delay={0}>
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', fontWeight: 600, margin: '0 0 1rem 0' }}>
                Visit Us Today
              </p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, margin: '0 0 1.25rem 0' }}>
                Ready to Practice?{' '}
                <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Visit Us Today</span>
              </h2>
              <div style={{ width: '3rem', height: '2px', backgroundColor: '#c9a84c', margin: '0 auto 1.5rem', borderRadius: '2px' }} />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, margin: '0 auto 2.5rem', maxWidth: '520px' }}>
                Kunjungi Dago Heritage Driving Range dan rasakan pengalaman berlatih golf di fasilitas terbaik Bandung.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                <Button
                  variant="secondary"
                  href="https://wa.me/628112341917"
                  target="_blank"
                  style={{ minWidth: '200px' }}
                >
                  💬 WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  href="https://instagram.com/dagodriving"
                  target="_blank"
                  style={{ borderColor: '#ffffff', color: '#ffffff', minWidth: '200px' }}
                >
                  📸 @dagodriving
                </Button>
              </div>

              {/* Contact info */}
              <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
                {[
                  { icon: '📞', label: 'Call Center', value: '+62 0811 234 1917', href: 'tel:+628112341917' },
                  { icon: '📍', label: 'Lokasi', value: 'Dago Atas, Bandung', href: 'https://maps.google.com/?q=Dago+Heritage+Golf+Bandung' },
                  { icon: '🕐', label: 'Jam Buka', value: '06:00 – 18:00 WIB', href: null },
                ].map((info, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{info.icon}</div>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', margin: '0 0 0.25rem 0' }}>{info.label}</p>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: '#c9a84c', textDecoration: 'none', fontWeight: 500 }}>
                        {info.value}
                      </a>
                    ) : (
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{info.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default DrivingRange;
