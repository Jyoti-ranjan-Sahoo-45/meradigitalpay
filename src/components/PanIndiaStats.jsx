import React from 'react';
import { 
  Store, 
  Truck, 
  Building, 
  MapPin, 
  Share2, 
  Briefcase, 
  Layers, 
  Code2
} from 'lucide-react';

const partnerNetworkStats = [
  {
    id: 'retailer',
    title: 'Retailer Partners',
    count: '10K+',
    icon: Store,
    color: '#1e40af',
    dotColor: '#1d4ed8',
    lightBg: '#eff6ff',
    desc: 'Local storefronts delivering banking & digital utility services'
  },
  {
    id: 'distributor',
    title: 'Distributor Partners',
    count: '5K+',
    icon: Truck,
    color: '#0369a1',
    dotColor: '#0284c7',
    lightBg: '#f0f9ff',
    desc: 'Regional distribution leaders empowering retail networks'
  },
  {
    id: 'franchise',
    title: 'Franchise Partners',
    count: '2K+',
    icon: Building,
    color: '#2563eb',
    dotColor: '#3b82f6',
    lightBg: '#eff6ff',
    desc: 'Full-service digital customer care & banking kiosks'
  },
  {
    id: 'district-franchise',
    title: 'District Franchise Partners',
    count: '1K+',
    icon: MapPin,
    color: '#1d4ed8',
    dotColor: '#1d4ed8',
    lightBg: '#eff6ff',
    desc: 'District master hubs driving end-to-end territory scale'
  },
  {
    id: 'reseller',
    title: 'Reseller Partners',
    count: '5+',
    icon: Share2,
    color: '#d97706',
    dotColor: '#ea580c',
    lightBg: '#fffbeb',
    desc: 'Authorized solution reseller & ecosystem distribution teams'
  },
  {
    id: 'b2b',
    title: 'B2B Partners',
    count: '2+',
    icon: Briefcase,
    color: '#0d9488',
    dotColor: '#0d9488',
    lightBg: '#f0fdfa',
    desc: 'Corporate, fintech & institutional business integrations'
  },
  {
    id: 'white-label',
    title: 'White Label Partners',
    count: '10+',
    icon: Layers,
    color: '#e11d48',
    dotColor: '#dc2626',
    lightBg: '#fff1f2',
    desc: 'Custom-branded fintech portal & multi-service platforms'
  },
  {
    id: 'api-partner',
    title: 'API Partners',
    count: '10+',
    icon: Code2,
    color: '#2563eb',
    dotColor: '#2563eb',
    lightBg: '#eff6ff',
    desc: 'Robust REST APIs for seamless fintech & banking connectivity'
  }
];

export default function PanIndiaStats() {
  return (
    <section className="partner-network-section" id="partner-network" style={{ padding: '40px 0 50px', background: 'transparent' }}>
      <div className="container--responsive" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header Pill */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span 
            style={{
              display: 'inline-block',
              background: '#e0f2fe',
              color: '#0284c7',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              padding: '7px 22px',
              borderRadius: '100px',
              border: '1px solid #bae6fd',
              boxShadow: '0 2px 8px rgba(2, 132, 199, 0.08)'
            }}
          >
            OUR PARTNER NETWORK
          </span>
        </div>

        {/* 8 Cards Grid */}
        <div 
          className="partner-network-exact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}
        >
          {partnerNetworkStats.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className="partner-network-exact-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(226, 232, 240, 0.85)',
                  padding: '24px 22px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
                }}
              >
                {/* Top Row: Icon & Dot */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '11px',
                      background: item.lightBg,
                      color: item.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <IconComponent size={20} strokeWidth={2.2} />
                  </div>
                  <span 
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: item.dotColor,
                      display: 'inline-block'
                    }} 
                  />
                </div>

                {/* Count Number */}
                <div 
                  style={{
                    fontSize: '30px',
                    fontWeight: 900,
                    color: item.color,
                    letterSpacing: '-0.5px',
                    lineHeight: 1.1,
                    marginBottom: '6px'
                  }}
                >
                  {item.count}
                </div>

                {/* Title */}
                <h4 
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: '#1e293b',
                    margin: '0 0 6px 0',
                    lineHeight: 1.3
                  }}
                >
                  {item.title}
                </h4>

                {/* Description */}
                <p 
                  style={{
                    fontSize: '12.5px',
                    color: '#64748b',
                    lineHeight: 1.45,
                    margin: '0 0 18px 0',
                    flex: 1
                  }}
                >
                  {item.desc}
                </p>

                {/* Bottom Dash */}
                <div 
                  style={{
                    width: '30px',
                    height: '3.5px',
                    borderRadius: '2px',
                    background: item.color,
                    marginTop: 'auto'
                  }} 
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
