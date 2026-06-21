import Link from 'next/link';

export default function ProjectDevelopment() {
  return (
    <>
      <section className="py-4 text-center" style={{ backgroundColor: 'var(--secondary)', color: '#fff', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Project Development</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Strategic site evaluation and infrastructure planning across Northern Minnesota.
          </p>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="mb-4" style={{ color: 'var(--accent)' }}>Northern Minnesota Site Evaluation</h2>
            <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Acrest Waste Solutions is currently engaged in a rigorous site-selection process. Multiple locations in Northern Minnesota are currently being evaluated for our inaugural environmental infrastructure facilities.
            </p>
            <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our criteria focus on proximity to sustainable feedstock supplies, access to critical transportation logistics, and the opportunity to integrate with the region's strong industrial and forestry heritage.
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--bg-light)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Project Goals</h3>
            <ul style={{ listStylePosition: 'inside', fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 2 }}>
              <li>Establish state-of-the-art biomass processing capabilities</li>
              <li>Develop sustainable manufacturing for carbon products</li>
              <li>Create resilient supply chains for regional waste diversion</li>
              <li>Implement scalable environmental infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container grid grid-2" style={{ gap: '3rem' }}>
          <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 className="mb-4" style={{ color: 'var(--accent)' }}>Economic Development</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              We are working closely with regional economic development agencies to ensure our projects bring maximum value to the local economy. Our future manufacturing development will create high-quality green jobs, from skilled facility operations to logistics and engineering roles, directly supporting the communities where we operate.
            </p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h3 className="mb-4" style={{ color: 'var(--accent)' }}>Community Impact</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Beyond economic growth, our facilities are designed to be environmental assets. By providing an outlet for underutilized biomass, we help mitigate wildfire risks, support sustainable forestry practices, and divert organic waste from local landfills, contributing to a cleaner, safer Northern Minnesota.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white text-center">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="mb-4">Future Manufacturing Development</h2>
          <p className="mb-4" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            The facilities under evaluation represent the first phase of a broader strategy. Our long-term vision includes scaling our carbon manufacturing footprint to meet the rapidly growing global demand for biochar and engineered carbon solutions.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/investors" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              View Investor Opportunities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
