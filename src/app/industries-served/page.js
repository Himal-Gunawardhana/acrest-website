import Link from 'next/link';

export default function IndustriesServed() {
  const industries = [
    { name: "Forestry", description: "Providing a sustainable outlet for forestry residuals, slash, and non-merchantable timber, helping mitigate wildfire risks and supporting responsible forest management." },
    { name: "Agriculture", description: "Processing agricultural biomass and returning high-value biochar to the soil to improve water retention, nutrient density, and crop yields." },
    { name: "Municipalities", description: "Partnering with local governments to divert clean wood waste and yard debris from municipal landfills, extending landfill life and meeting sustainability targets." },
    { name: "Manufacturing", description: "Supplying engineered carbon products for use as sustainable additives in advanced manufacturing processes." },
    { name: "Environmental Services", description: "Delivering active carbon and biochar solutions for large-scale soil remediation and water filtration projects." },
    { name: "Commercial Businesses", description: "Helping commercial entities achieve zero-waste goals through dedicated organic material recovery programs." }
  ];

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
          background: 'linear-gradient(135deg, var(--secondary-dark), var(--primary-dark))',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in-up" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Industries Served</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Creating value across the supply chain, from raw material generation to final end-use applications.
          </p>
        </div>
      </section>

      <section className="py-lg bg-light">
        <div className="container">
          <div className="grid grid-3">
            {industries.map((ind, i) => (
              <div key={i} className={`card animate-fade-in-up delay-${(i % 3) * 100}`} style={{ borderTop: '4px solid var(--accent)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>{ind.name}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-lg bg-white text-center">
        <div className="container animate-fade-in-up" style={{ maxWidth: '700px' }}>
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Don't see your industry?</h2>
          <p className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Our processing capabilities are highly adaptable. If you generate large volumes of organic waste or have a specific application for carbon products, we can develop a tailored solution.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.15rem' }}>
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
