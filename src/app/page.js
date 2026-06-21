import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '80vh', 
        minHeight: '600px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/images/biomass.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(27, 67, 50, 0.75)',
          zIndex: -1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            Transforming Underutilized Resources Into Sustainable Value
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
            Developing innovative resource recovery, biomass processing, and carbon manufacturing solutions that create environmental and economic value.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/project-development" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Explore Our Projects
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-4 bg-white">
        <div className="container text-center" style={{ maxWidth: '900px' }}>
          <h2 className="mb-4">Our Mission</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            Acrest Waste Solutions is dedicated to advancing the circular economy. We are currently evaluating strategic locations across Northern Minnesota to develop state-of-the-art facilities that will process forestry residuals and wood waste into high-value carbon products and sustainable energy.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-4" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <h2 className="text-center mb-4">Core Solutions Under Development</h2>
          <div className="grid grid-3">
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Resource Recovery</h3>
              <p>Diverting clean wood streams and agricultural residuals from landfills to create sustainable value and support regional environmental goals.</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Biomass Processing</h3>
              <p>Processing raw organic materials using advanced infrastructure to support clean energy generation and sustainable manufacturing.</p>
            </div>
            <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Carbon Products</h3>
              <p>Manufacturing premium biochar and engineered carbon for agricultural, environmental remediation, and industrial applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column - Project Development */}
      <section className="py-4 bg-white">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <Image src="/images/forestry.png" alt="Forestry Operations" width={600} height={400} style={{ borderRadius: '8px', objectFit: 'cover', width: '100%', height: 'auto' }} />
          </div>
          <div style={{ paddingLeft: '2rem' }}>
            <h2 className="mb-4">Project Development</h2>
            <p className="mb-4">
              We are actively engaged in site-selection across Northern Minnesota. Our upcoming facilities will serve as vital environmental infrastructure, integrating seamlessly with existing forestry and agricultural supply chains.
            </p>
            <ul style={{ listStylePosition: 'inside', marginBottom: '2rem', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.5rem' }}>Strategic site evaluation in progress</li>
              <li style={{ marginBottom: '0.5rem' }}>Collaboration with economic development agencies</li>
              <li style={{ marginBottom: '0.5rem' }}>Designing for maximum community impact</li>
            </ul>
            <Link href="/project-development" className="btn btn-primary">Learn About Our Development</Link>
          </div>
        </div>
      </section>

      {/* Industries & Partnerships CTA */}
      <section className="py-4" style={{ backgroundColor: 'var(--accent)', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: '1.5rem' }}>Seeking Strategic Partnerships</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
            Whether you are an investor, a feedstock supplier, a municipality, or a future buyer of carbon products, we want to hear from you. We are building the infrastructure of tomorrow, today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/investors" className="btn" style={{ backgroundColor: '#fff', color: 'var(--accent)' }}>For Investors</Link>
            <Link href="/feedstock-suppliers" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>For Suppliers</Link>
          </div>
        </div>
      </section>
    </>
  );
}
