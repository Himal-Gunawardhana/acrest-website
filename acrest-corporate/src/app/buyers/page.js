export default function Buyers() {
  return (
    <>
      <section className="py-4 text-center" style={{ backgroundColor: 'var(--secondary)', color: '#fff', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Carbon Product Buyers</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Premium engineered carbon and biochar for industrial, agricultural, and environmental applications.
          </p>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="mb-4" style={{ color: 'var(--primary)' }}>Future Applications</h2>
            <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Our upcoming facilities will produce highly consistent, premium-grade carbon products. We are establishing advance purchase agreements and letters of intent with buyers across several critical sectors.
            </p>
            <ul style={{ listStylePosition: 'inside', fontSize: '1.1rem', color: 'var(--text-main)', lineHeight: 2, marginBottom: '2rem' }}>
              <li><strong>Agriculture:</strong> Soil amendment, nutrient retention, and yield improvement.</li>
              <li><strong>Environmental Remediation:</strong> Heavy metal stabilization and soil decontamination.</li>
              <li><strong>Water Treatment:</strong> Active carbon filtration and purification systems.</li>
              <li><strong>Industrial Applications:</strong> Sustainable additives for concrete, asphalt, and metallurgy.</li>
            </ul>
          </div>

          <div>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent)' }}>Buyer Inquiry Form</h3>
            <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Organization Name</label>
                  <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
                <div className="grid grid-2" style={{ gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Contact Name</label>
                    <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
                    <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Intended Application</label>
                  <select style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc', backgroundColor: '#fff' }}>
                    <option>Agriculture / Soil</option>
                    <option>Water Filtration</option>
                    <option>Environmental Remediation</option>
                    <option>Industrial Manufacturing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Projected Volume Requirements</label>
                  <input type="text" placeholder="e.g. 500 tons/year" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Submit Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
