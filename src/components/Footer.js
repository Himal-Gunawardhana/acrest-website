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
            <a href="#" className="hover-text-primary">LinkedIn</a>
            <a href="#" className="hover-text-primary">Facebook</a>
            <a href="#" className="hover-text-primary">X</a>
            <a href="#" className="hover-text-primary">YouTube</a>
          </div>
        </div>
        <div className="animate-fade-in-up delay-100">
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/about" className="hover-text-white">About Us</Link></li>
            <li><Link href="/solutions" className="hover-text-white">Solutions</Link></li>
            <li><Link href="/project-development" className="hover-text-white">Project Development</Link></li>
            <li><Link href="/news" className="hover-text-white">News & Updates</Link></li>
            <li><Link href="/careers" className="hover-text-white">Careers</Link></li>
          </ul>
        </div>
        <div className="animate-fade-in-up delay-200">
          <h4 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Portals</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link href="/feedstock-suppliers" className="hover-text-white">Feedstock Suppliers</Link></li>
            <li><Link href="/buyers" className="hover-text-white">Buyers</Link></li>
            <li><Link href="/investors" className="hover-text-white">Investors</Link></li>
            <li><Link href="/partnerships" className="hover-text-white">Partnerships</Link></li>
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
