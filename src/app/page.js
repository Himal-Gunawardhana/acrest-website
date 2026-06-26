import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '85vh', 
        minHeight: '650px',
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
          backgroundImage: 'url(/images/forestry.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
          transform: 'scale(1.05)',
          animation: 'zoomOut 10s ease-out forwards'
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(27, 67, 50, 0.8), rgba(33, 37, 41, 0.9))',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in-up" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          <h1 style={{ color: '#fff', fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            Transforming Underutilized Resources Into Sustainable Value
          </h1>
          <p style={{ fontSize: '1.35rem', margin: '0 auto 2.5rem', lineHeight: 1.6, opacity: 0.9, fontWeight: 300 }}>
            Developing innovative resource recovery, biomass processing, and carbon manufacturing solutions that create environmental and economic value.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <Link href="/project-development" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Explore Our Projects
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-lg bg-white">
        <div className="container text-center animate-fade-in-up delay-100" style={{ maxWidth: '900px' }}>
          <h2 className="mb-4" style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Our Mission</h2>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Acrest Waste Solutions is dedicated to advancing the circular economy. We are currently evaluating strategic locations across Northern Minnesota to develop state-of-the-art facilities that will process forestry residuals and wood waste into high-value carbon products and sustainable energy.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-lg bg-light">
        <div className="container">
          <h2 className="text-center mb-4" style={{ fontSize: '2.5rem' }}>Core Solutions Under Development</h2>
          <div className="grid grid-3 mt-4">
            <div className="card animate-fade-in-up delay-100">
              <h3 className="card-title">Resource Recovery</h3>
              <p className="text-muted">Diverting clean wood streams and agricultural residuals from landfills to create sustainable value and support regional environmental goals.</p>
            </div>
            <div className="card animate-fade-in-up delay-200">
              <h3 className="card-title">Biomass Processing</h3>
              <p className="text-muted">Processing raw organic materials using advanced infrastructure to support clean energy generation and sustainable manufacturing.</p>
            </div>
            <div className="card animate-fade-in-up delay-300">
              <h3 className="card-title">Carbon Products</h3>
              <p className="text-muted">Manufacturing premium biochar and engineered carbon for agricultural, environmental remediation, and industrial applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column - Project Development */}
      <section className="py-lg bg-white">
        <div className="container grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div className="animate-fade-in-up">
            <Image src="/images/industrial.png" alt="Industrial Facility" width={800} height={600} style={{ borderRadius: 'var(--radius-lg)', objectFit: 'cover', width: '100%', height: 'auto', boxShadow: 'var(--shadow-lg)' }} />
          </div>
          <div className="animate-fade-in-up delay-100">
            <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Project Development</h2>
            <p className="mb-4 text-muted" style={{ fontSize: '1.15rem' }}>
              We are actively engaged in site-selection across Northern Minnesota. Our upcoming facilities will serve as vital environmental infrastructure, integrating seamlessly with existing forestry and agricultural supply chains.
            </p>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                Strategic site evaluation in progress
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                Collaboration with economic development agencies
              </li>
              <li style={{ marginBottom: '1rem', paddingLeft: '2rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                Designing for maximum community impact
              </li>
            </ul>
            <Link href="/project-development" className="btn btn-primary">Learn About Our Development</Link>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-lg bg-dark text-center">
        <div className="container">
          <h2 className="mb-4 text-light" style={{ fontSize: '2.5rem' }}>Industries Served</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: 'var(--text-muted)', fontSize: '1.2rem' }}>
            Our infrastructure is designed to provide sustainable solutions and value across multiple key sectors.
          </p>
          <div className="grid grid-3">
            <div className="glass-dark" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--primary-light)', marginBottom: '1rem', fontSize: '1.3rem' }}>Forestry</h4>
              <p style={{ color: 'var(--text-muted)' }}>Sustainable processing of residuals and slash.</p>
            </div>
            <div className="glass-dark" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--primary-light)', marginBottom: '1rem', fontSize: '1.3rem' }}>Agriculture</h4>
              <p style={{ color: 'var(--text-muted)' }}>Premium biochar for soil enhancement.</p>
            </div>
            <div className="glass-dark" style={{ padding: '2rem' }}>
              <h4 style={{ color: 'var(--primary-light)', marginBottom: '1rem', fontSize: '1.3rem' }}>Municipalities</h4>
              <p style={{ color: 'var(--text-muted)' }}>Waste diversion and environmental infrastructure.</p>
            </div>
          </div>
          <div className="mt-4 pt-4">
            <Link href="/industries-served" className="btn btn-outline" style={{ borderColor: 'var(--primary-light)', color: 'var(--primary-light)' }}>View All Industries</Link>
          </div>
        </div>
      </section>

      {/* Partnerships CTA */}
      <section className="py-lg" style={{ backgroundColor: 'var(--primary)', color: '#fff', textAlign: 'center' }}>
        <div className="container animate-fade-in-up">
          <h2 style={{ color: '#fff', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Partnership Opportunities</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto 2.5rem', fontSize: '1.25rem', opacity: 0.9 }}>
            Whether you are an investor, a feedstock supplier, a municipality, or a future buyer of carbon products, we want to hear from you. We are building the infrastructure of tomorrow, today.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/investors" className="btn" style={{ backgroundColor: '#fff', color: 'var(--primary)' }}>For Investors</Link>
            <Link href="/feedstock-suppliers" className="btn" style={{ backgroundColor: 'var(--secondary-dark)', color: '#fff' }}>For Suppliers</Link>
            <Link href="/buyers" className="btn" style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>For Buyers</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-lg bg-light text-center">
        <div className="container animate-fade-in-up delay-100">
          <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Ready to Get Started?</h2>
          <p className="text-muted mb-4" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Contact our corporate office to discuss potential partnerships, investment opportunities, or general inquiries.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Contact Us Today</Link>
        </div>
      </section>
    </>
  );
}
