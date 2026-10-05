import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles
} from 'lucide-react';
import companyInfo from '../assets/company-info.jpeg';

const apiAndPanelPartners = [
  { id: 1, type: 'Full Whitelabel B2B Panel & API Stack' },
  { id: 2, type: 'API Integration Stack' },
  { id: 3, type: 'Turnkey Enterprise Panel' },
  { id: 4, type: 'Custom B2B Panel & DMT API' },
  { id: 5, type: 'Payout & Cash Collection API' },
  { id: 6, type: 'Core Banking API & SDK' }
];

export default function SolutionsPage() {
  const [partnerTypeFilter, setPartnerTypeFilter] = useState('all');

  const filteredPartners = partnerTypeFilter === 'all'
    ? apiAndPanelPartners
    : apiAndPanelPartners.filter(p => partnerTypeFilter === 'api' ? p.type.includes('API') : p.type.includes('Panel'));

  return (
    <main className="api-panel-clients-page" style={{ background: '#f8fafc', paddingBottom: '90px' }}>
      
      {/* Header Banner */}
      <section style={{ background: 'linear-gradient(135deg, #0A2B5E 0%, #0D3B7A 60%, #051937 100%)', color: '#ffffff', padding: '60px 0 50px' }}>
        <div className="container--responsive" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(217, 148, 10, 0.18)', border: '1px solid #D9940A', padding: '6px 18px', borderRadius: '30px', color: '#F5C842', fontSize: '13.5px', fontWeight: 800, marginBottom: '16px' }}>
            <Sparkles size={16} />
            <span>API & B2B PANEL PARTNERS DIRECTORY</span>
          </div>
          <h1 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '40px', fontWeight: 900, margin: '0 0 14px', letterSpacing: '-0.5px' }}>
            API Clients & Whitelabel Panel Partners
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', maxWidth: '780px', margin: '0 auto', lineHeight: 1.6 }}>
            Details and profiles of enterprise clients, fintech companies, and regional aggregators powered by Mera Digital Pay’s high-speed API stack and turnkey B2B Panels.
          </p>

          {/* Filter tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '28px' }}>
            <button 
              type="button" 
              onClick={() => setPartnerTypeFilter('all')}
              style={{
                background: partnerTypeFilter === 'all' ? '#D9940A' : 'rgba(255,255,255,0.12)',
                color: '#ffffff',
                border: 'none',
                padding: '8px 22px',
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              All Companies
            </button>
            <button 
              type="button" 
              onClick={() => setPartnerTypeFilter('api')}
              style={{
                background: partnerTypeFilter === 'api' ? '#D9940A' : 'rgba(255,255,255,0.12)',
                color: '#ffffff',
                border: 'none',
                padding: '8px 22px',
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              API Clients
            </button>
            <button 
              type="button" 
              onClick={() => setPartnerTypeFilter('panel')}
              style={{
                background: partnerTypeFilter === 'panel' ? '#D9940A' : 'rgba(255,255,255,0.12)',
                color: '#ffffff',
                border: 'none',
                padding: '8px 22px',
                borderRadius: '24px',
                fontWeight: 700,
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              Whitelabel Panel Partners
            </button>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <div className="container--responsive" style={{ maxWidth: '1100px', margin: '0 auto', padding: '50px 20px 0' }}>
        <div className="solution-company-grid">
          {filteredPartners.map((company) => (
            <article className="solution-company-card" key={company.id}>
              <img
                src={companyInfo}
                alt="Mera Digital Pay partner company information"
                loading="lazy"
              />
            </article>
          ))}
        </div>

        {/* Call to action for new API or Whitelabel Panel */}
        <div style={{ 
          marginTop: '50px',
          background: 'linear-gradient(135deg, #0A2B5E 0%, #103772 100%)',
          borderRadius: '24px',
          padding: '36px 40px',
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 16px 40px rgba(10, 43, 94, 0.25)'
        }}>
          <div>
            <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '24px', fontWeight: 900, margin: '0 0 6px' }}>
              Want to Integrate Mera Digital Pay API or Launch Your Own B2B Panel?
            </h3>
            <p style={{ margin: 0, color: '#cbd5e1', fontSize: '15px' }}>
              Get instant sandbox API keys, complete documentation, or request custom branding for your enterprise.
            </p>
          </div>
          <a 
            href="/contact-us" 
            style={{ 
              background: '#D9940A', 
              color: '#ffffff', 
              padding: '14px 28px', 
              borderRadius: '12px', 
              fontWeight: 800, 
              fontSize: '15px', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            Get API / Whitelabel Panel <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </main>
  );
}
