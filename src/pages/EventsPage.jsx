import React from 'react';
import PartnersSection from '../components/PartnersSection';

const eventVideos = [
  {
    id: 'Atlj9PrDZ8s',
    title: 'UPI & Merchant Economics: Industry Insights on MDR & Financial Inclusion'
  },
  {
    id: 'N12OVWwWyWs',
    title: 'Mera Digital Pay: Enabling Essential Financial Services Across Bharat'
  },
  {
    id: 'BxKvdhprEnE',
    title: 'How Women Banking Mitras are building sustainable livelihoods in rural India'
  },
  {
    id: 'tML5TZPnZXo',
    title: 'Building the Bharat Gateway for the Next 500 Million | Last-Mile Banking & Digital Services'
  },
  {
    id: 'QimFelSQb1Q',
    title: 'Assisted Digital Banking: Scaling Last-Mile Access with Mobile & Aadhaar Solutions'
  },
  {
    id: 'SCXEJfkf_8M',
    title: 'Decoding Bharat: High-Growth Fintech & Banking Opportunities for Local Merchants'
  }
];

export default function EventsPage() {
  return (
    <main className="events-page-main">
      {/* Breadcrumbs */}
      <div id="breadcrumbs" className="breadcrumbs-wrapper bgcolor--white">
        <div className="container--responsive">
          <ul className="breadcrumbs-container" style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: '16px 0', margin: 0, fontSize: '14px', color: '#64748b' }}>
            <li className="item-home">
              <a className="bread-link bread-home set-retailer" href="/" style={{ color: '#0c4696', textDecoration: 'none' }}>
                Home
              </a>
            </li>
            <li className="separator separator-home">::</li>
            <li className="item-current item-events">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                Events
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Banner */}
      <section className="top-wrapper media" style={{ background: '#f8fafc', padding: '50px 0 60px', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container--responsive">
          <div className="top-content" style={{ maxWidth: '850px' }}>
            <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '48px', fontWeight: 800, color: '#0c4696', marginBottom: '20px', lineHeight: 1.15 }}>
              Events
            </h1>
            <p className="body-content" style={{ fontSize: '17px', lineHeight: 1.7, color: '#4a5568', margin: 0 }}>
              Watch the latest TV interviews, events, webinars and stories showcasing social change at the last mile and making India a financially and digitally inclusive nation.
            </p>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="media-main-wrapper event-wrapper bgcolor--white" style={{ padding: '60px 0 80px', background: '#ffffff' }}>
        <div className="container--responsive">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {eventVideos.map((video) => (
              <div
                key={video.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 6px 24px rgba(12, 70, 150, 0.06)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#000000' }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  />
                </div>
                <div style={{ padding: '20px 24px', flex: '1', display: 'flex', alignItems: 'center' }}>
                  <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '16.5px', fontWeight: 700, lineHeight: 1.45, color: '#0c4696', margin: 0 }}>
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Download App */}
      <PartnersSection />
    </main>
  );
}
