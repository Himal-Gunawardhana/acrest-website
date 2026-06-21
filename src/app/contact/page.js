export default function Contact() {
  return (
    <>
      <section className="py-4 bg-white" style={{ padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)', textAlign: 'center' }}>Contact Us</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', textAlign: 'center', marginBottom: '4rem' }}>
            Get in touch with Acrest Waste Solutions.
          </p>

          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Corporate Office</h3>
              <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Acrest Waste Solutions LLC</h4>
                <p style={{ lineHeight: 1.8 }}>
                  5701 Shingle Creek Parkway<br />
                  Suite 250E<br />
                  Brooklyn Center, MN 55430
                </p>
                <div style={{ marginTop: '1rem' }}>
                  <strong>Phone:</strong> [Phone Placeholder]<br />
                  <strong>Email:</strong> [Email Placeholder]
                </div>
              </div>

              {/* Google Map Placeholder */}
              <div style={{ width: '100%', height: '300px', backgroundColor: '#e9ecef', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                <span style={{ color: 'var(--text-muted)' }}>[Google Map Integration]</span>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--secondary)' }}>Send an Inquiry</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Name</label>
                  <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
                  <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Company</label>
                  <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Reason for Inquiry</label>
                  <select style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)', backgroundColor: '#fff' }}>
                    <option>General Information</option>
                    <option>Partnership Opportunity</option>
                    <option>Media Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
                  <textarea rows="5" required style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
