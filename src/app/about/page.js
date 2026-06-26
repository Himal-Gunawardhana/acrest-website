import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>About Us</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Leading the transition to a circular economy through advanced environmental infrastructure.
          </p>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div className="animate-fade-in-up">
            <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Company Overview</h2>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem' }}>
              Acrest Waste Solutions LLC is a forward-thinking environmental infrastructure company focused on resource recovery, biomass processing, and the manufacturing of sustainable carbon products.
            </p>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem' }}>
              Currently in the active development and site-selection stage, we are designing facilities that will process forestry residuals, agricultural waste, and clean wood streams into high-value environmental and industrial products.
            </p>
          </div>
          <div className="card animate-fade-in-up delay-100" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Vision</h3>
            <p className="mb-4 text-muted">
              To be the premier partner in environmental infrastructure, setting the standard for sustainable resource recovery and carbon product manufacturing in North America.
            </p>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Mission</h3>
            <p className="text-muted">
              To transform underutilized organic resources into sustainable value, creating economic growth for local communities while delivering impactful environmental solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-lg bg-white">
        <div className="container">
          <h2 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>Core Values</h2>
          <div className="grid grid-4 text-center mt-4">
            <div className="card animate-fade-in-up">
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.3rem' }}>Sustainability</h4>
              <p className="text-muted" style={{ fontSize: '1rem' }}>Prioritizing long-term environmental health in every operational decision.</p>
            </div>
            <div className="card animate-fade-in-up delay-100">
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.3rem' }}>Innovation</h4>
              <p className="text-muted" style={{ fontSize: '1rem' }}>Leveraging advanced technologies to maximize resource recovery.</p>
            </div>
            <div className="card animate-fade-in-up delay-200">
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.3rem' }}>Integrity</h4>
              <p className="text-muted" style={{ fontSize: '1rem' }}>Building transparent, trust-based relationships with all stakeholders.</p>
            </div>
            <div className="card animate-fade-in-up delay-300">
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem', fontSize: '1.3rem' }}>Community</h4>
              <p className="text-muted" style={{ fontSize: '1rem' }}>Driving economic development and job creation in our operational regions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container text-center">
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Leadership</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-muted)', fontSize: '1.2rem' }}>
            Our leadership team brings decades of combined experience in environmental engineering, infrastructure development, corporate finance, and sustainable manufacturing.
          </p>
          <div className="card animate-fade-in-up" style={{ maxWidth: '800px', margin: '0 auto', borderTop: '4px solid var(--accent)' }}>
            <p style={{ fontSize: '1.3rem', fontStyle: 'italic', color: 'var(--secondary-dark)' }}>
              "We are building more than just processing facilities; we are building the resilient infrastructure required for tomorrow's circular economy."
            </p>
          </div>
        </div>
      </section>

      <section className="py-lg bg-white text-center">
        <div className="container animate-fade-in-up" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Corporate Office</h2>
          <div className="card text-left" style={{ backgroundColor: 'var(--bg-light)' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.4rem' }}>Acrest Waste Solutions LLC</h4>
            <p style={{ lineHeight: 1.8, color: 'var(--text-main)', fontSize: '1.1rem' }}>
              5701 Shingle Creek Parkway<br />
              Suite 250E<br />
              Brooklyn Center, MN 55430
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
