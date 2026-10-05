import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2, 
  ArrowRight, 
  Cpu, 
  KeyRound, 
  Zap,
  Sparkles
} from 'lucide-react';

const apiAndPanelPartners = [
  {
    id: 1,
    name: 'Bharat Fintech Solutions Pvt Ltd',
    type: 'Full Whitelabel B2B Panel & API Stack',
    services: ['AEPS Gateway', 'BBPS Bharat Connect', 'DMT Payouts', 'Micro ATM'],
    activeUsers: '1,500+ Sub-agents',
    turnoverTier: 'Tier 1 Enterprise',
    status: 'Live & Certified',
    description: 'Operating a customized multi-service B2B retail portal under their brand with automated instant wallet top-ups, margin sharing, and dedicated settlement pipelines.'
  },
  {
    id: 2,
    name: 'Digital Gramin Seva Kendra Network',
    type: 'API Integration Stack',
    services: ['Aadhaar Banking API', 'PAN Card Issuance', 'Fastag & Recharge API'],
    activeUsers: '3,200+ Active Terminals',
    turnoverTier: 'State Aggregator',
    status: 'Live & Certified',
    description: 'Seamlessly integrated Mera Digital Pay high-uptime REST APIs into their existing ERP and rural kiosk infrastructure with sub-second response times.'
  },
  {
    id: 3,
    name: 'PayBharat Neo Micro-Banking Ltd',
    type: 'Turnkey Enterprise Panel',
    services: ['Domestic Money Transfer', 'UPI QR Collections', 'Account Opening API'],
    activeUsers: '850+ Merchants',
    turnoverTier: 'FinTech Startup',
    status: 'Live & Certified',
    description: 'Deployed enterprise-grade whitelabel Android mobile app and web portal for merchant payment collections and merchant payouts.'
  },
  {
    id: 4,
    name: 'E-Dukaan Regional Aggregator',
    type: 'Custom B2B Panel & DMT API',
    services: ['Utility Bill Payments', 'Insurance POSP', 'Travel Ticket API'],
    activeUsers: '2,100+ Stores',
    turnoverTier: 'Regional Master Hub',
    status: 'Live & Certified',
    description: 'Empowering tier-3 and tier-4 retailer networks with real-time bill settlement APIs, commission dashboards, and multi-tier distributor hierarchy.'
  },
  {
    id: 5,
    name: 'QuickKendra Corporate Logistics',
    type: 'Payout & Cash Collection API',
    services: ['CMS Cash Drop', 'Instant IMPS/NEFT Payouts', 'Bulk Validation'],
    activeUsers: '500+ Corporate Nodes',
    turnoverTier: 'Logistics Enterprise',
    status: 'Live & Certified',
    description: 'Utilizing Mera Digital Pay Cash Management APIs for automated doorstep collections and automated bank account credit verification.'
  },
  {
    id: 6,
    name: 'Gramin Pay Neo Banking Partner',
    type: 'Core Banking API & SDK',
    services: ['AEPS Cash Out', 'Mini Statement API', 'Bank Account Verification'],
    activeUsers: '1,200+ Banking Mitras',
    turnoverTier: 'Banking Business Correspondent',
    status: 'Live & Certified',
    description: 'Integrated complete biometric AEPS SDK and multi-bank switch routing for maximum transaction success rates in remote rural regions.'
  }
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '26px' }}>
          {filteredPartners.map((company) => (
            <div 
              key={company.id}
              style={{
                background: '#ffffff',
                borderRadius: '22px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 6px 24px rgba(10, 43, 94, 0.06)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', gap: '10px' }}>
                  <span style={{ 
                    background: '#eff6ff', 
                    color: '#0A2B5E', 
                    fontSize: '12px', 
                    fontWeight: 800, 
                    padding: '4px 12px', 
                    borderRadius: '20px',
                    border: '1px solid #bfdbfe'
                  }}>
                    {company.type}
                  </span>
                  <span style={{ 
                    background: '#dcfce7', 
                    color: '#15803d', 
                    fontSize: '11.5px', 
                    fontWeight: 800, 
                    padding: '3px 10px', 
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <CheckCircle2 size={12} /> {company.status}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '20px', fontWeight: 800, color: '#0A2B5E', margin: '0 0 10px' }}>
                  {company.name}
                </h3>

                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, marginBottom: '18px' }}>
                  {company.description}
                </p>

                <div style={{ marginBottom: '18px' }}>
                  <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
                    Active Stack & Services:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {company.services.map((srv, idx) => (
                      <span key={idx} style={{ background: '#f1f5f9', color: '#1e293b', fontSize: '12px', fontWeight: 600, padding: '3px 10px', borderRadius: '8px' }}>
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '11.5px', color: '#94a3b8', display: 'block' }}>Network Scale</span>
                  <strong style={{ fontSize: '14px', color: '#0A2B5E' }}>{company.activeUsers}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '11.5px', color: '#94a3b8', display: 'block' }}>Category</span>
                  <strong style={{ fontSize: '13.5px', color: '#D9940A' }}>{company.turnoverTier}</strong>
                </div>
              </div>
            </div>
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
