import React from 'react';
import PartnersSection from '../components/PartnersSection';
import gptwImg from '../assets/award-gptw-workplace.jpeg';
import campaignWomanImg from '../assets/campaign-dil-se-desi-woman.jpeg';
import campaignRetailerImg from '../assets/campaign-dil-se-desi-retailer.jpeg';
import harvardImg from '../assets/award-harvard-casestudy.jpeg';

const cultureValues = [
  'Empower',
  'Inspire',
  'Empathy',
  'Collaboration',
  'Ambition',
  'Leadership',
  'Integrity',
  'Innovation'
];

const culturePhotos = [
  gptwImg,
  campaignWomanImg,
  campaignRetailerImg,
  harvardImg
];


const whyChooseCards = [
  {
    title: 'Growth',
    icon: '🚀',
    desc: 'Build your career in an environment that supports learning, exposure and personal development. With the right guidance and opportunities, you can grow while contributing to meaningful work.'
  },
  {
    title: 'Transparency',
    icon: '💎',
    desc: 'Work in a culture where ideas are welcomed and voices are heard. We believe in open conversations, fair practices and collaboration across teams.'
  },
  {
    title: 'Ownership',
    icon: '🎯',
    desc: 'Ownership is at the heart of how we work. Every team member at Mera Digital Pay is encouraged to take responsibility, stay committed to shared goals and create impact with purpose.'
  }
];

export default function CareersLearningPage() {
  return (
    <main className="careers-page-main">
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
            <li className="item-current item-careers">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                Careers &amp; Learning
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Banner */}
      <section className="top-wrapper careers" style={{ background: '#ffffff', padding: '40px 0 60px' }}>
        <div className="container--responsive">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div className="top-content">
              <h1 className="main-header-title" style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '44px', fontWeight: 800, color: '#0c4696', lineHeight: 1.2, marginBottom: '20px' }}>
                Build With Purpose.<br /><span style={{ color: '#58b147' }}>Grow With Mera Digital Pay.</span>
              </h1>
              <p className="body-content" style={{ fontSize: '17px', lineHeight: 1.7, color: '#4a5568', margin: 0 }}>
                At Mera Digital Pay, we are building technology-led solutions that bring digital and financial services closer to every community across Bharat.
                <br /><br />
                Join a team that works with purpose, learns continuously and creates real impact at the last mile.
              </p>
            </div>
            <div className="top-interactive" style={{ textAlign: 'center' }}>
              <img
                src={gptwImg}
                alt="Careers at Mera Digital Pay"
                style={{ maxWidth: '100%', maxHeight: '420px', borderRadius: '20px', boxShadow: '0 12px 36px rgba(12, 70, 150, 0.12)', objectFit: 'cover' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Work Culture Section */}
      <section style={{ background: '#f8fafc', padding: '70px 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container--responsive">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {culturePhotos.map((photo, i) => (
                <div key={i} style={{ borderRadius: '14px', overflow: 'hidden', height: '180px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)' }}>
                  <img src={photo} alt="Work Culture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            <div>
              <h2
                className="section-title-dashed"
                style={{
                  fontFamily: "'Cera Pro', sans-serif",
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0c4696',
                  marginBottom: '20px'
                }}
              >
                Our Work Culture
              </h2>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#4a5568', marginBottom: '16px' }}>
                At Mera Digital Pay, every role contributes to a larger mission of making digital and financial services more accessible across Bharat. Our teams work together to solve real challenges, support local entrepreneurs and create solutions that reach millions of customers.
              </p>
              <p style={{ fontSize: '15.5px', lineHeight: 1.7, color: '#4a5568', marginBottom: '24px' }}>
                Be part of a fast-growing fintech ecosystem where innovation meets impact. From technology and product to sales, operations, marketing and support, Mera Digital Pay offers opportunities to learn, contribute and grow while building for Bharat.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                {cultureValues.map((val, idx) => (
                  <div key={idx} style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', textAlign: 'center', fontSize: '13.5px', fontWeight: 700, color: '#0c4696' }}>
                    {val}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: '#ffffff', padding: '70px 0' }}>
        <div className="container--responsive">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2
                className="section-title-dashed"
                style={{
                  fontFamily: "'Cera Pro', sans-serif",
                  fontSize: '32px',
                  fontWeight: 800,
                  color: '#0c4696',
                  marginBottom: '36px'
                }}
              >
                Why You Should Choose Us
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {whyChooseCards.map((c, i) => (
                  <div key={i} style={{ background: '#f8fafc', padding: '24px', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '22px' }}>{c.icon}</span>
                      <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '20px', fontWeight: 800, color: '#0c4696', margin: 0 }}>
                        {c.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#4a5568', margin: 0 }}>
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <img
                src={campaignWomanImg}
                alt="Why Mera Digital Pay"
                style={{ width: '100%', borderRadius: '16px', boxShadow: '0 12px 36px rgba(12, 70, 150, 0.1)', objectFit: 'cover', maxHeight: '420px' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Current Job Openings */}
      <section style={{ background: '#0c4696', padding: '70px 0', color: '#ffffff', textAlign: 'center' }}>
        <div className="container--responsive">
          <h2 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '36px', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Current Job Openings
          </h2>
          <p style={{ fontSize: '18px', lineHeight: 1.6, color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 36px' }}>
            If you want to work on meaningful challenges, contribute to Bharat’s digital transformation and grow with a purpose-led organisation, Mera Digital Pay is the place for you.
          </p>
          <a
            href="https://www.linkedin.com/in/mera-digital-aps-daudega-to-mera-desh-daudega-070b9424a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '16px 36px',
              borderRadius: '8px',
              background: '#58b147',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: 800,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(88, 177, 71, 0.4)'
            }}
          >
            Explore Open Positions on LinkedIn →
          </a>
        </div>
      </section>

      {/* Partners & Download App */}
      <PartnersSection />
    </main>
  );
}
