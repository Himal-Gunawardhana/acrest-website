export default function About() {
  return (
    <>
      <section className="py-4 bg-white text-center" style={{ backgroundColor: 'var(--bg-color)', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Us</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
            Leading the transition to a circular economy through advanced environmental infrastructure.
          </p>
        </div>
      </section>

      <section className="py-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container grid grid-2">
          <div>
            <h2 className="mb-4">Company Overview</h2>
            <p className="mb-4">
              Acrest Waste Solutions LLC is a forward-thinking environmental infrastructure company focused on resource recovery, biomass processing, and the manufacturing of sustainable carbon products.
            </p>
            <p className="mb-4">
              Currently in the active development and site-selection stage, we are designing facilities that will process forestry residuals, agricultural waste, and clean wood streams into high-value environmental and industrial products.
            </p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Vision</h3>
            <p className="mb-4">
              To be the premier partner in environmental infrastructure, setting the standard for sustainable resource recovery and carbon product manufacturing in North America.
            </p>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Our Mission</h3>
            <p>
              To transform underutilized organic resources into sustainable value, creating economic growth for local communities while delivering impactful environmental solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Core Values</h2>
          <div className="grid grid-4 text-center">
            <div style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Sustainability</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Prioritizing long-term environmental health in every operational decision.</p>
            </div>
            <div style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Innovation</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Leveraging advanced technologies to maximize resource recovery.</p>
            </div>
            <div style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Integrity</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Building transparent, trust-based relationships with all stakeholders.</p>
            </div>
            <div style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Community</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Driving economic development and job creation in our operational regions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center">
          <h2 className="mb-4">Leadership</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>
            Our leadership team brings decades of combined experience in environmental engineering, infrastructure development, corporate finance, and sustainable manufacturing.
          </p>
          <div style={{ padding: '3rem', backgroundColor: '#fff', borderRadius: '8px', maxWidth: '800px', margin: '0 auto', borderTop: '4px solid var(--accent)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--secondary)' }}>
              "We are building more than just processing facilities; we are building the resilient infrastructure required for tomorrow's circular economy."
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white text-center">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4">Corporate Office</h2>
          <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', textAlign: 'left' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Acrest Waste Solutions LLC</h4>
            <p style={{ lineHeight: 1.8, color: 'var(--text-main)' }}>
              5701 Shingle Creek Parkway<br />
              Suite 250E<br />
              Brooklyn Center, MN 55430
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
