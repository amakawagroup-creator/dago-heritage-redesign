import { Link } from 'react-router-dom';
import logo from '../logo utama.png';

// ── Instagram icon ───────────────────────────────────────────────
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

// ── Map pin icon ─────────────────────────────────────────────────
const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4z" />
    <circle cx="7" cy="5" r="1.5" />
  </svg>
);

// ── Phone icon ───────────────────────────────────────────────────
const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M2 2h3l1.5 3.5-2 1.2A9 9 0 0 0 8.3 9.5l1.2-2L13 9v3a1 1 0 0 1-1 1A11 11 0 0 1 1 3a1 1 0 0 1 1-1z" />
  </svg>
);

// ── Email icon ───────────────────────────────────────────────────
const IconEmail = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect x="1" y="3" width="12" height="8" rx="1.5" />
    <path d="M1 4l6 4 6-4" />
  </svg>
);

// ── ContactRow ───────────────────────────────────────────────────
const ContactRow = ({ icon, children }) => (
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
    fontFamily: 'Inter, sans-serif', fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
  }}>
    <span style={{ color: '#c9a84c', marginTop: '2px' }}>{icon}</span>
    {children}
  </div>
);

// ── Footer Component ─────────────────────────────────────────────
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0f1a14' }}>

      {/* Top gold line */}
      <div style={{ height: '1px', backgroundColor: 'rgba(201,168,76,0.3)' }} />

      {/* Main content */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '4rem 2rem 3rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '3rem',
      }}>

        {/* ── KOLOM 1 — Branding ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Logo */}
          <img
            src={logo}
            alt="Dago Heritage"
            style={{ height: '70px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', alignSelf: 'flex-start' }}
          />

          {/* Tagline */}
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '0.95rem', fontStyle: 'italic',
            color: '#c9a84c', lineHeight: 1.6, margin: 0,
          }}>
            "Where Heritage Meets Excellence"
          </p>

          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0,
          }}>
            Lapangan golf bersejarah sejak 1917, berlokasi di kawasan Dago Atas Bandung dengan pemandangan pegunungan yang memukau.
          </p>

          {/* Social media */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.7rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)', margin: 0,
            }}>
              Follow Us
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {/* Golf Course Instagram */}
              <a
                href="https://www.instagram.com/dagoheritage_1917"
                target="_blank"
                rel="noopener noreferrer"
                title="@dagoheritage_1917"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.78rem',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <IconInstagram />
                @dagoheritage_1917
              </a>
            </div>
            <div>
              {/* Driving Range Instagram */}
              <a
                href="https://www.instagram.com/dagodriving"
                target="_blank"
                rel="noopener noreferrer"
                title="@dagodriving"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'Inter, sans-serif', fontSize: '0.78rem',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                <IconInstagram />
                @dagodriving
              </a>
            </div>
          </div>
        </div>

        {/* ── KOLOM 2 — Golf Course ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Title */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#c9a84c', fontWeight: 600, margin: '0 0 0.5rem 0',
            }}>
              Golf Course
            </p>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem', fontWeight: 700,
              color: '#ffffff', margin: 0, lineHeight: 1.4,
            }}>
              DAGO Heritage 1917<br />Golf Course
            </h4>
          </div>

          <div style={{ width: '2rem', height: '1px', backgroundColor: 'rgba(201,168,76,0.4)' }} />

          {/* Address */}
          <ContactRow icon={<IconPin />}>
            Jl. Sirnagalih No.1, Ciumbuleuit,<br />
            Kec. Cidadap, Kota Bandung,<br />
            Jawa Barat 40142
          </ContactRow>

          {/* Phone */}
          <ContactRow icon={<IconPhone />}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <span>+62 222 502 567</span>
              <span>Reservasi: +62 0811 2233 1917</span>
            </div>
          </ContactRow>

          {/* Email */}
          <ContactRow icon={<IconEmail />}>
            <a
              href="mailto:dagoheritage1917@gmail.com"
              style={{
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
            >
              dagoheritage1917@gmail.com
            </a>
          </ContactRow>

          {/* Nav links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            {[
              { label: 'Golf Course', to: '/course' },
              { label: 'Green Fees', to: '/green-fees' },
              { label: 'Contact Us', to: '/contact' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── KOLOM 3 — Driving Range ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {/* Title */}
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.65rem',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              color: '#c9a84c', fontWeight: 600, margin: '0 0 0.5rem 0',
            }}>
              Driving Range
            </p>
            <h4 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem', fontWeight: 700,
              color: '#ffffff', margin: 0, lineHeight: 1.4,
            }}>
              DAGO Heritage 1917<br />Driving Range
            </h4>
          </div>

          <div style={{ width: '2rem', height: '1px', backgroundColor: 'rgba(201,168,76,0.4)' }} />

          {/* Address */}
          <ContactRow icon={<IconPin />}>
            Jl. Sirnagalih No.1, Ciumbuleuit,<br />
            Kec. Cidadap, Kota Bandung,<br />
            Jawa Barat 40142
          </ContactRow>

          {/* Call Center */}
          <ContactRow icon={<IconPhone />}>
            Call Center: +62 0811 234 1917
          </ContactRow>

          {/* Email */}
          <ContactRow icon={<IconEmail />}>
            <a
              href="mailto:Marketing.driving@dagoheritage1917.com"
              style={{
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                transition: 'color 0.25s',
                wordBreak: 'break-all',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
            >
              Marketing.driving@dagoheritage1917.com
            </a>
          </ContactRow>

          {/* Nav links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            {[
              { label: 'Driving Range', to: '/driving-range' },
              { label: 'Green Fees', to: '/green-fees' },
              { label: 'Contact Us', to: '/contact' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.5)', textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                → {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '1.5rem 2rem',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '0.75rem',
        }}>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.35)', margin: 0, lineHeight: 1.6,
          }}>
            © {year} PT DAGO ENDAH &nbsp;|&nbsp; © PT. SINERGY DAGO SARANA BERKARYA
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.25)', margin: 0,
          }}>
            Dago Heritage Golf &amp; Resort — Est. 1917
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
