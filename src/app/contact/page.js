export default function Contact() {
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Contact Us</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Get in touch with Acrest Waste Solutions.
          </p>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="grid grid-2" style={{ gap: '5rem', alignItems: 'flex-start' }}>
            <div className="animate-fade-in-up">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary-dark)', fontSize: '2rem' }}>Corporate Office</h3>
              <div className="card" style={{ padding: '2.5rem', marginBottom: '2.5rem', borderTop: '4px solid var(--accent)' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.3rem' }}>Acrest Waste Solutions LLC</h4>
                <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--text-main)' }}>
                  5701 Shingle Creek Parkway<br />
                  Suite 250E<br />
                  Brooklyn Center, MN 55430
                </p>
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', fontSize: '1.1rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong style={{ color: 'var(--secondary)' }}>Phone:</strong> <span className="text-muted">[Phone Placeholder]</span>
                  </div>
                  <div>
                    <strong style={{ color: 'var(--secondary)' }}>Email:</strong> <span className="text-muted">[Email Placeholder]</span>
                  </div>
                </div>
              </div>

              {/* Map section removed */}
            </div>

            <div className="animate-fade-in-up delay-100">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary-dark)', fontSize: '2rem' }}>Send an Inquiry</h3>
              <form className="card" style={{ padding: '2.5rem' }}>
                <input type="hidden" name="honeypot" style={{ display: 'none' }} />
                
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" required className="form-control" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" required className="form-control" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Company (Optional)</label>
                  <input type="text" className="form-control" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Reason for Inquiry</label>
                  <select className="form-control" style={{ cursor: 'pointer' }}>
                    <option>General Information</option>
                    <option>Partnership Opportunity</option>
                    <option>Media Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea rows="5" required className="form-control"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', fontSize: '1.1rem' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
