import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Building2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const advantages = [
  {
    id: 'easy-onboarding',
    title: 'Easy Business Onboarding',
    desc: 'Get started with a simple onboarding process designed for retailers, distributors, and business partners.',
    icon: UserCheck,
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    lightBg: '#ecfdf5',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    accentColor: '#10b981',
    badge: 'EASY ONBOARDING'
  },
  {
    id: 'security-platform',
    title: 'Security-Focused Platform',
    desc: 'We aim to protect business and transaction information through appropriate security measures and responsible data handling.',
    icon: ShieldCheck,
    gradient: 'linear-gradient(135deg, #0c4696 0%, #2563eb 100%)',
    lightBg: '#eff6ff',
    glowColor: 'rgba(37, 99, 235, 0.25)',
    accentColor: '#2563eb',
    badge: 'DATA PROTECTION'
  },
  {
    id: 'multiple-services',
    title: 'Multiple Digital Services',
    desc: 'Access supported digital financial services, recharge, bill payments, and other business solutions through one platform.',
    icon: Layers,
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
    lightBg: '#f5f3ff',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    accentColor: '#8b5cf6',
    badge: 'MULTIPLE SERVICES'
  },
  {
    id: 'partner-commissions',
    title: 'Partner Commission Opportunities',
    desc: 'Explore applicable commission opportunities on eligible transactions as per your partner category and commission structure.',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    lightBg: '#fffbeb',
    glowColor: 'rgba(245, 158, 11, 0.25)',
    accentColor: '#f59e0b',
    badge: 'PARTNER EARNINGS'
  },
  {
    id: 'business-growth',
    title: 'Business Growth Opportunities',
    desc: 'Build your digital services business through retailer, distributor, franchise, reseller, B2B, White Label, and API partner models.',
    icon: Building2,
    gradient: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
    lightBg: '#f0fdfa',
    glowColor: 'rgba(13, 148, 136, 0.25)',
    accentColor: '#0d9488',
    badge: 'BUSINESS GROWTH'
  }
];

export default function MeraDigitalPayAdvantage({ onOpenJoin }) {
  return (
    <section className="advantage-container bgcolor--white" id="advantage-section">
      <div className="container--responsive">
        
        {/* Section Header */}
        <div className="center-content mdp-advantage-header">
          <div className="mdp-advantage-pill">
            <Sparkles size={16} color="#58b147" />
            <span>Why Partner With Us</span>
          </div>
          <h3 className="section-title-dashed">
            Advantages of Mera Digital Pay
          </h3>
          <p className="body-content">
            Grow your digital business with technology-driven financial services, flexible business opportunities, and a partner-focused digital ecosystem.
          </p>
        </div>

        {/* Advantage Grid with Vivid Themed Visual Cards */}
        <div className="mdp-advantage-grid mdp-adv-grid-5">
          {advantages.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                className="mdp-advantage-card"
                style={{ '--accent-glow': item.glowColor, '--accent-color': item.accentColor }}
              >
                {/* Top Badge & Icon */}
                <div className="mdp-adv-top-row">
                  <div 
                    className="mdp-adv-icon-badge"
                    style={{ background: item.gradient, boxShadow: `0 8px 20px ${item.glowColor}` }}
                  >
                    <IconComponent size={28} color="#ffffff" strokeWidth={2.2} />
                  </div>
                  <span 
                    className="mdp-adv-pill-tag"
                    style={{ background: item.lightBg, color: item.accentColor }}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Card Content */}
                <h4 className="mdp-adv-card-title">{item.title}</h4>
                <p className="mdp-adv-card-desc">{item.desc}</p>

                {/* Bottom decorative bar */}
                <div 
                  className="mdp-adv-accent-bar"
                  style={{ background: item.gradient }}
                />
              </div>
            );
          })}
        </div>

        {/* Call to action bar at bottom of advantage section */}
        <div className="mdp-adv-cta-strip">
          <div className="mdp-adv-cta-text">
            <h4>Ready to transform your retail business?</h4>
            <p>Start offering AEPS, DMT, Bill Payments and Recharge today with zero hassle.</p>
          </div>
          <button 
            type="button"
            className="btn green mdp-adv-cta-btn"
            onClick={() => onOpenJoin && onOpenJoin()}
          >
            Book Live Demo <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

