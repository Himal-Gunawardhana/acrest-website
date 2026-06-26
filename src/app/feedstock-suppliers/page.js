export default function FeedstockSuppliers() {
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
          background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Feedstock Suppliers</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Turn disposal costs into sustainable value. We are currently identifying long-term feedstock partners.
          </p>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container grid grid-2" style={{ gap: '5rem' }}>
          <div className="animate-fade-in-up">
            <h2 className="mb-4" style={{ color: 'var(--secondary-dark)', fontSize: '2.5rem' }}>Materials of Interest</h2>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
              Acrest Waste Solutions requires consistent, high-volume streams of clean organic material. If you generate or manage these materials, we offer a long-term, sustainable off-take solution.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2.5rem' }}>
              <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>Wood Waste & Clean Wood Streams</h4>
              </div>
              <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>Forestry Residuals</h4>
              </div>
              <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>Agricultural Residuals</h4>
              </div>
              <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)', fontSize: '1.2rem', margin: 0 }}>General Biomass</h4>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up delay-100">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary-dark)', fontSize: '2rem' }}>Supplier Intake Form</h3>
            <p style={{ marginBottom: '2.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>Provide details about your material generation to discuss off-take opportunities.</p>
            
            <form className="card" style={{ padding: '2.5rem' }}>
              <input type="hidden" name="honeypot" style={{ display: 'none' }} />
              
              <div className="form-group">
                <label className="form-label">Company Name</label>
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
                <label className="form-label">Material Type</label>
                <input type="text" placeholder="e.g. Sawmill scraps, forestry slash" className="form-control" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Estimated Monthly Volume (Tons)</label>
                <input type="number" className="form-control" />
              </div>
              
              <div className="form-group">
                <label className="form-label">Location (City, State)</label>
                <input type="text" className="form-control" />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem' }}>Submit Information</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
