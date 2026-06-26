import Link from 'next/link';

export default function ProjectDevelopment() {
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
          background: 'linear-gradient(135deg, var(--secondary-dark), var(--secondary))',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Project Development</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Strategic site evaluation and infrastructure planning across Northern Minnesota.
          </p>
        </div>
      </section>

      <section className="py-lg bg-white">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div className="animate-fade-in-up">
            <h2 className="mb-4" style={{ color: 'var(--accent)', fontSize: '2.5rem' }}>Northern Minnesota Site Evaluation</h2>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              Acrest Waste Solutions is currently engaged in a rigorous site-selection process. Multiple locations in Northern Minnesota are currently being evaluated for our inaugural environmental infrastructure facilities.
            </p>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              Our criteria focus on proximity to sustainable feedstock supplies, access to critical transportation logistics, and the opportunity to integrate with the region's strong industrial and forestry heritage.
            </p>
          </div>
          <div className="card animate-fade-in-up delay-100" style={{ backgroundColor: 'var(--bg-light)', borderTop: '4px solid var(--primary)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '1.5rem' }}>Project Goals</h3>
            <ul style={{ listStyle: 'none', color: 'var(--secondary-dark)' }}>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>Establish state-of-the-art biomass processing capabilities</li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>Develop sustainable manufacturing for carbon products</li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>Create resilient supply chains for regional waste diversion</li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>Implement scalable environmental infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container grid grid-2" style={{ gap: '3rem' }}>
          <div className="card animate-fade-in-up">
            <h3 className="mb-4" style={{ color: 'var(--accent)', fontSize: '1.8rem' }}>Economic Development</h3>
            <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              We are working closely with regional economic development agencies to ensure our projects bring maximum value to the local economy. Our future manufacturing development will create high-quality green jobs, from skilled facility operations to logistics and engineering roles, directly supporting the communities where we operate.
            </p>
          </div>
          <div className="card animate-fade-in-up delay-100">
            <h3 className="mb-4" style={{ color: 'var(--accent)', fontSize: '1.8rem' }}>Community Impact</h3>
            <p className="text-muted" style={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              Beyond economic growth, our facilities are designed to be environmental assets. By providing an outlet for underutilized biomass, we help mitigate wildfire risks, support sustainable forestry practices, and divert organic waste from local landfills, contributing to a cleaner, safer Northern Minnesota.
            </p>
          </div>
        </div>
      </section>

      <section className="py-lg bg-white text-center">
        <div className="container animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Future Manufacturing Development</h2>
          <p className="mb-4 text-muted" style={{ fontSize: '1.2rem', lineHeight: 1.8 }}>
            The facilities under evaluation represent the first phase of a broader strategy. Our long-term vision includes scaling our carbon manufacturing footprint to meet the rapidly growing global demand for biochar and engineered carbon solutions.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/investors" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.15rem' }}>
              View Investor Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
