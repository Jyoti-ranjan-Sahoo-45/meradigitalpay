import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Building2 
} from 'lucide-react';

const topAdvantages = [
  {
    id: 'easy-onboarding',
    title: 'Easy Business Onboarding',
    desc: 'Get started with a simple onboarding process designed for retailers, distributors, and business partners.',
    icon: UserCheck,
    iconBg: '#059669',
    badgeBg: '#d1fae5',
    badgeColor: '#065f46',
    dashColor: '#059669',
    badge: 'EASY ONBOARDING'
  },
  {
    id: 'security-platform',
    title: 'Security-Focused Platform',
    desc: 'We aim to protect business and transaction information through appropriate security measures and responsible data handling.',
    icon: ShieldCheck,
    iconBg: '#2563eb',
    badgeBg: '#dbeafe',
    badgeColor: '#1d4ed8',
    dashColor: '#2563eb',
    badge: 'DATA PROTECTION'
  },
  {
    id: 'multiple-services',
    title: 'Multiple Digital Services',
    desc: 'Access supported digital financial services, recharge, bill payments, and other business solutions through one platform.',
    icon: Layers,
    iconBg: '#2563eb',
    badgeBg: '#dbeafe',
    badgeColor: '#1d4ed8',
    dashColor: '#2563eb',
    badge: 'MULTIPLE SERVICES'
  }
];

const bottomAdvantages = [
  {
    id: 'partner-commissions',
    title: 'Partner Commission Opportunities',
    desc: 'Explore applicable commission opportunities on eligible transactions as per your partner category and commission structure.',
    icon: TrendingUp,
    iconBg: '#d97706',
    badgeBg: '#fef3c7',
    badgeColor: '#b45309',
    dashColor: '#d97706',
    badge: 'PARTNER EARNINGS'
  },
  {
    id: 'business-growth',
    title: 'Business Growth Opportunities',
    desc: 'Build your digital services business through retailer, distributor, franchise, reseller, B2B, White Label, and API partner models.',
    icon: Building2,
    iconBg: '#0284c7',
    badgeBg: '#ccfbf1',
    badgeColor: '#0f766e',
    dashColor: '#0284c7',
    badge: 'BUSINESS GROWTH'
  }
];

function AdvantageCard({ item, delayClass = 'delay-100' }) {
  const IconComponent = item.icon;
  return (
    <div 
      className={`mdp-adv-exact-card reveal-init ${delayClass}`}
      style={{
        background: 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(8px)',
        borderRadius: '22px',
        border: '1.5px solid rgba(226, 232, 240, 0.85)',
        padding: '26px 24px 22px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease'
      }}
    >
      {/* Top Header Row: Icon Button & Badge Pill */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <div 
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '13px',
            background: item.iconBg,
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 4px 12px ${item.iconBg}40`,
            transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <IconComponent size={22} strokeWidth={2.2} />
        </div>

        <span 
          style={{
            background: item.badgeBg,
            color: item.badgeColor,
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: '100px'
          }}
        >
          {item.badge}
        </span>
      </div>

      {/* Card Title */}
      <h4 
        style={{
          fontSize: '17px',
          fontWeight: 800,
          color: '#1e3a8a',
          margin: '0 0 10px 0',
          lineHeight: 1.35
        }}
      >
        {item.title}
      </h4>

      {/* Card Description */}
      <p 
        style={{
          fontSize: '13.5px',
          color: '#64748b',
          lineHeight: 1.5,
          margin: '0 0 20px 0',
          flex: 1
        }}
      >
        {item.desc}
      </p>

      {/* Bottom Colored Accent Dash */}
      <div 
        style={{
          width: '32px',
          height: '3.5px',
          borderRadius: '2px',
          background: item.dashColor,
          marginTop: 'auto'
        }}
      />
    </div>
  );
}

export default function MeraDigitalPayAdvantage() {
  return (
    <section className="mdp-advantage-exact-section reveal-init" style={{ padding: '40px 0 50px', background: 'transparent' }}>
      <div className="container--responsive" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top Row: 3 Cards */}
          <div 
            className="mdp-adv-exact-top-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}
          >
            {topAdvantages.map((item, idx) => (
              <AdvantageCard key={item.id} item={item} delayClass={`delay-${(idx + 1) * 100}`} />
            ))}
          </div>

          {/* Bottom Row: 2 Cards (Centered) */}
          <div 
            className="mdp-adv-exact-bottom-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 480px))',
              justifyContent: 'center',
              gap: '24px'
            }}
          >
            {bottomAdvantages.map((item, idx) => (
              <AdvantageCard key={item.id} item={item} delayClass={`delay-${(idx + 1) * 150}`} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
