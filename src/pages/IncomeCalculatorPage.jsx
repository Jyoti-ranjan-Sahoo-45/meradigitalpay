import React, { useState, useMemo, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  RefreshCw, 
  Calculator, 
  Store, 
  Users, 
  Building2, 
  MapPin, 
  Share2, 
  Briefcase, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  TrendingUp 
} from 'lucide-react';

export const PARTNER_ROLES = [
  {
    id: 'retailer',
    label: 'Retailer',
    badge: 'Direct Retailer Counter Slab',
    tagline: 'Direct counter transactions & instant spot commission per customer walk-in',
    icon: Store,
    defaultCount: 1,
    scope: 'Single Merchant Counter',
    model: 'Direct Spot Commission',
    avgVolume: '15 – 30 Txns / Day',
    highlight: 'Earn direct instant commissions on cash withdrawals, DMT, bill payments, and account openings at your store counter.'
  },
  {
    id: 'distributor',
    label: 'Distributor',
    badge: 'Distributor Network Multiplier',
    tagline: 'Team override & network volume commissions across your mapped retailer network',
    icon: Users,
    defaultCount: 5,
    scope: '15 – 30 Active Retailers',
    model: 'Retailer Network Overrides',
    avgVolume: '100 – 250 Txns / Day',
    highlight: 'Earn passive override margins on every single transaction processed across your onboarded retailer fleet.'
  },
  {
    id: 'franchise',
    label: 'Franchise',
    badge: 'Exclusive Block / Pin-Code Hub',
    tagline: 'Territory master margins, walk-in counter footfall, and sub-agent supervision pool',
    icon: Building2,
    defaultCount: 10,
    scope: 'Pin-Code / Block Hub',
    model: 'Hub Master Margin + Counter Pool',
    avgVolume: '250 – 500 Txns / Day',
    highlight: 'Full exclusivity in your assigned pin-code with prioritized distributor payouts and higher operational margins.'
  },
  {
    id: 'district-franchise',
    label: 'District Franchise',
    badge: 'District Master Royalty Pool',
    tagline: 'District-wide transaction royalties across all sub-distributors and village retail points',
    icon: MapPin,
    defaultCount: 20,
    scope: 'Entire District Coverage',
    model: 'District Master Slab & Royalties',
    avgVolume: '600 – 1,200 Txns / Day',
    highlight: 'Top-tier district leadership revenue with override margins on all banking & utility services throughout your district.'
  },
  {
    id: 'reseller-partner',
    label: 'Reseller Partner',
    badge: 'Reseller Channel Fleet',
    tagline: 'Multi-tier merchant onboarding and cumulative volume margins across your channel fleet',
    icon: Share2,
    defaultCount: 15,
    scope: 'Multi-Tier Partner Network',
    model: 'Resale Margin & Merchant Spread',
    avgVolume: '400 – 800 Txns / Day',
    highlight: 'Build and manage your custom merchant hierarchy with flexible commission distribution slabs and team incentives.'
  },
  {
    id: 'b2b-partner',
    label: 'B2B Partner',
    badge: 'Enterprise Corporate Slab',
    tagline: 'High-volume corporate DMT, enterprise disbursements, and bulk commercial billing',
    icon: Briefcase,
    defaultCount: 25,
    scope: 'Corporate & Institutional Clients',
    model: 'Bulk Enterprise Corporate Spread',
    avgVolume: '1,000 – 2,500 Txns / Day',
    highlight: 'Engineered for enterprise fintech entities processing heavy B2B transactions with dedicated ledger APIs.'
  },
  {
    id: 'white-label-partner',
    label: 'White Label Partner',
    badge: 'Proprietary Brand Fintech Portal',
    tagline: 'Custom branded fintech portal revenue, master administrative margin, and franchise licenses',
    icon: Layers,
    defaultCount: 35,
    scope: 'Custom Domain & Branded Platform',
    model: 'Platform Royalty + Admin Spread',
    avgVolume: '2,000 – 5,000 Txns / Day',
    highlight: 'Launch under your own domain and brand name with 100% control over retailer commissions and customer pricing.'
  },
  {
    id: 'api-partner',
    label: 'API Partner',
    badge: 'Server-to-Server High TPS Switch',
    tagline: 'Direct switch integration, sub-second routing rebates, and high-frequency volume slabs',
    icon: Cpu,
    defaultCount: 50,
    scope: 'High TPS Server-to-Server Switch',
    model: 'Sub-Second Switch Rebate & High TPS Slab',
    avgVolume: '5,000 – 15,000+ API Calls / Day',
    highlight: 'Ultra-low latency REST APIs with automated switch failover and direct bank settlement routes.'
  }
];

export const calculatorCategories = [
  {
    category: "Banking Services",
    items: [
      { id: "aeps", name: "AEPS Services", rate: 10, defaultCount: 1 },
      { id: "cashDeposit", name: "Cash Deposit", rate: 10, defaultCount: 1 },
      { id: "aadhaarPay", name: "Aadhaar Pay", rate: 10, defaultCount: 1 },
      { id: "mposAtm", name: "M-POS/ATM", rate: 10, defaultCount: 1 },
      { id: "bbpsDmt", name: "BBPS DMT", rate: 10, defaultCount: 1 },
    ]
  },
  {
    category: "Utility Services",
    items: [
      { id: "billPayment", name: "Bill Payment", rate: 10, defaultCount: 1 },
      { id: "recharge", name: "Recharge", rate: 3, defaultCount: 1 },
      { id: "licPayment", name: "LIC Payment", rate: 10, defaultCount: 1 },
      { id: "cmsAirtel", name: "CMS Airtel", rate: 100, defaultCount: 1 },
      { id: "airtelMitra", name: "Airtel Mitra", rate: 100, defaultCount: 1 },
    ]
  },
  {
    category: "Travel Services",
    items: [
      { id: "trainBooking", name: "Train Booking", rate: 40, defaultCount: 1 },
      { id: "busBooking", name: "Bus Booking", rate: 30, defaultCount: 1 },
      { id: "flightBooking", name: "Flight Booking", rate: 100, defaultCount: 1 },
      { id: "hotelBooking", name: "Hotel Booking", rate: 100, defaultCount: 1 },
    ]
  },
  {
    category: "Insurance & Loan",
    items: [
      { id: "insurance", name: "Insurance", rate: 150, defaultCount: 1 },
      { id: "loanApply", name: "Loan Apply", rate: 500, defaultCount: 1 },
    ]
  },
  {
    category: "Government Services",
    items: [
      { id: "nsdlPanCard", name: "NSDL PAN Card", rate: 10, defaultCount: 1 },
      { id: "itrRegistration", name: "ITR Registration", rate: 150, defaultCount: 1 },
      { id: "gstRegistration", name: "GST Registration", rate: 50, defaultCount: 1 },
      { id: "msmeRegistration", name: "MSME Registration", rate: 50, defaultCount: 1 },
      { id: "udyamRegistration", name: "Udyam Registration", rate: 50, defaultCount: 1 },
    ]
  },
  {
    category: "Account Services",
    items: [
      { id: "nsdlAccount", name: "NSDL Account Opening", rate: 35, defaultCount: 1 },
      { id: "bankAccount", name: "Bank Account Opening", rate: 150, defaultCount: 1 },
      { id: "somtcCard", name: "SOMTC Card Apply", rate: 250, defaultCount: 1 },
      { id: "creditCard", name: "Credit Card Apply", rate: 350, defaultCount: 1 },
    ]
  },
  {
    category: "Seller & Delivery",
    items: [
      { id: "flipkartSeller", name: "Flipkart Seller Apply", rate: 250, defaultCount: 1 },
      { id: "amazonSeller", name: "Amazon Seller Apply", rate: 250, defaultCount: 1 },
      { id: "ondcSeller", name: "ONDC Seller Apply", rate: 250, defaultCount: 1 },
      { id: "flipkartDelivery", name: "Flipkart Delivery Job Apply", rate: 20, defaultCount: 1 },
      { id: "shoppingServices", name: "Shopping Services", rate: 10, defaultCount: 1 },
    ]
  }
];

export default function IncomeCalculatorPage({ onOpenJoin }) {
  const [activeRole, setActiveRole] = useState('retailer');

  // Initialize role-specific counts with distinct default scale
  const [roleCounts, setRoleCounts] = useState(() => {
    const init = {};
    PARTNER_ROLES.forEach((role) => {
      init[role.id] = {};
      calculatorCategories.forEach((cat) => {
        cat.items.forEach((item) => {
          init[role.id][item.id] = role.defaultCount;
        });
      });
    });
    return init;
  });

  const [animatePop, setAnimatePop] = useState(false);

  const currentRole = useMemo(() => {
    return PARTNER_ROLES.find((r) => r.id === activeRole) || PARTNER_ROLES[0];
  }, [activeRole]);

  const CurrentRoleIcon = currentRole.icon;
  const currentCounts = roleCounts[activeRole] || {};

  const handleCountChange = (id, val) => {
    const num = Math.max(0, parseInt(val) || 0);
    setRoleCounts((prev) => ({
      ...prev,
      [activeRole]: {
        ...prev[activeRole],
        [id]: num
      }
    }));
  };

  const handleResetRole = () => {
    setRoleCounts((prev) => {
      const reset = {};
      calculatorCategories.forEach((cat) => {
        cat.items.forEach((item) => {
          reset[item.id] = currentRole.defaultCount;
        });
      });
      return {
        ...prev,
        [activeRole]: reset
      };
    });
  };

  // Calculate totals
  const incomePerDay = useMemo(() => {
    let total = 0;
    calculatorCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        const qty = currentCounts[item.id] !== undefined ? currentCounts[item.id] : currentRole.defaultCount;
        total += qty * item.rate;
      });
    });
    return total;
  }, [currentCounts, currentRole]);

  const totalMonthlyIncome = incomePerDay * 30;
  const totalYearlyIncome = totalMonthlyIncome * 12;

  // Trigger bounce animation whenever income changes
  useEffect(() => {
    setAnimatePop(true);
    const timer = setTimeout(() => setAnimatePop(false), 350);
    return () => clearTimeout(timer);
  }, [incomePerDay]);

  return (
    <div className="income-calc-page">
      {/* Blue Hero Banner */}
      <section className="income-calc-banner">
        <div className="income-calc-banner-content">
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '5px 16px', 
            borderRadius: '100px', 
            background: 'rgba(201, 162, 39, 0.15)', 
            border: '1px solid #C9A227',
            color: '#fef08a',
            fontSize: '13px',
            fontWeight: 800,
            marginBottom: '14px'
          }}>
            <Sparkles size={14} color="#C9A227" />
            <span>{currentRole.badge}</span>
          </div>

          <h1 style={{
            fontFamily: "'Cera Pro', sans-serif",
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 10px 0',
            letterSpacing: '-0.5px'
          }}>
            {currentRole.label} Income Calculator
          </h1>

          <p style={{
            fontSize: '16px',
            color: '#e2e8f0',
            margin: '0 auto',
            maxWidth: '750px',
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            {currentRole.tagline}
          </p>

          {/* Horizontal Partner Role Pills Bar */}
          <div className="calc-role-tab-bar-wrap">
            <div className="calc-role-tab-bar" role="tablist" aria-label="Partner Roles">
              {PARTNER_ROLES.map((role) => {
                const isActive = activeRole === role.id;
                const RoleIcon = role.icon;
                return (
                  <button
                    key={role.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveRole(role.id)}
                    className={`calc-role-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <RoleIcon size={16} />
                    <span>{role.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Calculator Content */}
      <div className="container--responsive" style={{ maxWidth: '1200px', margin: '40px auto 0', padding: '0 16px' }}>
        
        {/* Role Information Card */}
        <div className="calc-role-info-card">
          <div className="calc-role-info-left">
            <div className="calc-role-avatar">
              <CurrentRoleIcon size={24} />
            </div>
            <div>
              <div className="calc-role-title-row">
                <h2 className="calc-role-heading">{currentRole.label} Earning Potential</h2>
                <span className="calc-role-tag">{currentRole.scope}</span>
              </div>
              <p className="calc-role-desc">{currentRole.highlight}</p>
            </div>
          </div>

          <div className="calc-role-stats-pills">
            <div className="calc-role-stat-chip">
              <span className="calc-role-stat-label">Revenue Model</span>
              <span className="calc-role-stat-val">{currentRole.model}</span>
            </div>
            <div className="calc-role-stat-chip">
              <span className="calc-role-stat-label">Typical Daily Scale</span>
              <span className="calc-role-stat-val">{currentRole.avgVolume}</span>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 340px',
          gap: '32px',
          alignItems: 'start'
        }} className="calc-layout-grid">
          
          {/* Left Column: Categorized Services List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {calculatorCategories.map((cat, catIdx) => (
              <div 
                key={catIdx}
                className="calc-category-card"
                style={{ animationDelay: `${(catIdx + 1) * 0.08}s` }}
              >
                <h3 className="calc-cat-title">
                  <Calculator size={18} color="#C9A227" />
                  {cat.category}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cat.items.map((item) => (
                    <div 
                      key={item.id}
                      className="calc-item-row"
                    >
                      <div className="calc-item-name">
                        {item.name}{' '}
                        <span className="calc-item-rate">
                          ₹{item.rate}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>txns/day</span>
                        <input 
                          type="number"
                          min="0"
                          max="99999"
                          value={currentCounts[item.id] !== undefined ? currentCounts[item.id] : currentRole.defaultCount}
                          onChange={(e) => handleCountChange(item.id, e.target.value)}
                          className="calc-number-input"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Income Summary Card */}
          <div style={{ position: 'sticky', top: '100px' }} className="calc-summary-sticky">
            <div className="calc-summary-card">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '12px' }}>
                <h3 className="calc-summary-title">
                  <Calculator size={20} color="#C9A227" />
                  Income Summary
                </h3>
                <span style={{
                  background: 'rgba(201, 162, 39, 0.22)',
                  border: '1px solid #C9A227',
                  color: '#fef08a',
                  fontSize: '11px',
                  fontWeight: 800,
                  padding: '3px 10px',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {currentRole.label}
                </span>
              </div>

              {/* Partner Role Spec Highlights */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '12px',
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                fontSize: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                  <span>Tier Scope:</span>
                  <strong style={{ color: '#ffffff' }}>{currentRole.scope}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1' }}>
                  <span>Revenue Model:</span>
                  <strong style={{ color: '#FEE78A' }}>{currentRole.model}</strong>
                </div>
              </div>

              {/* White Box: Income Per Day */}
              <div className="calc-daily-box">
                <span style={{ color: '#334155', fontSize: '14.5px', fontWeight: 700 }}>
                  Income Per Day
                </span>
                <span 
                  className={`calc-amount ${animatePop ? 'calc-amount-pop' : ''}`}
                  style={{ color: '#0f172a', fontSize: '20px', fontWeight: 800 }}
                >
                  ₹{incomePerDay.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Orange Box: Total Income / Month */}
              <div className="calc-monthly-box">
                <span style={{ color: '#ffffff', fontSize: '14.5px', fontWeight: 700 }}>
                  Total Income / Month
                </span>
                <span 
                  className={`calc-amount ${animatePop ? 'calc-amount-pop' : ''}`}
                  style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800 }}
                >
                  ₹{totalMonthlyIncome.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Annual Run-rate box */}
              <div style={{
                background: 'rgba(201, 162, 39, 0.15)',
                border: '1px solid rgba(201, 162, 39, 0.35)',
                borderRadius: '12px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: '#fef08a', fontSize: '12.5px', fontWeight: 700 }}>
                  Annual Projection
                </span>
                <span style={{ color: '#ffffff', fontSize: '16px', fontWeight: 800 }}>
                  ₹{totalYearlyIncome.toLocaleString('en-IN')}
                </span>
              </div>

              <p style={{
                fontSize: '11.5px',
                color: 'rgba(255, 255, 255, 0.75)',
                margin: '0',
                textAlign: 'center',
                lineHeight: 1.4
              }}>
                * Monthly income calculated on 30 working days based on {currentRole.label} volume.
              </p>

              {/* Apply Now Button with dynamic role name */}
              <button
                type="button"
                onClick={() => {
                  if (typeof onOpenJoin === 'function') onOpenJoin(currentRole.label);
                }}
                className="calc-apply-btn"
              >
                <span>Apply as {currentRole.label}</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={handleResetRole}
                className="calc-reset-btn"
              >
                <RefreshCw size={13} />
                <span>Reset {currentRole.label} Volume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
