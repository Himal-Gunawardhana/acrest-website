import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header style={{ backgroundColor: 'var(--bg-color)', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/">
            <Image src="/logo.jpg" alt="Acrest Waste Solutions Logo" width={180} height={180} style={{ objectFit: 'contain', maxHeight: '80px', width: 'auto' }} />
          </Link>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontWeight: 500 }}>
          <Link href="/about" style={{ color: 'var(--secondary)' }}>About Us</Link>
          <Link href="/solutions" style={{ color: 'var(--secondary)' }}>Solutions</Link>
          <Link href="/project-development" style={{ color: 'var(--secondary)' }}>Project Development</Link>
          <Link href="/industries-served" style={{ color: 'var(--secondary)' }}>Industries</Link>
          <Link href="/partnerships" style={{ color: 'var(--secondary)' }}>Partnerships</Link>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
