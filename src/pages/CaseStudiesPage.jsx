import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';
import harvardImg from '../assets/award-harvard-casestudy.jpeg';
import diagramEcoImg from '../assets/diagram-ecosystem-services.jpeg';
import shgDualAuthImg from '../assets/media-shg-dual-auth.jpeg';
import digitalNaariGujaratImg from '../assets/media-digital-naari-gujarat.jpeg';
import goldLoanImg from '../assets/media-gold-loan-550cr.jpeg';
import campaignRetailerImg from '../assets/campaign-dil-se-desi-retailer.jpeg';

const caseStudiesList = [
  {
    id: 1,
    num: '01',
    title: 'Harvard Business School: Mera Digital Pay Case Study',
    desc: 'Harvard Business School published a comprehensive case study on Mera Digital Pay’s scalable branchless banking ecosystem and last-mile financial inclusion model.',
    img: harvardImg,
    industry: 'Academic Research & FinTech Case Study',
    stat: 'Global Recognition for DaaS Architecture'
  },
  {
    id: 2,
    num: '02',
    title: 'Women Entrepreneur Lakhpati Didi Empowerment',
    desc: "By enabling women-led assisted digital financial service networks across Gujarat and Maharashtra, thousands of rural women have built sustainable businesses.",
    img: digitalNaariGujaratImg,
    industry: 'Women Micro-Entrepreneurship & Banking',
    stat: 'Over 1 Lakh Women Targeted by FY28'
  },
  {
    id: 3,
    num: '03',
    title: 'Self-Help Group (SHG) Dual Authentication Cash Flow',
    desc: 'First fintech to digitise SHG cash withdrawals and deposits with dual biometric authentication, resolving bank branch bottlenecks.',
    img: shgDualAuthImg,
    industry: 'SHG & Rural Micro-Banking',
    stat: 'Impacts 1+ Crore SHG Members'
  },
  {
    id: 4,
    num: '04',
    title: 'Formal Gold Loan & Credit Disbursal at Last Mile',
    desc: 'Facilitating over ₹550 crore in gold loan disbursements via neighborhood kirana stores, unlocking timely formal credit for semi-urban Bharat.',
    img: goldLoanImg,
    industry: 'Secured Lending & NBFC Partnership',
    stat: '₹550+ Crore Disbursed Across Bharat'
  },
  {
    id: 5,
    num: '05',
    title: 'Unified Last-Mile Cash Collection & Commerce',
    desc: "Connecting order digitization, payment disbursal, and cash collections into a single integrated platform for 40+ corporate partners.",
    img: diagramEcoImg,
    industry: 'Corporate Cash Logistics & FMCG',
    stat: '50% Optimization in Collection TAT'
  },
  {
    id: 6,
    num: '06',
    title: 'Retailer Digital Transformation & Income Doubling',
    desc: 'Empowering local store owners with branchless banking tools, DMT, AePS, and bill payment services to build thriving community Fintech Marts.',
    img: campaignRetailerImg,
    industry: 'Retailer Empowerment & Inclusion',
    stat: '2X Store Footfall & Steady Commission'
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
