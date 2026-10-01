import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';

const gffPhotos = [
  'https://paynearby.in/wp-content/uploads-efs/2025/10/4_IMG_0412.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/1_IMG_2338.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/2_IMG_0722.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/3_IMG_2356.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/5_TPAP_IMG_1298.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/6_FD_IMG_1142.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/7_Haq_IMG_1415.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/8_IMG_0668.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/9_IMG_1579.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/10_IMG_1625.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/11_IMG_1507.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/12_IMG_1795.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/13_IMG_1815.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/14_IMG_1871.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/15_IMG_1908.jpg',
  'https://paynearby.in/wp-content/uploads-efs/2025/10/16_IMG_2029.jpg'
];

const whitepapers = [
  {
    title: 'EASE OF LIVING: Assisted Digital Transformation',
    pdfUrl: '/contact-us',
    category: 'Report'
  },
  {
    title: 'Mera Digital Saathi: Last-Mile Financial Access',
    pdfUrl: '/contact-us',
    category: 'Product Overview'
  },
  {
    title: 'Credit at the Last Mile: Bridging Bharat’s Credit Gap',
    pdfUrl: '/contact-us',
    category: 'Whitepaper'
  },
  {
    title: 'Insurance Inclusion: Micro-Protection for Rural India',
    pdfUrl: '/contact-us',
    category: 'Whitepaper'
  },
  {
    title: 'Savings & Investments: Digital Wealth for Bharat',
    pdfUrl: '/contact-us',
    category: 'Research'
  },
  {
    title: 'Designing for Her: Understanding Women’s Needs at the Last Mile',
    pdfUrl: '/contact-us',
    category: 'Joint Report'
  }
];

export default function GffPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  return (
    <main className="gff-page-main">
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
            <li className="item-current item-gff">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                Global Fintech Fest
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Banner */}
      <section style={{ background: '#f8fafc', padding: '50px 0 60px', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container--responsive">
          <div style={{ maxWidth: '850px' }}>
            <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '46px', fontWeight: 800, color: '#0c4696', lineHeight: 1.15, marginBottom: '20px' }}>
              Global Fintech Fest
            </h1>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#4a5568', margin: 0 }}>
              Showcasing Bharat’s massive financial inclusion breakthrough, cutting-edge assisted commerce products, and collaborative initiatives launched at the Global Fintech Fest (GFF).
            </p>
          </div>
        </div>
      </section>

      {/* Photo Showcase Gallery */}
      <section style={{ background: '#ffffff', padding: '60px 0 80px' }}>
        <div className="container--responsive">
          <h2
            className="section-title-dashed"
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '34px',
              fontWeight: 800,
              color: '#0c4696',
              marginBottom: '36px'
            }}
          >
            GFF Highlights &amp; Gallery
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {gffPhotos.map((imgUrl, idx) => (
              <div
                key={idx}
                style={{
                  height: '220px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#f1f5f9',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={imgUrl}
                  alt={`GFF Event ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/logo.png';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chalo Bharat Publications & Reports */}
      <section style={{ background: '#f8fafc', padding: '70px 0 90px', borderTop: '1px solid #e2e8f0' }}>
        <div className="container--responsive">
          <h2
            className="section-title-dashed"
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '34px',
              fontWeight: 800,
              color: '#0c4696',
              marginBottom: '40px'
            }}
          >
            Chalo Bharat with Mera Digital Pay — Reports &amp; Whitepapers
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {whitepapers.map((doc, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  padding: '28px 24px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#58b147', textTransform: 'uppercase', letterSpacing: '0.5px', background: '#eef8eb', padding: '4px 10px', borderRadius: '6px' }}>
                    {doc.category}
                  </span>
                  <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '18px', fontWeight: 800, color: '#0c4696', margin: '14px 0 20px', lineHeight: 1.4 }}>
                    {doc.title}
                  </h3>
                </div>
                <a
                  href={doc.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#58b147',
                    fontWeight: 700,
                    fontSize: '14.5px',
                    textDecoration: 'none'
                  }}
                >
                  Download Report PDF →
                </a>
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
