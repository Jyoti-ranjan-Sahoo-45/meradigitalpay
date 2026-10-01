import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';
import abouthero from "./../assets/abouthero.png";
import harvardImg from '../assets/award-harvard-casestudy.jpeg';
import gptwImg from '../assets/award-gptw-workplace.jpeg';
import mitImg from '../assets/award-mit-review.jpeg';
import shgDualAuthImg from '../assets/media-shg-dual-auth.jpeg';
import digitalNaariGujaratImg from '../assets/media-digital-naari-gujarat.jpeg';
import goldLoanImg from '../assets/media-gold-loan-550cr.jpeg';
import campaignWomanImg from '../assets/campaign-dil-se-desi-woman.jpeg';
import campaignRetailerImg from '../assets/campaign-dil-se-desi-retailer.jpeg';
import diagramEcoImg from '../assets/diagram-ecosystem-services.jpeg';
import directorImg from '../assets/director-rohitash.png';
import { Quote } from 'lucide-react';

const awardsList = [
  {
    show: 'Integrated FinTech Ecosystem',
    category: 'Full-Stack Last-Mile Distribution Architecture',
    img: diagramEcoImg
  },
  {
    show: 'Harvard Business Publishing',
    category: "Building India's 2.0: Mera Digital Pay Case Study",
    img: harvardImg
  },

  {
    show: 'Great Place To Work® India',
    category: 'Top 25 India’s Best Workplaces™ in BFSI',
    img: gptwImg
  },
  {
    show: 'MIT Technology Review',
    category: 'Featured for Last-Mile Financial Delivery',
    img: mitImg
  },
  {
    show: 'FinTech Innovation in SHG Banking',
    category: 'Dual Authentication Cash In/Out for 1 Crore SHG Members',
    img: shgDualAuthImg
  },
  {
    show: 'Lakhpati Didi Footprint Expansion',
    category: 'Women Empowerment Network Across Gujarat & Maharashtra',
    img: digitalNaariGujaratImg
  },
  {
    show: 'Formal Credit Access Milestone',
    category: '₹550+ Crore Gold Loans Disbursed at Last Mile',
    img: goldLoanImg
  },
  {
    show: 'Digital Inclusion Champion',
    category: 'Dil Se Desi. Life Digital. Nationwide Campaign',
    img: campaignWomanImg
  }
];


const scoreCardStats = [
  { num: '10+', unit: 'Lakh', label: 'Banking Mitras' },
  { num: '3+', unit: 'Lakh', label: 'Women Entrepreneurs' },
  { num: '5+', unit: 'Cr', label: 'Citizens served' },
  { num: '20,000+', unit: '', label: 'PIN codes in India' },
  { num: '10', unit: '%', label: "Market share in AePS 'Off-Us'" },
  { num: '₹65,000', unit: 'Cr', label: 'GTV processed annually' },
  { num: '08', unit: '', label: 'Union Territories' },
  { num: '28', unit: '', label: 'States' }
];

const timelineMilestones = [
  {
    year: '2016',
    month: 'September',
    achievements: ['Retailers Onboarded: 1,200', 'Launches: Money Transfer Services']
  },
  {
    year: '2017',
    month: 'March',
    achievements: ['Retailers Onboarded: 7,000', 'Launches: AePS, Recharges']
  },
  {
    year: '2018',
    month: 'March',
    achievements: ['Retailers Onboarded: 1,00,000+', 'Daily Transactions: 1,50,000+']
  },
  {
    year: '2020',
    month: 'March',
    achievements: ['Retailers Onboarded: 9,00,000+', 'Essential Covid Banking lifeline']
  },
  {
    year: '2022',
    month: 'April',
    achievements: ['Retailers Onboarded: 15,00,000+', 'Launches: Women Entrepreneur Banking & Credit']
  },
  {
    year: '2024',
    month: 'August',
    achievements: ['GTV crosses ₹65,000 Crore', 'NPCI TPAP Assisted UPI Pilot']
  },
  {
    year: '2026',
    month: 'June',
    achievements: ['UPI Cash Point & Saathi Launch', '5+ Crore Citizens Served']
  }
];

export default function AboutUsPage() {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  return (
    <main className="about-us-page-main">
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
            <li className="item-current item-about">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                About Us
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Banner */}
      <section className="about-top-wrapper">
        <div className="container--responsive">
          <div className="about-top-container">
            <div className="about-top-content">
              <h1 className="main-header-title">
                Unstoppable Ambition:<br /><span>Dil Se Desi. Life Digital.</span>
              </h1>
              <p className="body-content">
                A strong determination to make India a financially inclusive nation is the driving force behind all our initiatives. <strong style={{ color: '#0c4696' }}>We are determined to provide easy access to financial services to everyone, everywhere.</strong>
              </p>
              <p className="body-content">
                In this journey, we are joined by our committed retail community, our partners, who form the force multiplier to our initiatives. <strong style={{ color: '#0c4696' }}>We are determined to ensure our retail partners grow and prosper in this digital age and together we contribute to a stronger India.</strong>
              </p>
              <p className="body-content" style={{ color: '#0c4696', fontWeight: 600 }}>
                This determination to create a digitally forward and financially inclusive India forms the cornerstone of our brand DNA.
              </p>
            </div>
            <div className="about-top-interactive">
              <img
                src={abouthero}
                alt="Mera Digital Pay Unstoppable Ambition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="awards--bg padded--wrapper" style={{ background: '#f8fafc', padding: '70px 0' }}>
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
            Awards &amp; Recognitions
          </h2>

          <div
            className="awards--wrapper"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px'
            }}
          >
            {awardsList.map((award, index) => (
              <div
                key={index}
                className="awards-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(12, 70, 150, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                <h4 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '17px', fontWeight: 800, color: '#0c4696', minHeight: '44px', margin: '0 0 14px' }}>
                  {award.show}
                </h4>
                <div style={{ height: '180px', borderRadius: '12px', overflow: 'hidden', background: '#f1f5f9', marginBottom: '16px' }}>
                  <img
                    src={award.img}
                    alt={award.show}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/logo.png';
                    }}
                  />
                </div>
                <h5 style={{ fontSize: '14.5px', fontWeight: 600, color: '#4a5568', margin: 0, lineHeight: 1.45, flex: '1' }}>
                  {award.category}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Mera Digital Pay Detailed Story */}
      <section className="bg--white padded--wrapper about-meradigitalpay-wrapper" style={{ background: '#ffffff', padding: '70px 0' }}>
        <div className="container--responsive">
          <h2
            className="section-title-dashed"
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '34px',
              fontWeight: 800,
              color: '#0c4696',
              marginBottom: '30px'
            }}
          >
            About Mera Digital Pay
          </h2>
          <p className="body-content" style={{ fontSize: '17px', lineHeight: 1.7, color: '#334155', marginBottom: '30px' }}>
            Shri Mata Vaishno Devi Traders is a DIPP Certified Fintech Enterprise registered under The Startup India program of Government of India, founded with rich expertise in Digital Banking &amp; Payments industry. The team works on deep insights and understanding of payment and transaction technology space.
          </p>
          <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(12, 70, 150, 0.1)', marginBottom: '36px' }}>
            <img
              src={gptwImg}
              alt="Mera Digital Pay Team"
              style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <p className="body-content" style={{ fontSize: '17px', lineHeight: 1.7, color: '#334155', marginBottom: '20px' }}>
            We operate on a B2B2C model, where we partner with neighbourhood retail stores and enable them with the tools to provide assisted financial and digital commerce services to their local communities. Our innovative solutions are modelled to make transactions seamless, quick and easy and strives to empower our retail partners and their customers. Local communities across 20,000 plus PIN codes access Mera Digital Pay Partner stores to avail a range of services including assisted banking, digital payments, partner-enabled insurance, travel, credit access, government benefit access and other digital services.
          </p>
          <p className="body-content" style={{ fontSize: '17px', lineHeight: 1.7, color: '#334155', margin: 0 }}>
            We aspire to empower 50,0,000 stores across Tier I, II and rural towns in India. Using the power of Aadhaar &amp; Mobility, we are motivated to transform local retail stores into Fintech Marts. The stores will serve as a catalyst to Digitize Cash for the mass market customer and give him access to fintech services which were earlier available only to those who had digital money.
          </p>
        </div>
      </section>

      {/* Meet Our Director */}
      <section className="meetteam--wrapper" style={{ background: '#f4f8fc', padding: '80px 0' }}>
        <div className="container--responsive">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              className="section-title-dashed"
              style={{
                fontFamily: "'Cera Pro', sans-serif",
                fontSize: '34px',
                fontWeight: 800,
                color: '#0c4696',
                margin: '0 auto',
                display: 'inline-block'
              }}
            >
              Meet Our Director
            </h2>
          </div>

          <div style={{
            maxWidth: '960px',
            margin: '0 auto',
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 40px rgba(12, 70, 150, 0.08)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 380px) 1fr',
            alignItems: 'stretch'
          }}>
            {/* Director Photo */}
            <div style={{ position: 'relative', minHeight: '380px', background: '#e2e8f0' }}>
              <img
                src={directorImg}
                alt="Rohitash (Rohit Singh) - Managing Director"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                background: 'rgba(12, 70, 150, 0.9)',
                backdropFilter: 'blur(8px)',
                padding: '10px 16px',
                borderRadius: '12px',
                color: '#ffffff',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase' }}>
                  Leadership &bull; Mera Digital Pay
                </span>
              </div>
            </div>

            {/* Director Details */}
            <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ marginBottom: '20px' }}>
                <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '28px', fontWeight: 800, color: '#0c4696', margin: '0 0 6px' }}>
                  Rohitash (Rohit Singh)
                </h3>
                <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#58b147', margin: 0, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Managing Director, Mera Digital Pay
                </h4>
              </div>

              <p style={{ fontSize: '15.5px', lineHeight: 1.75, color: '#334155', margin: '0 0 24px' }}>
                With over 4 years of rich experience in the Indian Fintech ecosystem, Rohitash is the visionary leader driving Mera Digital Pay. He specializes in scaling Neo-Banking solutions and secure digital architectures to empower businesses across India.
              </p>

              {/* Mission Quote Box */}
              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)',
                borderLeft: '4px solid #58b147',
                borderRadius: '0 16px 16px 0',
                padding: '20px 22px',
                position: 'relative'
              }}>
                <Quote size={24} color="#58b147" style={{ marginBottom: '8px', opacity: 0.8 }} />
                <p style={{ fontSize: '15px', lineHeight: 1.65, color: '#0f172a', fontStyle: 'italic', margin: 0, fontWeight: 500 }}>
                  "Our mission is to build a highly secure, seamless, and next-generation digital ecosystem that makes modern banking accessible to every business."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mision--vision" style={{ background: '#ffffff', padding: '70px 0' }}>
        <div className="container--responsive">
          <h2
            className="section-title-dashed"
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '32px',
              fontWeight: 800,
              color: '#0c4696',
              marginBottom: '40px',
              textAlign: 'center'
            }}
          >
            Let’s together create “India’s Largest Branchless Banking Network”
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            <div style={{ background: '#f8fafc', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <img
                src={campaignWomanImg}
                alt="Mera Digital Pay Vision"
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 800, color: '#0c4696', marginBottom: '10px' }}>
                  Vision
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4a5568', margin: 0 }}>
                  Make financial &amp; digital services available to everyone, everywhere
                </p>
              </div>
            </div>

            <div style={{ background: '#f8fafc', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <img
                src={campaignRetailerImg}
                alt="Mera Digital Pay Mission"
                style={{ width: '100%', height: '240px', objectFit: 'cover' }}
              />
              <div style={{ padding: '28px' }}>
                <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 800, color: '#0c4696', marginBottom: '10px' }}>
                  Mission
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4a5568', margin: 0 }}>
                  Build the largest branchless banking network that helps create a more progressive society through easy access to financial &amp; digital services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Score Card */}
      <section className="score--card-wrap" style={{ background: '#0c4696', padding: '70px 0', color: '#ffffff' }}>
        <div className="container--responsive">
          <h2
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '34px',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '40px',
              textAlign: 'center'
            }}
          >
            Our Score Card
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {scoreCardStats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <div style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '38px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  {stat.num} <sub style={{ fontSize: '18px', color: '#58b147', fontWeight: 700 }}>{stat.unit}</sub>
                </div>
                <p style={{ fontSize: '14.5px', color: '#cbd5e1', margin: '12px 0 0', fontWeight: 500 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Growth Story */}
      <section className="growth--story" style={{ background: '#f8fafc', padding: '70px 0' }}>
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
            Our Growth Story
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {timelineMilestones.map((milestone, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                  position: 'relative',
                  borderTop: '4px solid #58b147'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#58b147', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  {milestone.month}
                </div>
                <div style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '28px', fontWeight: 800, color: '#0c4696', marginBottom: '14px' }}>
                  {milestone.year}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {milestone.achievements.map((item, aIdx) => (
                    <li key={aIdx} style={{ fontSize: '14px', color: '#4a5568', lineHeight: 1.45, display: 'flex', gap: '6px' }}>
                      <span style={{ color: '#58b147', fontWeight: 'bold' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
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
