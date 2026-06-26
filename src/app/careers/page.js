export default function Careers() {
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
          background: 'linear-gradient(135deg, var(--primary-dark), var(--primary))',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Careers</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Join the team building the future of sustainable infrastructure.
          </p>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container text-center animate-fade-in-up delay-100" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '4rem' }}>
            <h2 className="mb-4" style={{ color: 'var(--secondary-dark)', fontSize: '2.5rem' }}>Future Opportunities</h2>
            <p className="mb-4 text-muted" style={{ lineHeight: 1.8, fontSize: '1.15rem' }}>
              Acrest Waste Solutions is currently in the project development and site-selection stage. As we advance toward the construction and operational phases of our Northern Minnesota facilities, we will be recruiting for a wide range of roles.
            </p>
            
            <div style={{ textAlign: 'left', marginTop: '3rem', backgroundColor: 'var(--bg-light)', padding: '2.5rem', borderRadius: 'var(--radius-md)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>Anticipated Future Roles:</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-main)', lineHeight: 1.8 }}>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.75rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>•</span>Facility Operations & Management</li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.75rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>•</span>Environmental Engineering</li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.75rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>•</span>Logistics and Supply Chain Coordination</li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.75rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>•</span>Heavy Equipment Operators</li>
                <li style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: '0.75rem' }}><span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 'bold' }}>•</span>Quality Assurance & Safety Managers</li>
              </ul>
            </div>
            
            <hr style={{ margin: '3rem 0', borderColor: 'var(--border-color)', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontStyle: 'italic' }}>
              Please check back as our projects progress, or follow us on LinkedIn for official hiring announcements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
