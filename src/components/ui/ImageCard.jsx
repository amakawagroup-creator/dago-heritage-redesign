import { useState } from 'react';

/**
 * ImageCard
 * @param {string} src         - URL / import gambar
 * @param {string} alt         - Alt text gambar
 * @param {string} title       - Judul kartu (muncul saat hover)
 * @param {string} description - Deskripsi singkat (muncul saat hover, opsional)
 * @param {string} href        - Link tujuan saat diklik (opsional)
 * @param {string} target      - Target link (opsional)
 * @param {string} aspectRatio - Rasio aspek gambar (default: '4/3')
 * @param {string} className   - Kelas tambahan (opsional)
 * @param {object} style       - Inline style tambahan (opsional)
 * @param {function} onClick   - Handler klik custom (opsional)
 */
const ImageCard = ({
  src,
  alt,
  title,
  description,
  href,
  target,
  aspectRatio = '4/3',
  className = '',
  style: extraStyle = {},
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '4px',
    cursor: href || onClick ? 'pointer' : 'default',
    aspectRatio,
    display: 'block',
    textDecoration: 'none',
    ...extraStyle,
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transform: hovered ? 'scale(1.08)' : 'scale(1)',
    transition: 'transform 0.5s ease',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: hovered
      ? 'linear-gradient(to top, rgba(10,26,16,0.88) 0%, rgba(10,26,16,0.35) 60%, transparent 100%)'
      : 'linear-gradient(to top, rgba(10,26,16,0.45) 0%, transparent 60%)',
    transition: 'background 0.4s ease',
  };

  const textWrapStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1.25rem 1.25rem 1.25rem',
    transform: hovered ? 'translateY(0)' : 'translateY(30%)',
    opacity: hovered ? 1 : 0,
    transition: 'transform 0.4s ease, opacity 0.4s ease',
  };

  const titleStyle = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 0.4rem 0',
    lineHeight: 1.3,
  };

  const goldLineStyle = {
    width: '2rem',
    height: '2px',
    backgroundColor: '#c9a84c',
    marginBottom: description ? '0.6rem' : '0',
    borderRadius: '2px',
  };

  const descStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.8)',
    margin: 0,
    lineHeight: 1.6,
  };

  // Gold border on hover
  const borderStyle = {
    position: 'absolute',
    inset: 0,
    border: '2px solid #c9a84c',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: 'none',
    borderRadius: '4px',
  };

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onClick,
  };

  const content = (
    <>
      <img src={src} alt={alt} style={imgStyle} />
      <div style={overlayStyle} />
      <div style={textWrapStyle}>
        {title && <h3 style={titleStyle}>{title}</h3>}
        <div style={goldLineStyle} />
        {description && <p style={descStyle}>{description}</p>}
      </div>
      <div style={borderStyle} />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        style={containerStyle}
        className={className}
        {...handlers}
      >
        {content}
      </a>
    );
  }

  return (
    <div style={containerStyle} className={className} {...handlers}>
      {content}
    </div>
  );
};

export default ImageCard;
