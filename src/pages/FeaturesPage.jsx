import React from 'react';
import PartnersSection from '../components/PartnersSection';

const featureItems = [
  {
    id: 'largest-network',
    iconClass: 'pn-network',
    iconSvg: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0c4696" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="9" y="16" width="6" height="6" rx="1" />
        <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
        <path d="M12 13v3" />
      </svg>
    ),
    title: 'Largest Agent Network',
    desc: 'With over 15,00,000 active retailers, spread across 20,000+ PIN codes, harness the power of the largest agent network in the country'
  },
  {
    id: 'insightful-analytics',
    iconClass: 'pn-analytics',
    iconSvg: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0c4696" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M3 20h18" />
      </svg>
    ),
    title: 'Insightful Analytics',
    desc: 'A single, powerful unified platform for all your MIS and data requirements. Real time customer analytics that will help you make informed decisions'
  },
  {
    id: 'reliability',
    iconClass: 'pn-reliability',
    iconSvg: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0c4696" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Time-Tested Reliability',
    desc: 'Serving more than a million transactions per day, our systems deliver the highest success matrix and 99.9% uptime. Mera Digital Pay is certified to the highest compliance standards'
  },
  {
    id: 'support',
    iconClass: 'pn-technical-support',
    iconSvg: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0c4696" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    title: 'Best in industry support',
    desc: 'Our solution experts are always available on email, phone, chats and will help you in every step of the way'
  },
  {
    id: 'easy-integration',
    iconClass: 'pn-iot',
    iconSvg: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0c4696" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    title: 'Easy Integration',
    desc: 'We agonize over easy to use APIs so that your teams don’t take months to integrate and go live with the solution'
  },
  {
    id: 'automation',
    iconClass: 'pn-setting',
    iconSvg: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0c4696" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    title: 'Smart Automation',
    desc: 'We release hundreds of features and improvements frequently to keep you ahead of industry shifts; and automate processes to eliminate redundancies'
  }
];

export default function FeaturesPage() {
  return (
    <main className="features-page-main">
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
            <li className="item-current item-features">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                Features
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Banner Header */}
      <section className="top-wrapper top-feature" style={{ background: '#ffffff', padding: '40px 0 60px' }}>
        <div className="container--responsive">
          <div className="top-feature-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div className="top-feature-content">
              <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '42px', fontWeight: 800, color: '#0c4696', lineHeight: 1.25, marginBottom: '24px' }}>
                Technology driven, customer first approach to last mile connectivity and solution
              </h1>
              <p style={{ fontSize: '18px', lineHeight: 1.65, color: '#4a5568', margin: 0 }}>
                Empowering businesses with robust infrastructure, real-time analytics, industry-leading uptime, and seamless integration at massive pan-India scale.
              </p>
            </div>
            <div className="top-feature-image" style={{ textAlign: 'center' }}>
              <img
                src="https://paynearby.in/wp-content/uploads-efs/2020/11/feature-banner.jpg"
                alt="Mera Digital Pay Features Banner"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 12px 36px rgba(12, 70, 150, 0.12)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="bgcolor--light-blue padded--wrapper features-section" style={{ background: '#f4f8fc', padding: '70px 0 90px' }}>
        <div className="container--responsive">
          <h2
            className="section-title-dashed"
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '36px',
              fontWeight: 800,
              color: '#0c4696',
              marginBottom: '50px',
              position: 'relative',
              paddingBottom: '16px'
            }}
          >
            Features
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60px', height: '4px', background: '#58b147', borderRadius: '2px' }} />
          </h2>

          <div className="features--wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {featureItems.map((item) => (
              <div
                key={item.id}
                className="features--block"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px 30px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div
                  className="feature-icon-wrap"
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '16px',
                    background: '#eef6ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '8px'
                  }}
                >
                  {item.iconSvg}
                </div>
                <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0c4696', margin: 0 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#4a5568', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Marquee & App Download */}
      <PartnersSection />
    </main>
  );
}
