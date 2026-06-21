import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--secondary)', color: '#fff', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container grid grid-4 mb-4">
        <div>
          <div style={{ marginBottom: '1.5rem', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '4px', display: 'inline-block' }}>
            <Image src="/logo.jpg" alt="Acrest Waste Solutions Logo" width={150} height={150} style={{ objectFit: 'contain', maxHeight: '60px', width: 'auto' }} />
          </div>
          <p style={{ color: '#adb5bd', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Developing innovative resource recovery, biomass processing, and carbon manufacturing solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Social Placeholders */}
            <a href="#" style={{ color: '#adb5bd' }}>LinkedIn</a>
            <a href="#" style={{ color: '#adb5bd' }}>Facebook</a>
            <a href="#" style={{ color: '#adb5bd' }}>X</a>
            <a href="#" style={{ color: '#adb5bd' }}>YouTube</a>
          </div>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link href="/about" style={{ color: '#adb5bd' }}>About Us</Link></li>
            <li><Link href="/solutions" style={{ color: '#adb5bd' }}>Solutions</Link></li>
            <li><Link href="/project-development" style={{ color: '#adb5bd' }}>Projects</Link></li>
            <li><Link href="/news" style={{ color: '#adb5bd' }}>News & Updates</Link></li>
            <li><Link href="/careers" style={{ color: '#adb5bd' }}>Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Portals</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link href="/feedstock-suppliers" style={{ color: '#adb5bd' }}>Feedstock Suppliers</Link></li>
            <li><Link href="/buyers" style={{ color: '#adb5bd' }}>Buyers</Link></li>
            <li><Link href="/investors" style={{ color: '#adb5bd' }}>Investors</Link></li>
            <li><Link href="/partnerships" style={{ color: '#adb5bd' }}>Partnerships</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Corporate Office</h4>
          <p style={{ color: '#adb5bd', fontSize: '0.9rem', lineHeight: 1.8 }}>
            5701 Shingle Creek Parkway<br />
            Suite 250E<br />
            Brooklyn Center, MN 55430<br />
            <br />
            Email: info@acrestwastesolutions.com<br />
            Phone: (555) 123-4567
          </p>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid #495057', paddingTop: '2rem', textAlign: 'center', color: '#adb5bd', fontSize: '0.85rem' }}>
        <p>&copy; {new Date().getFullYear()} Acrest Waste Solutions LLC. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>Currently in development and site-selection stage.</p>
      </div>
    </footer>
  );
}
