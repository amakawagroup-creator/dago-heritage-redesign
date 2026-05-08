import { useState } from 'react';

/**
 * Button
 * @param {React.ReactNode}          children  - Label / konten tombol
 * @param {'primary'|'secondary'|'outline'} variant - Gaya tombol (default: primary)
 * @param {function}                 onClick   - Handler klik (opsional)
 * @param {string}                   href      - Jika diisi, render sebagai <a> (opsional)
 * @param {string}                   target    - Target link, e.g. '_blank' (opsional)
 * @param {string}                   className - Kelas tambahan (opsional)
 * @param {object}                   style     - Inline style tambahan (opsional)
 */
const Button = ({
  children,
  variant = 'primary',
  onClick,
  href,
  target,
  className = '',
  style: extraStyle = {},
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);

  // ── Base styles ──────────────────────────────────────────────
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    padding: '0.75rem 2rem',
    borderRadius: '2px',
    cursor: 'pointer',
    textDecoration: 'none',
    border: '2px solid transparent',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
    transform: hovered ? 'scale(1.04)' : 'scale(1)',
    boxShadow: hovered ? '0 6px 20px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.08)',
    whiteSpace: 'nowrap',
  };

  // ── Variant styles ───────────────────────────────────────────
  const variants = {
    primary: {
      backgroundColor: hovered ? '#155230' : '#1a5c38',
      color: '#ffffff',
      borderColor: hovered ? '#155230' : '#1a5c38',
    },
    secondary: {
      backgroundColor: hovered ? '#b8943e' : '#c9a84c',
      color: '#0f1a14',
      borderColor: hovered ? '#b8943e' : '#c9a84c',
    },
    outline: {
      backgroundColor: hovered ? '#1a5c38' : 'transparent',
      color: hovered ? '#ffffff' : '#1a5c38',
      borderColor: '#1a5c38',
    },
  };

  const combinedStyle = { ...base, ...variants[variant], ...extraStyle };

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick,
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        style={combinedStyle}
        className={className}
        {...handlers}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={combinedStyle}
      className={className}
      {...handlers}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
