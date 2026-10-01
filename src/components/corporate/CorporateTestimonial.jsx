import React from 'react';
import { Quote, Building2, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    company: 'Leading NBFC Partner',
    category: 'Consumer Finance & EMI Collection',
    quote: 'Mera Digital Pay provides high reliability in the cash collection vertical with proactive merchant support and rapid settlement resolution.',
    author: 'Operations & Collections Lead',
    designation: 'National NBFC Alliance Partner',
    gradient: 'linear-gradient(180deg, #ffffff 0%, #f0fdf4 100%)',
    borderColor: '#bbf7d0',
    accentColor: '#16a34a'
  },
  {
    id: 2,
    company: 'Scheduled Commercial Bank Partner',
    category: 'Banking & Financial Inclusion',
    quote: 'Enabling assisted financial services through Mera Digital Pay touchpoints significantly broadens rural banking penetration with secure AePS and micro-ATM capabilities.',
    author: 'Financial Inclusion Head',
    designation: 'Institutional Banking Division',
    gradient: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)',
    borderColor: '#bfdbfe',
    accentColor: '#0c4696'
  },
  {
    id: 3,
    company: 'General Insurance Alliance',
    category: 'Micro Insurance & Protection',
    quote: 'Mera Digital Pay enables seamless sachet insurance accessibility across Tier 2 to Tier 6 regions, allowing families to secure instant health and group protection.',
    author: 'Digital Partnerships Lead',
    designation: 'Rural Insurance Ecosystem',
    gradient: 'linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)',
    borderColor: '#e9d5ff',
    accentColor: '#7c3aed'
  },
  {
    id: 4,
    company: 'FMCG Distribution Network',
    category: 'Supply Chain Cash Digitization',
    quote: 'Digitized B2B cash collection powered by Mera Digital Pay streamlines working capital reconciliation and reduces physical transit overhead for distribution routes.',
    author: 'Supply Chain Operations Lead',
    designation: 'Enterprise Distribution Network',
    gradient: 'linear-gradient(180deg, #ffffff 0%, #fff7ed 100%)',
    borderColor: '#fed7aa',
    accentColor: '#ea580c'
  }
];

export default function CorporateTestimonial() {
  return (
    <section 
      className="case-studies-wrapper distributor-casestudy-wraper bgcolor--text--light-blue" 
      id="case-studies" 
      style={{ padding: '70px 0' }}
    >
      <div className="container--responsive">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '6px', 
            background: 'rgba(12, 70, 150, 0.08)', 
            color: '#0c4696', 
            fontSize: '13px', 
            fontWeight: 700, 
            padding: '6px 14px', 
            borderRadius: '20px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.8px',
            marginBottom: '10px'
          }}>
            <Building2 size={15} /> Verified Corporate Partners
          </span>
          <h3 className="section-title-dashed" style={{ margin: 0 }}>
            Enterprise Testimonials
          </h3>
          <p style={{ color: '#64748b', fontSize: '15.5px', maxWidth: '650px', margin: '10px auto 0', lineHeight: '1.6' }}>
            Trusted by India's leading financial institutions, banks, and enterprise leaders to power last-mile digital commerce.
          </p>
        </div>

        {/* 4 Cards in one line / responsive grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {testimonials.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                background: item.gradient,
                border: `1.5px solid ${item.borderColor}`,
                borderRadius: '20px',
                padding: '28px 24px',
                boxShadow: '0 10px 25px rgba(12, 70, 150, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(12, 70, 150, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(12, 70, 150, 0.06)';
              }}
            >
              <div>
                {/* Partner Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', marginBottom: '16px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: item.accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}>
                    <Quote size={18} style={{ transform: 'rotate(180deg)' }} />
                  </div>
                  <span style={{ 
                    fontSize: '11px', 
                    color: item.accentColor, 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.5px', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '4px',
                    background: '#ffffff',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    border: `1px solid ${item.borderColor}`,
                    textAlign: 'right'
                  }}>
                    <CheckCircle2 size={12} /> {item.category}
                  </span>
                </div>

                <h4 style={{ margin: '0 0 12px', fontSize: '16.5px', fontWeight: 800, color: '#0f172a' }}>
                  {item.company}
                </h4>

                {/* Quote Body */}
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#334155', fontStyle: 'italic', margin: '0 0 20px' }}>
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '14px', marginTop: 'auto' }}>
                <strong style={{ fontSize: '14.5px', color: '#0c4696', display: 'block', marginBottom: '2px', fontWeight: 700 }}>
                  {item.author}
                </strong>
                <span style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.4', display: 'block' }}>
                  {item.designation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


