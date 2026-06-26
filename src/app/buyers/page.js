export default function Buyers() {
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Carbon Product Buyers</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Premium engineered carbon and biochar for industrial, agricultural, and environmental applications.
          </p>
        </div>
      </section>

      <section className="py-lg bg-white">
        <div className="container grid grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
          <div className="animate-fade-in-up">
            <h2 className="mb-4" style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>Future Applications</h2>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              Our upcoming facilities will produce highly consistent, premium-grade carbon products. We are establishing advance purchase agreements and letters of intent with buyers across several critical sectors.
            </p>
            <ul style={{ listStyle: 'none', color: 'var(--text-main)', marginTop: '2rem' }}>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.5rem', lineHeight: 1 }}>•</span>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Agriculture:</strong>
                <span className="text-muted">Soil amendment, nutrient retention, and yield improvement.</span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.5rem', lineHeight: 1 }}>•</span>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Environmental Remediation:</strong>
                <span className="text-muted">Heavy metal stabilization and soil decontamination.</span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.5rem', lineHeight: 1 }}>•</span>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Water Treatment:</strong>
                <span className="text-muted">Active carbon filtration and purification systems.</span>
              </li>
              <li style={{ marginBottom: '1.5rem', paddingLeft: '2.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.5rem', lineHeight: 1 }}>•</span>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>Industrial Applications:</strong>
                <span className="text-muted">Sustainable additives for concrete, asphalt, and metallurgy.</span>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up delay-100">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)', fontSize: '2rem' }}>Buyer Inquiry Form</h3>
            <div className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-light)' }}>
              <form>
                <input type="hidden" name="honeypot" style={{ display: 'none' }} />
                
                <div className="form-group">
                  <label className="form-label">Organization Name</label>
                  <input type="text" required className="form-control" />
                </div>
                
                <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Contact Name</label>
                    <input type="text" required className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" required className="form-control" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Intended Application</label>
                  <select className="form-control" style={{ cursor: 'pointer' }}>
                    <option>Agriculture / Soil</option>
                    <option>Water Filtration</option>
                    <option>Environmental Remediation</option>
                    <option>Industrial Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Projected Volume Requirements</label>
                  <input type="text" placeholder="e.g. 500 tons/year" className="form-control" />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem' }}>Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
