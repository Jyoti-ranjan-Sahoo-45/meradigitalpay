import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';

const initialArticles = [
  {
    id: 'saathi-campaign',
    title: "Mera Digital Saathi Campaign ‘Dil Se Desi. Life Digital.’ Captures Bharat’s Trust-led Digital Shift",
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'June 4, 2026',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/7.-Saathi.png',
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
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/6.-Gold-Loan.png',
    excerpt: 'Mera Digital Pay continues to partner with banks and NBFCs to expand gold loan access across Bharat. By leveraging its distribution network, the platform enables lenders to reach customers at scale through a simple, plug-and-play model, while making credit more accessible, fast and reliable at the last mile.',
    fullContent: `Mera Digital Pay announced that it has successfully facilitated over ₹550 crore in gold loan disbursements across Bharat during FY26. Partnering with top financial institutions and NBFCs, local kirana store owners act as customer service points, providing quick doorstep evaluation and transparent formal credit options to underserved borrowers.`
  },
  {
    id: 'upi-cash-point',
    title: 'Mera Digital Pay launches UPI Cash Point for cardless cash withdrawals at local retail stores across semi-urban and rural India',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'March 30, 2026',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/5.-UPI-Cash-Point.png',
    excerpt: 'With this launch, customers can use their smartphone to scan UPI QR code at the local retail store, enter the amount, authenticate the transaction, and receive cash instantly.',
    fullContent: `In an effort to expand cash-out convenience beyond traditional ATMs, Mera Digital Pay has introduced 'UPI Cash Point'. Now, customers need only scan the dynamic QR code generated at their neighborhood retailer, authenticate via their preferred UPI app, and receive instant cash dispensing without requiring a physical debit card.`
  },
  {
    id: 'lakhpati-didi-maharashtra',
    title: 'Digital Naari Strengthens Lakhpati Didi Momentum in Maharashtra, Deepens Last-Mile Access',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'March 10, 2026',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/4.-Maharashtra.png',
    excerpt: 'As Maharashtra advances the Lakhpati Didi mission, the focus is moving toward enabling consistent income at the last mile. Women agents are delivering essential services that households need regularly, which creates repeat transactions and commission-based earnings.',
    fullContent: `Mera Digital Pay’s 'Digital Naari' initiative has mobilized thousands of rural women across Maharashtra to become independent financial service providers. By offering AePS, DMT, utility bill payments, and insurance at their village doorsteps, these women entrepreneurs are achieving financial freedom while propelling the government's Lakhpati Didi initiative.`
  },
  {
    id: 'pwfi-2026-report',
    title: '38% Women Use UPI Weekly for Daily Essentials: PWFI 2026',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'March 5, 2026',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/3.-PWFI-2026.png',
    excerpt: 'Mera Digital Pay Women Financial Index 2026, a comprehensive analysis of women’s financial and digital consumption across Bharat in 2026. The survey finds that there is also growing awareness among women for investment and asset-linked products through assisted guidance.',
    fullContent: `The 5th edition of the Mera Digital Pay Women Financial Index (PWFI) report indicates a sharp surge in digital transactions among rural women, with 38% utilizing UPI every week for routine groceries and essential household purchases. The findings also reveal an upward trend in micro-savings, gold accumulation, and crop insurance adoption.`
  },
  {
    id: 'lakhpati-didi-gujarat',
    title: 'Digital Naari Expands Government’s Lakhpati Didi Footprints in Gujarat, Aims for 1 Lakh Women by FY28',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'February 26, 2026',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/2.-Lakhpati-Didi-Gujarat-1.png',
    excerpt: 'The Digital Naari model is designed to generate steady and repeat income at the last mile. Women deliver essential, everyday services that households need year-round, which ensures consistent transactions and commission earnings.',
    fullContent: `Mera Digital Pay announced an aggressive roadmap to onboard and empower over 1,00,000 women micro-entrepreneurs across Gujarat by FY28. Providing comprehensive digital literacy, POS devices, and continuous mentorship, the platform turns local women into sustainable business leaders.`
  },
  {
    id: 'shg-dual-auth',
    title: 'Mera Digital Pay becomes India’s first fintech to digitise SHG cash withdrawals and deposits with dual authentication',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'January 7, 2026',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/1.-SHG-Cash-Withdrawals-1.png',
    excerpt: 'This innovation addresses a critical operational bottleneck in SHG-bank linkage by enabling compliant, transparent access to group funds without requiring repeated physical visits to bank branches',
    fullContent: `In a groundbreaking development for Self-Help Groups (SHGs), Mera Digital Pay has launched dual biometric authentication for SHG bank accounts. Both designated group signatories can now securely authenticate and transact at any local Mera Digital Pay store, eliminating long journeys and wait times at distant bank branches.`
  },
  {
    id: 'tpap-license-npci',
    title: 'Mera Digital Pay secures TPAP license from NPCI; set to expand UPI access to Bharat',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'December 22, 2025',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/10.-Saathi.jpg',
    excerpt: 'Introducing Mera Digital Saathi – an innovative platform that will seamlessly ensure onboarding of citizens on UPI in an assisted mode through Mera Digital Pay’s retail network.',
    fullContent: `The National Payments Corporation of India (NPCI) has granted Mera Digital Pay a Third Party Application Provider (TPAP) license. This milestone enables Mera Digital Pay to roll out assisted UPI services across its 15+ lakh retail touchpoints, unlocking hassle-free digital payments for millions of new-to-digital citizens.`
  },
  {
    id: 'dil-ki-baat-radio',
    title: 'Digital Naari launches “Dil Ki Baat” radio campaign on the eve of PM Modi’s birthday, celebrating women’s voices and empowerment across Bharat',
    category: 'Mera Digital Pay',
    author: 'By Corporate Communications',
    date: 'September 17, 2025',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/8.-Dil-Ki-Baat.png',
    excerpt: 'The campaign is an ode to the determination of grassroots women, giving their aspirations and dreams a voice that can reach the nation and its leaders. Inspired by the Prime Minister’s vision of Lakhpati Didi, these women have embraced financial and digital inclusion to transform their lives and communities, and through this initiative, they take the opportunity to express their gratitude.',
    fullContent: `On the occasion of Prime Minister Narendra Modi's birthday, Mera Digital Pay launched 'Dil Ki Baat' across nationwide radio channels. The broadcast features heartfelt stories from rural women retailers who have built successful financial enterprises and transformed their communities through Digital Naari.`
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
