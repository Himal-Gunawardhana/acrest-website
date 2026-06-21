import Link from 'next/link';

export default function Partnerships() {
  return (
    <>
      <section className="py-4 text-center" style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>Partnerships</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Building the circular economy requires collaboration. We are actively seeking strategic partners to build the infrastructure of tomorrow.
          </p>
        </div>
      </section>

      <section className="py-4 bg-white">
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: 'var(--secondary)' }}>Who We Are Seeking</h2>
          <div className="grid grid-2" style={{ gap: '2rem' }}>
            
            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Municipalities & Counties</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                We partner with local governments to design and implement regional waste diversion strategies, extending landfill lifespans and meeting sustainability mandates.
              </p>
              <Link href="/contact" style={{ fontWeight: 600 }}>Partner with us &rarr;</Link>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Economic Development Organizations</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Collaborating to bring green jobs, capital investment, and sustainable industrial growth to Northern Minnesota communities.
              </p>
              <Link href="/contact" style={{ fontWeight: 600 }}>Partner with us &rarr;</Link>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Forestry Companies & Sawmills</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Establishing long-term offtake agreements for forestry residuals, bark, and mill scrap, turning disposal costs into sustainable value.
              </p>
              <Link href="/feedstock-suppliers" style={{ fontWeight: 600 }}>Become a supplier &rarr;</Link>
            </div>

            <div style={{ padding: '2rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', borderLeft: '4px solid var(--accent)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Environmental & Strategic Firms</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Working with engineering, logistics, and environmental consulting firms to execute complex infrastructure developments and carbon credit methodologies.
              </p>
              <Link href="/contact" style={{ fontWeight: 600 }}>Partner with us &rarr;</Link>
            </div>

          </div>
        </div>
      </section>

      <section className="py-4 text-center" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4">Let's Build Together</h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            If you represent an organization that shares our vision for sustainable resource recovery and environmental infrastructure, we want to connect.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>
            Submit Partnership Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
