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
      <section className="py-4 text-center bg-white" style={{ padding: '6rem 2rem 4rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>Industries Served</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}>
            Creating value across the supply chain, from raw material generation to final end-use applications.
          </p>
        </div>
      </section>

      <section className="py-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="grid grid-3">
            {industries.map((ind, i) => (
              <div key={i} style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '4px solid var(--accent)' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{ind.name}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 bg-white text-center">
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 className="mb-4">Don't see your industry?</h2>
          <p className="mb-4" style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Our processing capabilities are highly adaptable. If you generate large volumes of organic waste or have a specific application for carbon products, we can develop a tailored solution.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
