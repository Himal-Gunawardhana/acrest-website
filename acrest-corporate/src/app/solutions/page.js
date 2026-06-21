import Link from 'next/link';

export default function Solutions() {
  return (
    <>
      <section className="py-4 text-center" style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Our Solutions</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Comprehensive environmental infrastructure designed for maximum resource recovery and sustainable value creation.
          </p>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <div style={{ width: '100%', height: '300px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>[Resource Recovery Diagram]</span>
              </div>
            </div>
            <div>
              <h2 className="mb-4" style={{ color: 'var(--primary)' }}>Resource Recovery</h2>
              <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                We divert valuable organic materials from traditional waste streams. By capturing clean wood streams, forestry residuals, and agricultural waste, we prevent landfilling and establish the foundation for a circular economy.
              </p>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Landfill diversion programs</li>
                <li style={{ marginBottom: '0.5rem' }}>Strategic material sourcing</li>
                <li style={{ marginBottom: '0.5rem' }}>Supply chain integration</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center', marginBottom: '4rem', direction: 'rtl' }}>
            <div style={{ direction: 'ltr' }}>
              <div style={{ width: '100%', height: '300px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>[Biomass Processing Facility]</span>
              </div>
            </div>
            <div style={{ direction: 'ltr' }}>
              <h2 className="mb-4" style={{ color: 'var(--primary)' }}>Biomass Processing</h2>
              <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                Our planned facilities will utilize advanced processing technologies to safely and efficiently handle raw organic materials. This creates uniform, high-quality feedstock necessary for sustainable energy and carbon manufacturing.
              </p>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Advanced sorting and sizing</li>
                <li style={{ marginBottom: '0.5rem' }}>Moisture control systems</li>
                <li style={{ marginBottom: '0.5rem' }}>High-volume capacity design</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center', marginBottom: '4rem' }}>
            <div>
              <div style={{ width: '100%', height: '300px', backgroundColor: 'var(--bg-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>[Biochar & Carbon Products]</span>
              </div>
            </div>
            <div>
              <h2 className="mb-4" style={{ color: 'var(--primary)' }}>Carbon Products</h2>
              <p className="mb-4" style={{ fontSize: '1.1rem' }}>
                Through state-of-the-art thermal conversion, we will manufacture premium biochar and engineered carbon products. These materials sequester carbon while providing immense utility across multiple industries.
              </p>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Soil amendment and agriculture</li>
                <li style={{ marginBottom: '0.5rem' }}>Water treatment and filtration</li>
                <li style={{ marginBottom: '0.5rem' }}>Industrial manufacturing additives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center">
          <h2 className="mb-4">Sustainable Infrastructure & Environmental Services</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Acrest Waste Solutions is not just processing material; we are building the vital infrastructure required for municipalities and industries to meet their aggressive environmental and zero-waste goals.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Discuss a Custom Solution
          </Link>
        </div>
      </section>
    </>
  );
}
