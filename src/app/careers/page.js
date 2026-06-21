export default function Careers() {
  return (
    <>
      <section className="py-4 bg-white text-center" style={{ padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>Careers</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
            Join the team building the future of sustainable infrastructure.
          </p>
        </div>
      </section>

      <section className="py-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container text-center" style={{ maxWidth: '700px' }}>
          <div style={{ backgroundColor: '#fff', padding: '3rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <h2 className="mb-4" style={{ color: 'var(--secondary)' }}>Future Opportunities</h2>
            <p className="mb-4" style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Acrest Waste Solutions is currently in the project development and site-selection stage. As we advance toward the construction and operational phases of our Northern Minnesota facilities, we will be recruiting for a wide range of roles.
            </p>
            
            <div style={{ textAlign: 'left', marginTop: '2rem' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Anticipated Future Roles:</h4>
              <ul style={{ listStylePosition: 'inside', color: 'var(--text-main)', lineHeight: 1.8 }}>
                <li>Facility Operations & Management</li>
                <li>Environmental Engineering</li>
                <li>Logistics and Supply Chain Coordination</li>
                <li>Heavy Equipment Operators</li>
                <li>Quality Assurance & Safety Managers</li>
              </ul>
            </div>
            
            <hr style={{ margin: '2rem 0', borderColor: 'var(--border-color)', borderStyle: 'solid', borderWidth: '1px 0 0 0' }} />
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Please check back as our projects progress, or follow us on LinkedIn for official hiring announcements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
