import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';

const caseStudiesList = [
  {
    id: 1,
    num: '01',
    title: 'Swiggy Case Study',
    desc: 'Faced by severe cash management issues leading to losses and increased cash handling risk by their delivery executive, Swiggy implemented cash deposit service.',
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/12/swiggy_listing.png',
    industry: 'Food Delivery & Logistics',
    stat: 'Over 50% Reduction in Cash Transit Loss'
  },
  {
    id: 2,
    num: '02',
    title: 'Svatantra Microfin',
    desc: "By enabling Mera Digital Pay's cash collection points Svatantra has gained deep in-roots to areas which were not serviced earlier.",
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/12/savatantra_listing.png',
    industry: 'Microfinance & Rural Banking',
    stat: 'Deep Reach into 10,000+ Unbanked Villages'
  },
  {
    id: 3,
    num: '03',
    title: 'Hero FinCorp Pvt Ltd',
    desc: 'Hero Fin Corp reduced cash collection TAT from T+5 days to T+1 day. Thereby increasing efficiency in cash collection process and expanding their geographical reach.',
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/12/Hero-FinCrop_listing.png',
    industry: 'NBFC & Vehicle Loans',
    stat: 'Collection TAT Reduced from T+5 to T+1 Day'
  },
  {
    id: 4,
    num: '04',
    title: 'Centrum Microfinance',
    desc: 'Centrum has witnessed 37% Increase in team productivity by enabling Mera Digital Pay cash collection points across rural areas.',
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/12/Centrum-listing-1.png',
    industry: 'Microfinance Institution',
    stat: '37% Increase in Team Field Productivity'
  },
  {
    id: 5,
    num: '05',
    title: 'Sub-K Digital Finance',
    desc: "By implementing Mera Digital Pay's cash collection module for their collection team and customers, Sub-K has reduced losses due to delayed cash collection.",
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/12/sub-k_listing.png',
    industry: 'FinTech & Branchless Banking',
    stat: 'Zero Delays in EMI Reconciliation'
  },
  {
    id: 6,
    num: '06',
    title: 'Bajaj Finance Limited',
    desc: 'Agent cash deposit module implemented at BFL has helped improve team productivity by 35%.',
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/11/bajaj-listing.png',
    industry: 'Consumer Lending & NBFC',
    stat: '35% Team Productivity Improvement'
  }
];

export default function CaseStudiesPage() {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <main className="case-studies-page-main">
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
            <li className="item-current item-662">
              <span className="bread-current bread-662" style={{ fontWeight: 600, color: '#1e293b' }}>
                Case Studies
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Header */}
      <section className="case--studies-top" style={{ padding: '40px 0 50px', background: '#ffffff' }}>
        <div className="container--responsive">
          <div className="case-studies-container" style={{ maxWidth: '820px' }}>
            <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '48px', fontWeight: 800, color: '#0c4696', marginBottom: '16px' }}>
              Case studies
            </h1>
            <p className="body-content" style={{ fontSize: '18px', lineHeight: 1.65, color: '#4a5568', margin: 0 }}>
              Our solutions have helped companies increase reach, efficiencies, and better cash management. We have helped more than 40+ partners reach the last mile, offer better coverage and services to their customers.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Cards Listing */}
      <section className="case--studies-listing" style={{ padding: '20px 0 80px', background: '#f8fafc' }}>
        <div className="container--responsive">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {caseStudiesList.map((cs) => (
              <div
                key={cs.id}
                className="case-study-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  padding: '40px 48px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(12, 70, 150, 0.06)',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 0.8fr',
                  gap: '40px',
                  alignItems: 'center'
                }}
              >
                <div className="case-card-left">
                  <span className="number" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '32px', fontWeight: 800, color: '#58b147', display: 'block', marginBottom: '10px' }}>
                    {cs.num}
                  </span>
                  <h3 className="section-title-dashed" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '28px', fontWeight: 800, color: '#0c4696', marginBottom: '16px', lineHeight: 1.25 }}>
                    {cs.title}
                  </h3>
                  <p className="body-content" style={{ fontSize: '16px', lineHeight: 1.65, color: '#4a5568', marginBottom: '24px' }}>
                    {cs.desc}
                  </p>
                  <button
                    onClick={() => setSelectedCase(cs)}
                    className="btn green"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '14px 28px',
                      borderRadius: '8px',
                      background: '#58b147',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '15px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s'
                    }}
                  >
                    View Case Study
                  </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src={cs.img}
                    alt={cs.title}
                    style={{ maxWidth: '340px', width: '100%', height: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.06))' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div className="modal-backdrop-custom" onClick={() => setSelectedCase(null)}>
          <div
            className="modal-content-custom"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              maxWidth: '600px',
              width: '100%',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            <button
              onClick={() => setSelectedCase(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '18px',
                background: 'none',
                border: 'none',
                fontSize: '22px',
                cursor: 'pointer',
                color: '#64748b'
              }}
            >
              ✕
            </button>

            <span style={{ fontSize: '13px', textTransform: 'uppercase', fontWeight: 800, color: '#58b147', background: '#eef8eb', padding: '4px 12px', borderRadius: '20px', display: 'inline-block', marginBottom: '12px' }}>
              {selectedCase.industry}
            </span>

            <h3 style={{ fontSize: '26px', fontWeight: 800, color: '#0c4696', marginBottom: '14px' }}>
              {selectedCase.title}
            </h3>

            <p style={{ fontSize: '16px', lineHeight: 1.65, color: '#475569', marginBottom: '20px' }}>
              {selectedCase.desc}
            </p>

            <div style={{ background: '#f0f6ff', padding: '18px 20px', borderRadius: '12px', marginBottom: '24px', borderLeft: '4px solid #0c4696' }}>
              <h4 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#0c4696', fontWeight: 700, margin: '0 0 4px 0' }}>
                Key Impact & Outcome:
              </h4>
              <p style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: 0 }}>
                {selectedCase.stat}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  background: '#f1f5f9',
                  color: '#475569',
                  fontWeight: 600,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
              <a
                href="/corporate"
                className="btn green"
                style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  background: '#58b147',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Partner Marquee & Download App */}
      <PartnersSection />
    </main>
  );
}
