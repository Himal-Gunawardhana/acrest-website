import Link from 'next/link';
import Image from 'next/image';

export default function Solutions() {
  return (
    <>
      <section className="py-lg text-center" style={{ 
        position: 'relative',
        color: '#fff',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Our Solutions</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Comprehensive environmental infrastructure designed for maximum resource recovery and sustainable value creation.
          </p>
        </div>
      </section>

      <section className="py-lg bg-white">
        <div className="container">
          <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <div className="animate-fade-in-up delay-100">
              <h2 className="mb-4" style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>Resource Recovery</h2>
              <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                We divert valuable organic materials from traditional waste streams. By capturing clean wood streams, forestry residuals, and agricultural waste, we prevent landfilling and establish the foundation for a circular economy.
              </p>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>Landfill diversion programs</li>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>Strategic material sourcing</li>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>Supply chain integration</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <div className="animate-fade-in-up">
              <h2 className="mb-4" style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>Biomass Processing</h2>
              <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Our planned facilities will utilize advanced processing technologies to safely and efficiently handle raw organic materials. This creates uniform, high-quality feedstock necessary for sustainable energy and carbon manufacturing.
              </p>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>Advanced sorting and sizing</li>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>Moisture control systems</li>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>High-volume capacity design</li>
              </ul>
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="animate-fade-in-up delay-100">
              <h2 className="mb-4" style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>Carbon Products</h2>
              <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Through state-of-the-art thermal conversion, we will manufacture premium biochar and engineered carbon products. These materials sequester carbon while providing immense utility across multiple industries.
              </p>
              <ul style={{ listStyle: 'none', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>Soil amendment and agriculture</li>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>Water treatment and filtration</li>
                <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>✓</span>Industrial manufacturing additives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg bg-light text-center">
        <div className="container animate-fade-in-up">
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Sustainable Infrastructure & Environmental Services</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Acrest Waste Solutions is not just processing material; we are building the vital infrastructure required for municipalities and industries to meet their aggressive environmental and zero-waste goals.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.15rem' }}>
            Discuss a Custom Solution
          </Link>
        </div>
      </section>
    </>
  );
}
