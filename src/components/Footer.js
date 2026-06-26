import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--secondary-dark)', color: 'var(--text-light)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container grid grid-4 mb-4">
        <div className="animate-fade-in-up">
          <div style={{ marginBottom: '1.5rem', backgroundColor: '#fff', padding: '0.75rem', borderRadius: 'var(--radius-sm)', display: 'inline-block' }}>
            <Image src="/logo.jpg" alt="Acrest Waste Solutions Logo" width={160} height={160} style={{ objectFit: 'contain', maxHeight: '65px', width: 'auto' }} />
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            Developing innovative resource recovery, biomass processing, and carbon manufacturing solutions that create environmental and economic value.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>LinkedIn</a>
            <a href="#" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>Facebook</a>
            <a href="#" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>X</a>
            <a href="#" style={{ color: 'var(--text-light)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--primary)'} onMouseOut={e => e.target.style.color = 'var(--text-light)'}>YouTube</a>
          </div>
        </div>
        <div className="animate-fade-in-up delay-100">
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/about" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>About Us</Link></li>
            <li><Link href="/solutions" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Solutions</Link></li>
            <li><Link href="/project-development" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Project Development</Link></li>
            <li><Link href="/news" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>News & Updates</Link></li>
            <li><Link href="/careers" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Careers</Link></li>
          </ul>
        </div>
        <div className="animate-fade-in-up delay-200">
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Portals</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/feedstock-suppliers" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Feedstock Suppliers</Link></li>
            <li><Link href="/buyers" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Buyers</Link></li>
            <li><Link href="/investors" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Investors</Link></li>
            <li><Link href="/partnerships" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Partnerships</Link></li>
          </ul>
        </div>
        <div className="animate-fade-in-up delay-300">
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Corporate Office</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
            <strong>Acrest Waste Solutions LLC</strong><br />
            5701 Shingle Creek Parkway<br />
            Suite 250E<br />
            Brooklyn Center, MN 55430<br />
            <br />
            <span style={{ color: '#fff' }}>Email:</span> info@acrestwastesolutions.com<br />
            <span style={{ color: '#fff' }}>Phone:</span> [Phone Placeholder]
          </p>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} Acrest Waste Solutions LLC. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontStyle: 'italic', color: 'var(--primary-light)' }}>Currently in active development and site-selection stage.</p>
      </div>
    </footer>
  );
}
