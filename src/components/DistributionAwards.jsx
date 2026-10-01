import React from 'react';
import harvardImg from '../assets/award-harvard-casestudy.jpeg';
import gptwImg from '../assets/award-gptw-workplace.jpeg';
import mitImg from '../assets/award-mit-review.jpeg';

const awards = [
  {
    id: 1,
    title: 'Harvard Business School Case Study',
    subtitle: 'Published Case Study on Mera Digital Pay',
    img: harvardImg
  },
  {
    id: 2,
    title: 'India’s Best Workplaces™ in BFSI',
    subtitle: 'Great Place To Work® Top 25 Recognition',
    img: gptwImg
  },
  {
    id: 3,
    title: 'MIT Technology Review',
    subtitle: 'Featured for Last-Mile Financial Delivery',
    img: mitImg
  }
];


export default function DistributionAwards() {
  return (
    <section className="largest--distribution-wrapper bgcolor--white" id="media" style={{ padding: '60px 0' }}>
      <div className="container--responsive">
        <div className="largest--distribution-inner">
          <h3 className="section-title-dashed" style={{ textAlign: 'center', marginBottom: '40px' }}>
            India's largest Distribution as-a-service (DaaS) platform
          </h3>
          <ul className="largest--distribution-slider" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', listStyle: 'none', padding: 0, margin: 0 }}>
            {awards.map((award) => (
              <li key={award.id} style={{ background: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(12, 70, 150, 0.06)', display: 'flex', flexDirection: 'column' }}>
                <figure style={{ margin: 0, height: '220px', overflow: 'hidden', background: '#f8fafc' }}>
                  <img src={award.img} alt={award.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.3s ease' }} />
                </figure>
                <div style={{ padding: '16px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h5 className="title" style={{ margin: '0 0 6px', fontWeight: 800, fontSize: '1.05rem', color: '#0c4696' }}>
                    {award.title}
                  </h5>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: 1.4 }}>
                    {award.subtitle}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

