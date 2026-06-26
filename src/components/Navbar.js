import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="glass-panel" style={{ 
      position: 'sticky', 
      top: 0, 
      zIndex: 100, 
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <Image src="/logo.jpg" alt="Acrest Waste Solutions Logo" width={180} height={180} style={{ objectFit: 'contain', maxHeight: '70px', width: 'auto' }} />
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', fontWeight: 600, fontSize: '0.95rem' }}>
          <Link href="/about" style={{ color: 'var(--secondary-dark)' }}>About Us</Link>
          <Link href="/solutions" style={{ color: 'var(--secondary-dark)' }}>Solutions</Link>
          <Link href="/project-development" style={{ color: 'var(--secondary-dark)' }}>Project Development</Link>
          <Link href="/industries-served" style={{ color: 'var(--secondary-dark)' }}>Industries</Link>
          <Link href="/partnerships" style={{ color: 'var(--secondary-dark)' }}>Partnerships</Link>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem' }}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
