import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';
import campaignWomanImg from '../assets/campaign-dil-se-desi-woman.jpeg';
import campaignRetailerImg from '../assets/campaign-dil-se-desi-retailer.jpeg';
import goldLoanImg from '../assets/media-gold-loan-550cr.jpeg';
import digitalNaariGujaratImg from '../assets/media-digital-naari-gujarat.jpeg';
import shgDualAuthImg from '../assets/media-shg-dual-auth.jpeg';
import mitReviewImg from '../assets/award-mit-review.jpeg';
import gptwImg from '../assets/award-gptw-workplace.jpeg';
import harvardImg from '../assets/award-harvard-casestudy.jpeg';
import diagramEcoImg from '../assets/diagram-ecosystem-services.jpeg';

const initialArticles = [
  {
    id: 'saathi-campaign',
    title: "Mera Digital Saathi Campaign ‘Dil Se Desi. Life Digital.’ Captures Bharat’s Trust-led Digital Shift",
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'June 4, 2026',
    img: campaignWomanImg,
    excerpt: 'The campaign captures simple moments from everyday life, a mobile recharge at home, an urgent funds transfer or a small step towards savings. Each story shows how Saathi can help customers complete essential tasks with ease, while building confidence to use digital services more independently.',
    fullContent: `Mera Digital Pay, India's leading branchless banking and digital services network, has unveiled its new Saathi campaign themed ‘Dil Se Desi. Life Digital.’ The initiative highlights the critical role played by local retail champions in accelerating digital adoption across rural and semi-urban Bharat.

Through real-life narratives, the campaign captures everyday moments—from recharging a phone at home and sending money to family during emergencies to building a recurring savings habit. Mera Digital Saathi serves as a trusted companion bridging the gap between high-tech digital solutions and last-mile citizens.`
  },
  {
    id: 'gold-loan-550-crore',
    title: 'Mera Digital Pay crosses ₹550 crore in gold loan disbursements through small retailers in semi-urban and rural India in FY26',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'May 7, 2026',
    img: goldLoanImg,
    excerpt: 'Mera Digital Pay continues to partner with banks and NBFCs to expand gold loan access across Bharat. By leveraging its distribution network, the platform enables lenders to reach customers at scale through a simple, plug-and-play model, while making credit more accessible, fast and reliable at the last mile.',
    fullContent: `Mera Digital Pay announced that it has successfully facilitated over ₹550 crore in gold loan disbursements across Bharat during FY26. Partnering with top financial institutions and NBFCs, local kirana store owners act as customer service points, providing quick doorstep evaluation and transparent formal credit options to underserved borrowers.`
  },
  {
    id: 'mit-review-feature',
    title: 'Mera Digital Pay gets featured in MIT Technology Review for last-mile digital fintech infrastructure',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'April 18, 2026',
    img: mitReviewImg,
    excerpt: 'MIT Technology Review recognized Mera Digital Pay for its relentless effort to ensure seamless delivery of financial and digital services across India.',
    fullContent: `In an exclusive feature, MIT Technology Review highlighted the groundbreaking work being done by Mera Digital Pay in transforming neighborhood kirana stores into digital fintech hubs, enabling assisted digital banking for millions of citizens.`
  },
  {
    id: 'lakhpati-didi-gujarat',
    title: 'Women Entrepreneur Banking Network Expands Lakhpati Didi Footprints in Gujarat',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'February 26, 2026',
    img: digitalNaariGujaratImg,
    excerpt: 'The Women Banking Mitra model is designed to generate steady and repeat income at the last mile. Women deliver essential, everyday services that households need year-round, which ensures consistent transactions and commission earnings.',
    fullContent: `Mera Digital Pay announced an aggressive roadmap to onboard and empower over 1,00,000 women micro-entrepreneurs across Gujarat by FY28. Providing comprehensive digital literacy, POS devices, and continuous mentorship, the platform turns local women into sustainable business leaders.`
  },
  {
    id: 'shg-dual-auth',
    title: 'Mera Digital Pay becomes India’s first fintech to digitise SHG cash withdrawals and deposits with dual authentication',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'January 7, 2026',
    img: shgDualAuthImg,
    excerpt: 'This innovation addresses a critical operational bottleneck in SHG-bank linkage by enabling compliant, transparent access to group funds without requiring repeated physical visits to bank branches.',
    fullContent: `In a groundbreaking development for Self-Help Groups (SHGs), Mera Digital Pay has launched dual biometric authentication for SHG bank accounts. Both designated group signatories can now securely authenticate and transact at any local Mera Digital Pay store, eliminating long journeys and wait times at distant bank branches.`
  },
  {
    id: 'gptw-best-workplaces',
    title: 'Great Place To Work® India features Mera Digital Pay among Top 25 Best Workplaces™ in BFSI',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'January 15, 2026',
    img: gptwImg,
    excerpt: 'Great Place To Work® India recognizes Mera Digital Pay’s high-trust, high-performance culture empowering individuals to build fintech solutions for Bharat.',
    fullContent: `Mera Digital Pay was celebrated among the top workplaces in India in the BFSI sector, reflecting its progressive work culture, equal opportunity employment, and impactful purpose-driven mission.`
  },
  {
    id: 'harvard-case-study-feature',
    title: 'Harvard Business School publishes comprehensive Case Study on Mera Digital Pay',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'November 12, 2025',
    img: harvardImg,
    excerpt: 'A proud milestone as Harvard Business School studies the scalable branchless banking model built by Mera Digital Pay to digitize cash at the grassroots level.',
    fullContent: `Harvard Business School has published an in-depth case study analyzing Mera Digital Pay’s unique distribution-as-a-service (DaaS) model, highlighting how local kirana merchants are digitally empowered to serve as neighborhood banking outposts.`
  },
  {
    id: 'retailer-empowerment-campaign',
    title: 'Mera Digital Pay Retailer Campaign: Empowering Local Kirana Champions Across Semi-Urban India',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'October 28, 2025',
    img: campaignRetailerImg,
    excerpt: 'Local kirana store owners are transforming their businesses into complete digital financial centers with the Mera Digital Pay platform.',
    fullContent: `From cash withdrawals and domestic money transfers to bill payments and insurance, Mera Digital Pay enables local store owners to double their income while delivering vital services to their community.`
  },
  {
    id: 'ecosystem-services-expansion',
    title: 'Mera Digital Pay expands Integrated Commerce & Cash Collection Ecosystem across 20,000+ PIN Codes',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'September 10, 2025',
    img: diagramEcoImg,
    excerpt: 'Connecting order digitization, payment disbursal, product sampling, market expansion, and cash collection in one unified platform.',
    fullContent: `Mera Digital Pay continues to extend its comprehensive suite of services, uniting enterprises, merchants, and rural citizens under one high-tech, reliable platform.`
  }
];


export default function MediaListingPage() {
  const [articles, setArticles] = useState(initialArticles);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  const handleReadMore = (article, e) => {
    e.preventDefault();
    setSelectedArticle(article);
  };

  return (
    <main className="media-listing-page-main">
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
            <li className="item-current item-media">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                Media
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="top-wrapper media" style={{ background: '#f8fafc', padding: '50px 0 60px', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container--responsive">
          <div className="top-content" style={{ maxWidth: '900px' }}>
            <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '48px', fontWeight: 800, color: '#0c4696', marginBottom: '20px', lineHeight: 1.15 }}>
              Media Room
            </h1>
            <p className="body-content" style={{ fontSize: '17px', lineHeight: 1.7, color: '#4a5568', margin: 0 }}>
              Stay updated with the latest news, press releases, reports, media coverage and industry perspectives from Mera Digital Pay.
              <br /><br />
              From branchless banking and digital payments to assisted commerce, credit, MSME growth, women empowerment and last-mile financial inclusion, this space brings together key stories from Mera Digital Pay’s journey of making financial and digital services accessible to every household across Bharat.
            </p>
          </div>
        </div>
      </section>

      {/* Main Media Grid Section */}
      <section className="media-main-wrapper bgcolor--white">
        <div className="container--responsive">
          <div className="latest-news-wrapper">
            <ul className="media-cards-container">
              {articles.map((item) => (
                <li key={item.id} className="news-card-item">
                  <div className="news-card-image-box" onClick={(e) => handleReadMore(item, e)}>
                    <img
                      src={item.img}
                      alt={item.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/logo.png';
                      }}
                    />
                  </div>
                  <div style={{ padding: '24px 24px 16px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <a
                      href="#"
                      onClick={(e) => handleReadMore(item, e)}
                      style={{ textDecoration: 'none', color: '#0c4696', marginBottom: '12px' }}
                    >
                      <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '18px', fontWeight: 800, lineHeight: 1.35, margin: 0, color: '#0c4696' }}>
                        {item.title}
                      </h3>
                    </a>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', margin: '0 0 14px', fontSize: '13px', color: '#64748b' }}>
                      <span style={{ fontWeight: 700, color: '#58b147' }}>{item.category}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: '#4a5568', margin: 0, flex: '1' }}>
                      {item.excerpt}
                    </p>
                  </div>
                  <div style={{ padding: '0 24px 24px' }}>
                    <button
                      type="button"
                      onClick={(e) => handleReadMore(item, e)}
                      style={{
                        padding: '10px 22px',
                        borderRadius: '8px',
                        background: '#58b147',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '14px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'background 0.2s ease'
                      }}
                    >
                      Read More →
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Modal for Full Article View */}
      {selectedArticle && (
        <div
          className="article-modal-backdrop"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="article-modal-content"
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '750px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#64748b',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ✕
            </button>

            <img
              src={selectedArticle.img}
              alt={selectedArticle.title}
              style={{ width: '100%', maxHeight: '340px', objectFit: 'cover', borderRadius: '12px', marginBottom: '24px' }}
            />

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '13.5px', color: '#64748b', marginBottom: '14px' }}>
              <span style={{ fontWeight: 700, color: '#58b147', background: '#eef8eb', padding: '4px 10px', borderRadius: '6px' }}>{selectedArticle.category}</span>
              <span>•</span>
              <span>{selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h2 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 800, color: '#0c4696', lineHeight: 1.35, marginBottom: '20px' }}>
              {selectedArticle.title}
            </h2>

            <div style={{ fontSize: '16px', lineHeight: 1.75, color: '#334155', whiteSpace: 'pre-line' }}>
              {selectedArticle.fullContent}
            </div>

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '8px',
                  background: '#0c4696',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Partners & Download App */}
      <PartnersSection />
    </main>
  );
}
