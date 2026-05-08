import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import usePageTitle from '../hooks/usePageTitle';

// Import promo images
import gf1 from '../gf 1.jpg';
import gf2 from '../gf 2.jpg';
import gf3 from '../gf 3.jpg';
import gf4 from '../gf 4.jpg';
import gf5 from '../gf 5.jpg';
import gf6 from '../gf 6.jpg';
import promo7 from '../promo 7.jpg';
import promo8 from '../promo 8.jpg';
import promo4Fallback from '../promo 4.jpg'; // fallback for missing promo 9

// Pricing data
const pricingData = [
  {
    category: 'Weekday',
    subtitle: 'Senin - Jumat',
    price: 'Rp 450.000',
    features: ['18 Hole', 'Caddy Fee Included', 'Cart Available', 'Practice Range Access'],
    highlight: false,
  },
  {
    category: 'Weekend',
    subtitle: 'Sabtu - Minggu',
    price: 'Rp 650.000',
    features: ['18 Hole', 'Caddy Fee Included', 'Cart Available', 'Practice Range Access'],
    highlight: true,
  },
  {
    category: 'Holiday',
    subtitle: 'Hari Libur Nasional',
    price: 'Rp 750.000',
    features: ['18 Hole', 'Caddy Fee Included', 'Cart Available', 'Practice Range Access'],
    highlight: false,
  },
];

// Promo gallery images
const promoGallery = [
  { src: promo7, alt: 'Green Fees Promo 2026 - Special Weekend Rate' },
  { src: gf1, alt: 'Green Fees Package - Weekday Special' },
  { src: gf2, alt: 'Golf Membership Promo 2026' },
  { src: promo8, alt: 'Tournament Package Green Fees' },
  { src: gf3, alt: 'Corporate Golf Package' },
  { src: promo4Fallback, alt: 'Green Fees Early Bird Promo' },
  { src: gf4, alt: 'Weekend Golf Package' },
  { src: gf5, alt: 'Holiday Special Green Fees' },
  { src: gf6, alt: 'Annual Membership Promo' },
];

const GreenFees = () => {
  usePageTitle('Green Fees');
  const pricingRef = useRef(null);
  const pricingInView = useInView(pricingRef, { once: true, margin: '-80px' });
  const promoRef = useRef(null);
  const promoInView = useInView(promoRef, { once: true, margin: '-80px' });

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex(i => (i - 1 + promoGallery.length) % promoGallery.length);
  const nextImage = () => setLightboxIndex(i => (i + 1) % promoGallery.length);

  return (
    <div style={{ backgroundColor: '#0f1a14', minHeight: '100vh' }}>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — HERO GREEN FEES
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        minHeight: '60vh',
        paddingTop: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Background image */}
        <img
          src={gf1}
          alt="Dago Heritage Golf Course Green Fees 2026"
          loading="eager"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,20,14,0.7) 0%, rgba(10,20,14,0.85) 100%)',
        }} />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            padding: '0 1.5rem',
            maxWidth: '800px',
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              display: 'inline-block',
              marginBottom: '1.5rem',
              padding: '0.375rem 1.25rem',
              border: '1px solid rgba(201,168,76,0.6)',
              color: '#c9a84c',
              fontSize: '0.7rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Pricing
          </motion.span>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            margin: '0 0 1rem 0',
          }}>
            2026 <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Green Fees</span>
          </h1>

          <div style={{
            width: '4rem',
            height: '2px',
            backgroundColor: '#c9a84c',
            margin: '0 auto 1.5rem',
          }} />

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            Below is green fees for the year 2026
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — PRICING TABLE / CARDS
      ═══════════════════════════════════════════════════════ */}
      <section ref={pricingRef} style={{ backgroundColor: '#0f1a14', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle
              title="Pricing Options"
              subtitle="Green Fees 2026"
              align="center"
              theme="light"
            />
          </div>

          {/* Pricing cards */}
          <motion.div
            initial="hidden"
            animate={pricingInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {pricingData.map((item, i) => (
              <PricingCard key={i} item={item} />
            ))}
          </motion.div>

          {/* CTA */}
          <AnimatedSection direction="up" delay={0.4} style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Button variant="secondary" href="/contact">
              Book Your Tee Time Now
            </Button>
          </AnimatedSection>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — PROMO GALLERY
      ═══════════════════════════════════════════════════════ */}
      <section ref={promoRef} style={{ backgroundColor: '#0f1a14', padding: '6rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>

          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle
              title="Promo Gallery"
              subtitle="Special Offers"
              align="center"
              theme="light"
            />
          </div>

          {/* Gallery grid */}
          <motion.div
            initial="hidden"
            animate={promoInView ? 'visible' : 'hidden'}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {promoGallery.map((img, i) => (
              <PromoGalleryItem key={i} img={img} index={i} onClick={() => openLightbox(i)} />
            ))}
          </motion.div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — CTA BOOKING
      ═══════════════════════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#1a5c38',
        padding: '5rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle pattern overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <AnimatedSection direction="up" delay={0}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
                margin: '0 0 1.5rem 0',
              }}>
                Ready to Play?{' '}
                <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Book Your Tee Time Now</span>
              </h2>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto 2.5rem',
              }}>
                Contact our reservation team to secure your preferred tee time
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                justifyContent: 'center',
              }}>
                <Button
                  variant="secondary"
                  href="tel:+628112233191"
                  style={{ minWidth: '180px' }}
                >
                  📞 Call Us
                </Button>
                <Button
                  variant="outline"
                  href="https://wa.me/628112233191"
                  target="_blank"
                  style={{ borderColor: '#ffffff', color: '#ffffff', minWidth: '180px' }}
                >
                  💬 WhatsApp
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox */}
      <PromoLightbox
        items={promoGallery}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />

    </div>
  );
};

// ── PricingCard Component ────────────────────────────────────────
const PricingCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: item.highlight ? '#1a2e20' : '#162318',
        border: `2px solid ${item.highlight ? '#c9a84c' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '8px',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered
          ? '0 20px 50px rgba(0,0,0,0.5)'
          : item.highlight
          ? '0 10px 30px rgba(201,168,76,0.2)'
          : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
      }}
    >
      {item.highlight && (
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#c9a84c',
          color: '#0f1a14',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '0.3rem 1rem',
          borderRadius: '999px',
        }}>
          Popular
        </div>
      )}

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.8rem',
        fontWeight: 700,
        color: item.highlight ? '#c9a84c' : '#ffffff',
        margin: '0 0 0.5rem 0',
      }}>
        {item.category}
      </h3>

      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.6)',
        margin: '0 0 1.5rem 0',
        letterSpacing: '0.05em',
      }}>
        {item.subtitle}
      </p>

      <div style={{
        width: '2.5rem',
        height: '2px',
        backgroundColor: '#c9a84c',
        margin: '0 auto 1.5rem',
      }} />

      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '2.5rem',
        fontWeight: 700,
        color: '#c9a84c',
        margin: '0 0 2rem 0',
        lineHeight: 1,
      }}>
        {item.price}
      </div>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: '0 0 2rem 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}>
        {item.features.map((feature, i) => (
          <li key={i} style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8L6.5 11.5L13 4.5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Button
        variant={item.highlight ? 'secondary' : 'outline'}
        href="/contact"
        style={{ width: '100%' }}
      >
        Book Now
      </Button>
    </motion.div>
  );
};

// ── PromoGalleryItem Component ───────────────────────────────────
const PromoGalleryItem = ({ img, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '4px',
        backgroundColor: '#1a2e20',
        aspectRatio: '4/3',
      }}
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.5s ease',
        }}
      />

      {/* Hover overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(10,20,14,0.6)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
      }}>
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
          View Promo
        </span>
      </div>

      {/* Gold border */}
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

// ── PromoLightbox Component ──────────────────────────────────────
const PromoLightbox = ({ items, activeIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, onClose, onPrev, onNext]);

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
              maxWidth: '90vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '2px',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            }}
          />
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
            {items[activeIndex].alt}
          </div>
        </motion.div>

        {/* Close */}
        <button onClick={onClose} style={{
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
          fontSize: '1.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>✕</button>

        {/* Prev */}
        <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{
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
          fontSize: '1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>‹</button>

        {/* Next */}
        <button onClick={e => { e.stopPropagation(); onNext(); }} style={{
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
          fontSize: '1.4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>›</button>

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
          {activeIndex + 1} / {items.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default GreenFees;
