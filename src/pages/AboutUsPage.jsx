import React, { useState } from 'react';
import PartnersSection from '../components/PartnersSection';

const awardsList = [
  {
    show: 'Global Fintech Fest',
    category: 'Best Corporate Business Correspondent',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/GFF_1-scaled.jpg'
  },
  {
    show: 'DigiDhan Mission FinTech Award',
    category: 'Innovation in Digital Payments Acceptance Infrastructure in Rural India',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/Innovation-in-Digital-Payments-Acceptance_Square-scaled.jpg'
  },
  {
    show: 'Digital Responsibility Award by IAMAI',
    category: 'Financial Accessibility',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/TUS03033-scaled.jpg'
  },
  {
    show: 'India Finance Inclusive Awards',
    category: 'Fintech Innovation in Financial Inclusion',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/Fintech-Innovation-in-Financial-Inclusion-Award-by-The-India-Finance-Inclusive-Award-scaled.jpg'
  },
  {
    show: 'Harvard Business Publishing',
    category: "Building India's 2.0: Mera Digital Pay",
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/06/HBR_Website-Cover-Image.jpg'
  },
  {
    show: 'The Economic Times Best BFSI Brands',
    category: 'Best BFSI Brands',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/Mera Digital Pay-recognized-as-one-of-the-Best-BFSI-Brands-2023-by-The-Economic-Times-1-scaled.jpg'
  },
  {
    show: 'ICAI Awards',
    category: 'CA Innovator Award',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/CA-Innovator.jpg'
  },
  {
    show: 'FICCI & IBA',
    category: 'Best Financial Inclusion Provider',
    img: 'https://paynearby.in/wp-content/uploads-efs/2026/06/Best-Financial-Inclusion-Provider-scaled.jpg'
  }
];

const teamList = [
  {
    name: 'Anand Kumar Bajaj',
    designation: 'Founder, MD & CEO',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/06/AnandKumar.jpg',
    linkedin: 'https://www.linkedin.com/in/anandkumarbajajpaynearby',
    bio: 'With 23+ years of experience in Digital Payments and Mobility, he holds six banking technology patents. Formerly, as President and Chief Innovation Officer at YES Bank, he spearheaded impactful programs. Anand now leads Mera Digital Pay, driving strategic growth and empowering retailers at the last mile to make digital and financial services available to everyone, everywhere.'
  },
  {
    name: 'Subhash Kumar',
    designation: 'Co-founder',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/06/SubhashKumar.jpg',
    linkedin: 'https://www.linkedin.com/in/subhash-kumar-161461248',
    bio: 'A technology veteran with 25+ years of experience and extensive knowledge of the payments industry, prepaid cards, remittance, and travel technology distribution. He drives sales, new product design, and technology development at Mera Digital Pay. Previously, as the COO of G.I. Technology Pvt. Ltd., he oversaw regulatory relationships, prepaid solutions, and P&L management for 15 years.'
  },
  {
    name: 'Yashwant Lodha',
    designation: 'Co-founder & Executive Director',
    img: 'https://paynearby.in/wp-content/uploads-efs/2023/06/YashwantLodha.jpg',
    linkedin: 'https://www.linkedin.com/in/yashwant-lodha-40833023/',
    bio: 'An engineering graduate from the Manipal Institute of Technology and an MBA from NMIMS. His expertise lies in product & project management and strategic analysis. Previously, as Senior Product Manager at YES Bank, he managed digital payments and mobility products, including UPI, IMPS switch, and the Domestic Remittance platform.'
  }
];

const scoreCardStats = [
  { num: '12+', unit: 'Lakh', label: 'Digital Pradhans' },
  { num: '3+', unit: 'Lakh', label: 'Digital Naaris' },
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
    achievements: ['Retailers Onboarded: 15,00,000+', 'Launches: Digital Naari & Credit']
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
                Unstoppable. Ambition:<br /><span>Zidd Aage Badhne Ki</span>
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
                src="https://paynearby.in/wp-content/uploads-efs/2020/11/about-men.png"
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
              marginBottom: '40px',
              position: 'relative',
              paddingBottom: '16px'
            }}
          >
            Awards &amp; Recognitions
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60px', height: '4px', background: '#58b147', borderRadius: '2px' }} />
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
      <section className="bg--white padded--wrapper about-paynearby-wrapper" style={{ background: '#ffffff', padding: '70px 0' }}>
        <div className="container--responsive">
          <h2
            className="section-title-dashed"
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '34px',
              fontWeight: 800,
              color: '#0c4696',
              marginBottom: '30px',
              position: 'relative',
              paddingBottom: '16px'
            }}
          >
            About Mera Digital Pay
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60px', height: '4px', background: '#58b147', borderRadius: '2px' }} />
          </h2>
          <p className="body-content" style={{ fontSize: '17px', lineHeight: 1.7, color: '#334155', marginBottom: '30px' }}>
            Shri Mata Vaishno Devi Traders is a DIPP Certified Fintech Enterprise registered under The Startup India program of Government of India, founded with rich expertise in Digital Banking &amp; Payments industry. The team works on deep insights and understanding of payment and transaction technology space.
          </p>
          <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(12, 70, 150, 0.1)', marginBottom: '36px' }}>
            <img
              src="https://paynearby.in/wp-content/uploads-efs/2022/07/Founding-Team_LR1-scaled.jpg"
              alt="Mera Digital Pay Team"
              style={{ width: '100%', height: 'auto', display: 'block' }}
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

      {/* Meet The Team */}
      <section className="meetteam--wrapper" style={{ background: '#f4f8fc', padding: '70px 0' }}>
        <div className="container--responsive">
          <h2
            className="section-title-dashed"
            style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '34px',
              fontWeight: 800,
              color: '#0c4696',
              marginBottom: '40px',
              position: 'relative',
              paddingBottom: '16px'
            }}
          >
            Meet The Team
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60px', height: '4px', background: '#58b147', borderRadius: '2px' }} />
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {teamList.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(12, 70, 150, 0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '300px', overflow: 'hidden', background: '#e2e8f0' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '20px', fontWeight: 800, color: '#0c4696', margin: 0 }}>
                        {member.name}
                      </h3>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#58b147', margin: '4px 0 0' }}>
                        {member.designation}
                      </h4>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#0c4696', fontSize: '20px', textDecoration: 'none' }}
                      title="LinkedIn Profile"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#0c4696">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </a>
                  </div>
                  <p style={{ fontSize: '14px', lineHeight: 1.65, color: '#4a5568', margin: 0 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
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
                src="https://paynearby.in/wp-content/uploads-efs/2020/12/vision.jpg"
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
                src="https://paynearby.in/wp-content/uploads-efs/2020/12/mission2.jpg"
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
              marginBottom: '40px',
              position: 'relative',
              paddingBottom: '16px'
            }}
          >
            Our Growth Story
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60px', height: '4px', background: '#58b147', borderRadius: '2px' }} />
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
