export default function Investors() {
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
          background: 'linear-gradient(135deg, var(--secondary), var(--primary-dark))',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Investor Relations</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Capitalizing on the rapidly expanding market for environmental infrastructure and engineered carbon.
          </p>
        </div>
      </section>

      <section className="py-lg bg-white">
        <div className="container grid grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
          <div className="animate-fade-in-up">
            <h2 className="mb-4" style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>The Growth Opportunity</h2>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              Acrest Waste Solutions is positioned at the intersection of two massive global trends: the urgent need for sustainable waste diversion infrastructure and the exponentially growing demand for carbon sequestration technologies and products.
            </p>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              By developing modular, highly efficient processing facilities, Acrest is creating a scalable model that transforms low-value organic waste into premium commodities.
            </p>
          </div>
          <div className="card animate-fade-in-up delay-100" style={{ backgroundColor: 'var(--bg-light)', borderLeft: '4px solid var(--accent)' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '1.8rem' }}>Investment Highlights</h3>
            <ul style={{ listStyle: 'none', color: 'var(--text-main)', marginTop: '1rem' }}>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative', fontSize: '1.1rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>Scalable infrastructure development model</li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative', fontSize: '1.1rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>High-margin premium carbon product manufacturing</li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative', fontSize: '1.1rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>Access to emerging carbon credit markets</li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative', fontSize: '1.1rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>Strong regulatory and governmental tailwinds</li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative', fontSize: '1.1rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>Experienced executive leadership team</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container text-center" style={{ maxWidth: '1000px' }}>
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Future Expansion Strategy</h2>
          <div className="grid grid-3" style={{ textAlign: 'left', marginTop: '3.5rem' }}>
            <div className="card animate-fade-in-up" style={{ borderTop: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Phase 1: Validation & Development</h4>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>Site selection, engineering, and permitting for inaugural facilities in Northern Minnesota. Securing primary feedstock agreements.</p>
            </div>
            <div className="card animate-fade-in-up delay-100" style={{ borderTop: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Phase 2: Construction & Operations</h4>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>Facility build-out, commissioning, and initiation of commercial biomass processing and carbon manufacturing.</p>
            </div>
            <div className="card animate-fade-in-up delay-200" style={{ borderTop: '4px solid var(--primary)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Phase 3: Scale & Replicate</h4>
              <p className="text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>Expanding capacity at existing sites and replicating the infrastructure model across new geographic regions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg bg-white text-center">
        <div className="container animate-fade-in-up" style={{ maxWidth: '650px' }}>
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Request Investor Materials</h2>
          <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
            Acrest Waste Solutions is currently entertaining inquiries from qualified institutional investors, private equity firms, and strategic partners.
          </p>
          
          <form className="card text-left" style={{ marginTop: '2.5rem', padding: '2.5rem', backgroundColor: 'var(--bg-light)' }}>
            <input type="hidden" name="honeypot" style={{ display: 'none' }} />
            
            <div className="form-group">
              <label className="form-label">Name / Organization</label>
              <input type="text" className="form-control" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-control" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Inquiry Details</label>
              <textarea rows="4" className="form-control" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', fontSize: '1.1rem' }}>Request Information</button>
          </form>
        </div>
      </section>
    </>
  );
}
