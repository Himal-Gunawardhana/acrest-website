import Link from 'next/link';

export default function Partnerships() {
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
          background: 'linear-gradient(135deg, var(--accent), var(--primary-dark))',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Partnerships</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Building the circular economy requires collaboration. We are actively seeking strategic partners to build the infrastructure of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: 'var(--secondary-dark)', fontSize: '2.5rem', marginBottom: '3rem' }}>Who We Are Seeking</h2>
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            
            <div className="card animate-fade-in-up" style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.5rem' }}>Municipalities & Counties</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                We partner with local governments to design and implement regional waste diversion strategies, extending landfill lifespans and meeting sustainability mandates.
              </p>
              <Link href="/contact" style={{ fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }} onMouseOver={e => e.target.style.textDecoration='underline'} onMouseOut={e => e.target.style.textDecoration='none'}>Partner with us &rarr;</Link>
            </div>

            <div className="card animate-fade-in-up delay-100" style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.5rem' }}>Economic Development Organizations</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Collaborating to bring green jobs, capital investment, and sustainable industrial growth to Northern Minnesota communities.
              </p>
              <Link href="/contact" style={{ fontWeight: 600, color: 'var(--accent)' }}>Partner with us &rarr;</Link>
            </div>

            <div className="card animate-fade-in-up" style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.5rem' }}>Forestry Companies & Sawmills</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Establishing long-term offtake agreements for forestry residuals, bark, and mill scrap, turning disposal costs into sustainable value.
              </p>
              <Link href="/feedstock-suppliers" style={{ fontWeight: 600, color: 'var(--accent)' }}>Become a supplier &rarr;</Link>
            </div>

            <div className="card animate-fade-in-up delay-100" style={{ borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.5rem' }}>Environmental & Strategic Firms</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Working with engineering, logistics, and environmental consulting firms to execute complex infrastructure developments and carbon credit methodologies.
              </p>
              <Link href="/contact" style={{ fontWeight: 600, color: 'var(--accent)' }}>Partner with us &rarr;</Link>
            </div>

          </div>
        </div>
      </section>

      <section className="py-lg text-center" style={{ backgroundColor: 'var(--primary)', color: '#fff' }}>
        <div className="container animate-fade-in-up" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4" style={{ fontSize: '2.5rem', color: '#fff' }}>Let's Build Together</h2>
          <p className="mb-4" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', lineHeight: 1.8 }}>
            If you represent an organization that shares our vision for sustainable resource recovery and environmental infrastructure, we want to connect.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/contact" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '1rem 3rem', fontSize: '1.15rem' }}>
              Submit Partnership Inquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
