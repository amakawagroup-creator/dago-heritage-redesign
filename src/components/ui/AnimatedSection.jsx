import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * AnimatedSection — wrapper fade-in saat scroll masuk viewport
 * @param {React.ReactNode}          children  - Konten yang di-wrap
 * @param {number}                   delay     - Delay animasi dalam detik (default: 0)
 * @param {'up'|'down'|'left'|'right'} direction - Arah masuk (default: 'up')
 * @param {string}                   margin    - IntersectionObserver margin (default: '-80px')
 * @param {string}                   className - Kelas tambahan (opsional)
 * @param {object}                   style     - Inline style tambahan (opsional)
 */
const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up',
  margin = '-80px',
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });

  const offsets = {
    up:    { x: 0,   y: 50 },
    down:  { x: 0,   y: -50 },
    left:  { x: -60, y: 0 },
    right: { x: 60,  y: 0 },
  };

  const { x, y } = offsets[direction] ?? offsets.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.75, ease: 'easeOut', delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
