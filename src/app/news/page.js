export default function News() {
  const categories = ["Resource Recovery", "Biomass", "Biochar", "Carbon Products", "Circular Economy", "Environmental Infrastructure"];
  
  return (
    <>
      <section className="py-4 bg-white" style={{ padding: '6rem 2rem 4rem' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>News & Updates</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Latest insights and developments from Acrest Waste Solutions.
          </p>
          
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            {categories.map((cat, i) => (
              <span key={i} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--bg-light)', border: '1px solid var(--border-color)', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-main)', cursor: 'pointer' }}>
                {cat}
              </span>
            ))}
          </div>

          <div className="text-center" style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-light)', borderRadius: '8px', border: '2px dashed var(--border-color)' }}>
            <h3 style={{ color: 'var(--text-muted)' }}>Blog Coming Soon</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
              Check back for updates on our site selection, facility development, and industry insights.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
