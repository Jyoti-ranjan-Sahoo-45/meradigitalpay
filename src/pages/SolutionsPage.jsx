import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';

const allSolutionsList = [
  {
    id: 'digitize-cash-collection',
    title: 'Digitize cash collection',
    desc: 'Enable customers and collection agents to deposit cash at Mera Digital Pay’s extensive last mile network and optimize collection cost by upto 50%',
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/11/digitize-cash-collection.png',
    industries: ['ecommerce', 'food-delivery', 'insurance', 'payments-finance']
  },
  {
    id: 'increase-market-penetration-at-the-last-mile',
    title: 'Increase market penetration at the last mile',
    desc: 'Distribute sachetize content through Mera Digital Pay’s last mile network and enable digitization of micro cash exchange to digically reach 400 million+ last mile audience',
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/11/increase-market-penetration.png',
    industries: ['ecommerce', 'network-marketing', 'ott']
  },
  {
    id: 'digitize-order-placement-and-payment',
    title: 'Digitize order placement and payment',
    desc: 'Enable 3X more efficiency in order processing and cash flow by digitizing order placement and payment across the retail value chain',
    img: 'https://paynearby.in/wp-content/uploads-efs/2020/11/digitize-order-placement.png',
    industries: ['chemical-fertiliser', 'fmcg-pharma']
  }
];

export default function SolutionsPage({ onOpenContact }) {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedSolution, setSelectedSolution] = useState('');
  const [activeFilter, setActiveFilter] = useState(null);

  const availableSolutions = selectedIndustry
    ? allSolutionsList.filter((s) => s.industries.includes(selectedIndustry))
    : allSolutionsList;

  const handleGo = (e) => {
    e.preventDefault();
    setActiveFilter(selectedSolution || selectedIndustry);
  };

  const filteredCards = activeFilter
    ? allSolutionsList.filter((s) => 
        s.id === activeFilter || s.industries.includes(activeFilter)
      )
    : allSolutionsList;

  return (
    <main className="solutions-page-main">
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
            <li className="item-current item-8">
              <span className="bread-current bread-8" style={{ fontWeight: 600, color: '#1e293b' }}>
                Solutions
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Header & Industry Dropdown Filter Tool */}
      <section className="solution-wrapper" style={{ padding: '40px 0 60px', background: '#f8fafc' }}>
        <div className="container--responsive">
          <div className="solution-container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div className="solution-content">
              <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '50px', fontWeight: 800, color: '#0c4696', lineHeight: 1.1, marginBottom: '20px' }}>
                Our<br />Solutions
              </h1>
              <p className="body-content" style={{ fontSize: '18px', lineHeight: 1.65, color: '#4a5568', margin: 0 }}>
                Think last mile. Think Mera Digital Pay. From optimizing cash collection processes to enabling market expansion, businesses of all sizes use Mera Digital Pay’s proprietary last mile technology and deeply entrenched retail network of 15,00,000 active retailers to grow their business.
              </p>
            </div>

            <div className="solution-tool" style={{ background: '#ffffff', padding: '32px', borderRadius: '16px', boxShadow: '0 8px 30px rgba(12, 70, 150, 0.08)', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0c4696', marginBottom: '20px' }}>
                Choose the right solution by Industry Type
              </h3>
              <form onSubmit={handleGo} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div className="custom-dropdown">
                  <select
                    name="industry"
                    id="industry-select"
                    value={selectedIndustry}
                    onChange={(e) => {
                      setSelectedIndustry(e.target.value);
                      setSelectedSolution('');
                    }}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#1e293b', outline: 'none', background: '#ffffff' }}
                  >
                    <option value="">Search by Industry</option>
                    <option value="chemical-fertiliser">Chemical / Fertiliser</option>
                    <option value="ecommerce">Ecommerce</option>
                    <option value="fmcg-pharma">FMCG &amp; Pharma</option>
                    <option value="food-delivery">Food Delivery</option>
                    <option value="insurance">Insurance</option>
                    <option value="network-marketing">Network &amp; Marketing</option>
                    <option value="ott">OTT</option>
                    <option value="payments-finance">Payments &amp; Finance</option>
                  </select>
                </div>

                <div className="custom-dropdown">
                  <select
                    name="solution"
                    id="solution-select"
                    value={selectedSolution}
                    onChange={(e) => setSelectedSolution(e.target.value)}
                    style={{ width: '100%', padding: '14px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', color: '#1e293b', outline: 'none', background: '#ffffff' }}
                  >
                    <option value="">Select Solution</option>
                    {availableSolutions.map((sol) => (
                      <option key={sol.id} value={sol.id}>
                        {sol.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                  <button
                    type="submit"
                    className="btn green solutionGoBtn"
                    style={{
                      flex: '1',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      background: '#58b147',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '15px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Go
                  </button>
                  {activeFilter && (
                    <button
                      type="button"
                      onClick={() => {
                        setActiveFilter(null);
                        setSelectedIndustry('');
                        setSelectedSolution('');
                      }}
                      style={{
                        padding: '12px 18px',
                        borderRadius: '8px',
                        background: '#f1f5f9',
                        color: '#64748b',
                        fontWeight: 600,
                        fontSize: '14px',
                        border: '1px solid #cbd5e1',
                        cursor: 'pointer'
                      }}
                    >
                      Reset Filter
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Cards Section */}
      <section className="solution-card-wrapper" style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container--responsive">
          <div className="solution-card-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="oursolution-card"
                style={{
                  background: '#f8fafc',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ width: '70px', height: '70px', marginBottom: '20px', borderRadius: '14px', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <img src={card.img} alt={card.title} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                </div>
                <h3 className="body-title" style={{ fontSize: '22px', fontWeight: 800, color: '#0c4696', marginBottom: '12px', lineHeight: 1.3 }}>
                  {card.title}
                </h3>
                <p className="body-content" style={{ fontSize: '15px', lineHeight: 1.65, color: '#4a5568', flex: '1', marginBottom: '24px' }}>
                  {card.desc}
                </p>
                <a
                  href="/corporate"
                  className="link"
                  style={{
                    color: '#58b147',
                    fontWeight: 700,
                    fontSize: '15px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  Learn More →
                </a>
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
