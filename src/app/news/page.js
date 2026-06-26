export default function News() {
  const categories = ["Resource Recovery", "Biomass", "Biochar", "Carbon Products", "Circular Economy", "Environmental Infrastructure"];
  
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
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>News & Updates</h1>
          <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.9)' }}>
            Latest insights and developments from Acrest Waste Solutions.
          </p>
        </div>
      </section>

      <section className="py-lg bg-white">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="animate-fade-in-up delay-100" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '4rem', justifyContent: 'center' }}>
            {categories.map((cat, i) => (
              <span key={i} style={{ 
                padding: '0.5rem 1.25rem', 
                backgroundColor: 'var(--bg-light)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '30px', 
                fontSize: '0.95rem', 
                color: 'var(--text-main)', 
                cursor: 'pointer',
                transition: 'all var(--transition-fast)'
              }} onMouseOver={e => {e.target.style.backgroundColor='var(--primary)'; e.target.style.color='#fff'; e.target.style.borderColor='var(--primary)'}} onMouseOut={e => {e.target.style.backgroundColor='var(--bg-light)'; e.target.style.color='var(--text-main)'; e.target.style.borderColor='var(--border-color)'}}>
                {cat}
              </span>
            ))}
          </div>

          <div className="card text-center animate-fade-in-up delay-200" style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-light)', border: '2px dashed var(--border-color)', boxShadow: 'none' }}>
            <h3 style={{ color: 'var(--secondary)', fontSize: '2rem', marginBottom: '1rem' }}>Blog Coming Soon</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>
              Check back for updates on our site selection, facility development, and industry insights.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
