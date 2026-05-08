import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * SectionTitle
 * @param {string}  title    - Judul utama
 * @param {string}  subtitle - Teks kecil di atas judul (opsional)
 * @param {'left'|'center'} align - Alignment teks (default: center)
 * @param {'light'|'dark'}  theme - Warna teks (default: dark)
 */
const SectionTitle = ({ title, subtitle, align = 'center', theme = 'dark' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  const titleColor = isDark ? '#0f1a14' : '#ffffff';
  const subtitleColor = '#c9a84c';
  const lineMargin = isCenter ? '0 auto' : '0';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{ textAlign: isCenter ? 'center' : 'left' }}
    >
      {/* Subtitle / eyebrow */}
      {subtitle && (
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: subtitleColor,
          margin: '0 0 0.75rem 0',
        }}>
          {subtitle}
        </p>
      )}

      {/* Main title */}
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        fontWeight: 700,
        color: titleColor,
        margin: '0 0 1rem 0',
        lineHeight: 1.2,
      }}>
        {title}
      </h2>

      {/* Gold decorative line */}
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: '3rem' } : {}}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        style={{
          height: '3px',
          backgroundColor: '#c9a84c',
          margin: lineMargin,
          marginBottom: '0',
          borderRadius: '2px',
        }}
      />
    </motion.div>
  );
};

export default SectionTitle;
