import React from 'react';
import { 
  Store, 
  Truck, 
  Building, 
  MapPin, 
  Share2, 
  Briefcase, 
  Layers, 
  Code2, 
  Sparkles,
  Compass,
  ArrowUpRight
} from 'lucide-react';

const partnerNetworkStats = [
  {
    id: 'retailer',
    title: 'Retailer Partners',
    count: '10K+',
    icon: Store,
    color: '#0284c7',
    lightBg: '#f0f9ff',
    glow: 'rgba(2, 132, 199, 0.25)',
    desc: 'Local storefronts delivering banking & digital utility services'
  },
  {
    id: 'distributor',
    title: 'Distributor Partners',
    count: '5K+',
    icon: Truck,
    color: '#0d9488',
    lightBg: '#f0fdfa',
    glow: 'rgba(13, 148, 136, 0.25)',
    desc: 'Regional distribution leaders empowering retail networks'
  },
  {
    id: 'franchise',
    title: 'Franchise Partners',
    count: '2K+',
    icon: Building,
    color: '#2563eb',
    lightBg: '#eff6ff',
    glow: 'rgba(37, 99, 235, 0.25)',
    desc: 'Full-service digital customer care & banking kiosks'
  },
  {
    id: 'district-franchise',
    title: 'District Franchise Partners',
    count: '1K+',
    icon: MapPin,
    color: '#7c3aed',
    lightBg: '#f5f3ff',
    glow: 'rgba(124, 58, 237, 0.25)',
    desc: 'District master hubs driving end-to-end territory scale'
  },
  {
    id: 'reseller',
    title: 'Reseller Partners',
    count: '5+',
    icon: Share2,
    color: '#d97706',
    lightBg: '#fffbeb',
    glow: 'rgba(217, 119, 6, 0.25)',
    desc: 'Authorized solution reseller & ecosystem distribution teams'
  },
  {
    id: 'b2b',
    title: 'B2B Partners',
    count: '2+',
    icon: Briefcase,
    color: '#059669',
    lightBg: '#ecfdf5',
    glow: 'rgba(5, 150, 105, 0.25)',
    desc: 'Corporate, fintech & institutional business integrations'
  },
  {
    id: 'white-label',
    title: 'White Label Partners',
    count: '10+',
    icon: Layers,
    color: '#e11d48',
    lightBg: '#fff1f2',
    glow: 'rgba(225, 29, 72, 0.25)',
    desc: 'Custom-branded fintech portal & multi-service platforms'
  },
  {
    id: 'api-partner',
    title: 'API Partners',
    count: '10+',
    icon: Code2,
    color: '#4f46e5',
    lightBg: '#eef2ff',
    glow: 'rgba(79, 70, 229, 0.25)',
    desc: 'Robust REST APIs for seamless fintech & banking connectivity'
  }
];

export default function PanIndiaStats() {
  return (
    <section className="fintech-network-section" id="fintech-network">
      <div className="container--responsive">
        
        {/* Main Header Container with India Badge */}
        <div className="center-content fintech-network-header">
          <div className="india-flag-pill">
            <span className="flag-emoji">🇮🇳</span>
            <span className="pill-text">INDIA'S NUMBER ONE FINTECH PLATFORM</span>
          </div>

          <h2 className="fintech-brand-title">
            MERA DIGITAL PAY
          </h2>
          
          <div className="fintech-hindi-tagline">
            <span>मेरा प्यारा डिजिटल इंडिया</span>
          </div>

          <div className="fintech-network-subheading-wrap">
            <span className="network-badge-label">OUR PARTNER NETWORK</span>
          </div>
        </div>

        {/* 8-Card Partner Network Grid */}
        <div className="partner-network-grid">
          {partnerNetworkStats.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className="partner-network-card"
                style={{ 
                  '--card-glow': item.glow, 
                  '--card-accent': item.color 
                }}
              >
                <div className="pnet-card-top">
                  <div 
                    className="pnet-icon-badge"
                    style={{ background: item.lightBg, color: item.color }}
                  >
                    <IconComponent size={24} strokeWidth={2.3} />
                  </div>
                  <span className="pnet-pulse-dot" style={{ background: item.color }} />
                </div>

                <div className="pnet-count-wrap">
                  <span className="pnet-count-num" style={{ color: item.color }}>
                    {item.count}
                  </span>
                </div>

                <h4 className="pnet-card-title">{item.title}</h4>
                <p className="pnet-card-desc">{item.desc}</p>

                <div className="pnet-bottom-accent" style={{ background: item.color }} />
              </div>
            );
          })}
        </div>

        {/* Our Vision Card / Banner */}
        <div className="fintech-vision-banner">
          <div className="vision-header-row">
            <span className="vision-badge">
              <Compass size={15} />
              OUR VISION
            </span>
            <h3 className="vision-main-title">
              Building a Digitally Empowered India
            </h3>
          </div>

          <div className="vision-pillars-row">
            <div className="vision-pillar-item">
              <span className="vision-dot">🔵</span>
              <span className="vision-text">Connecting India</span>
            </div>
            <span className="vision-divider">•</span>
            <div className="vision-pillar-item">
              <span className="vision-dot">🔵</span>
              <span className="vision-text">Empowering Businesses</span>
            </div>
            <span className="vision-divider">•</span>
            <div className="vision-pillar-item">
              <span className="vision-dot">🔵</span>
              <span className="vision-text">Enabling Digital Growth</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
