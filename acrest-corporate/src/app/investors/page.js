import Link from 'next/link';

export default function Investors() {
  return (
    <>
      <section className="py-4 text-center" style={{ backgroundColor: 'var(--secondary)', color: '#fff', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Investor Relations</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Capitalizing on the rapidly expanding market for environmental infrastructure and engineered carbon.
          </p>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="mb-4" style={{ color: 'var(--primary)' }}>The Growth Opportunity</h2>
            <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Acrest Waste Solutions is positioned at the intersection of two massive global trends: the urgent need for sustainable waste diversion infrastructure and the exponentially growing demand for carbon sequestration technologies and products.
            </p>
            <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              By developing modular, highly efficient processing facilities, Acrest is creating a scalable model that transforms low-value organic waste into premium commodities.
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--bg-light)', padding: '3rem', borderRadius: '8px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>Investment Highlights</h3>
            <ul style={{ listStylePosition: 'inside', fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.8 }}>
              <li style={{ marginBottom: '0.5rem' }}>Scalable infrastructure development model</li>
              <li style={{ marginBottom: '0.5rem' }}>High-margin premium carbon product manufacturing</li>
              <li style={{ marginBottom: '0.5rem' }}>Access to emerging carbon credit markets</li>
              <li style={{ marginBottom: '0.5rem' }}>Strong regulatory and governmental tailwinds</li>
              <li style={{ marginBottom: '0.5rem' }}>Experienced executive leadership team</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <h2 className="mb-4">Future Expansion Strategy</h2>
          <div className="grid grid-3" style={{ textAlign: 'left', marginTop: '3rem' }}>
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', borderTop: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Phase 1: Validation & Development</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Site selection, engineering, and permitting for inaugural facilities in Northern Minnesota. Securing primary feedstock agreements.</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', borderTop: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Phase 2: Construction & Operations</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Facility build-out, commissioning, and initiation of commercial biomass processing and carbon manufacturing.</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', borderTop: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Phase 3: Scale & Replicate</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>Expanding capacity at existing sites and replicating the infrastructure model across new geographic regions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-white text-center">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4">Request Investor Materials</h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            Acrest Waste Solutions is currently entertaining inquiries from qualified institutional investors, private equity firms, and strategic partners.
          </p>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', marginTop: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Name / Organization</label>
              <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
              <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Inquiry Details</label>
              <textarea rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}></textarea>
            </div>
            <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }}>Request Information</button>
          </form>
        </div>
      </section>
    </>
  );
}
