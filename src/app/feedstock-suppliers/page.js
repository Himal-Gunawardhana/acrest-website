export default function FeedstockSuppliers() {
  return (
    <>
      <section className="py-4 text-center" style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Feedstock Suppliers</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Turn disposal costs into sustainable value. We are currently identifying long-term feedstock partners.
          </p>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container grid grid-2" style={{ gap: '4rem' }}>
          <div>
            <h2 className="mb-4" style={{ color: 'var(--secondary)' }}>Materials of Interest</h2>
            <p className="mb-4" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Acrest Waste Solutions requires consistent, high-volume streams of clean organic material. If you generate or manage these materials, we offer a long-term, sustainable off-take solution.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)' }}>Wood Waste & Clean Wood Streams</h4>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)' }}>Forestry Residuals</h4>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)' }}>Agricultural Residuals</h4>
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)' }}>General Biomass</h4>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Supplier Intake Form</h3>
            <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Provide details about your material generation to discuss off-take opportunities.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Company Name</label>
                <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
              </div>
              <div className="grid grid-2" style={{ gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Contact Name</label>
                  <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
                  <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Material Type</label>
                <input type="text" placeholder="e.g. Sawmill scraps, forestry slash" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Estimated Monthly Volume (Tons)</label>
                <input type="number" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Location (City, State)</label>
                <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>Submit Information</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
