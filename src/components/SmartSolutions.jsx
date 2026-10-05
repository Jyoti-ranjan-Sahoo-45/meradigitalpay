import React, { useState, useEffect } from 'react';
import { 
  Store, 
  Layers, 
  Network, 
  Building2, 
  Sparkles, 
  Briefcase, 
  Tag, 
  Code2, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  CreditCard, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  TrendingUp,
  Award,
  Globe,
  Smartphone,
  Server,
  Percent,
  Check,
  X,
  ExternalLink
} from 'lucide-react';

import retailer from "./../assets/retailer-partner.jpeg";
import distributer from "./../assets/distributer-partner.jpeg";
import selfhelp from "./../assets/franchise-partner.jpeg";
import districtFranchise from "./../assets/district-franchise.jpeg";
import customerImg from "./../assets/customer-solution.jpeg";
import resellerImg from "./../assets/reseller-partner.jpeg";
import b2bImg from "./../assets/b2b-partner.jpeg";
import whiteLabelImg from "./../assets/white-label-partner.jpeg";
import apiImg from "./../assets/api-partner.jpeg";

export default function SmartSolutions({ onOpenIncomeCalc, onOpenJoin }) {
  const [selectedTier, setSelectedTier] = useState(null);

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedTier) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTier]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedTier(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const solutions = [
    {
      id: 'customer',
      tierNumber: 'Tier 01',
      category: 'Individual Consumer & Household Rewards',
      title: 'Customer',
      highlightChip: '100% Free • No Investment',
      chipColor: 'green',
      image: customerImg,
      badgeText: '100% Free Registration',
      badgeColor: 'green',
      summary: 'Sign up for free in seconds. Recharge mobiles, pay utility bills, renew insurance policies, and help friends and family with payments to earn direct commissions and cashback to your wallet.',
      highlights: [
        '100% free registration with no joining fee or investment',
        'Instant cashback on mobile recharges & household utility bills',
        'No shop or downline required — earn for yourself & family'
      ],
      isCustomer: true
    },
    {
      id: 'retailer',
      tierNumber: 'Tier 02',
      category: 'Retail Banking & Digital Services',
      title: 'Retailer',
      highlightChip: 'Zero Joining Fee • High Commissions',
      chipColor: '',
      image: retailer,
      badgeText: 'No Shop Capital Required',
      badgeColor: 'green',
      summary: 'Empower your shop with Mera Digital Pay’s banking, payment, and financial services. Attract more local walk-in customers, offer convenient digital solutions, and create recurring earning opportunities for your business.',
      highlights: [
        'Access across 900+ districts in India',
        'AEPS, DMT, Micro ATM, Bill Payments & PAN Cards',
        'Earn attractive commissions with zero inventory needed'
      ],
      isCustomer: false
    },
    {
      id: 'distributor',
      tierNumber: 'Tier 03',
      category: 'Distribution & Retailer Network Expansion',
      title: 'Distributor',
      highlightChip: 'Zero-Interest EMI Available',
      chipColor: 'gold',
      image: distributer,
      badgeText: '0% EMI Option on Joining',
      badgeColor: 'gold',
      summary: 'Build and manage your own profitable network of local retailers. Expand digital banking and payment services across neighborhood shops while earning continuous overrides on every downline transaction.',
      highlights: [
        'Onboard unlimited retailers under your network',
        'Dedicated distributor monitoring dashboard',
        '0% Interest EMI options (₹60,000 / ₹30,000 plans)'
      ],
      isCustomer: false
    },
    {
      id: 'franchise',
      tierNumber: 'Tier 04',
      category: 'Territory Leadership & Exclusive Franchise',
      title: 'Franchise Partner',
      highlightChip: 'Multi-Tier Network Model',
      chipColor: '',
      image: selfhelp,
      badgeText: 'Territory Leadership',
      badgeColor: 'blue',
      summary: 'Take leadership of your designated territory and scale a multi-tier distribution network. Onboard regional distributors, mentor retailers, and build a lasting, high-yield digital infrastructure.',
      highlights: [
        'Multi-tier commission override from all regional volume',
        'Territory leadership and master franchise protections',
        'Centralized team management and enterprise CRM tools'
      ],
      isCustomer: false
    },
    {
      id: 'district',
      tierNumber: 'Tier 05',
      category: 'District Headquarters & Comprehensive Expansion',
      title: 'District Franchise Partner',
      highlightChip: 'District Lead Opportunity',
      chipColor: 'purple',
      image: districtFranchise,
      badgeText: 'District Head Authority',
      badgeColor: 'purple',
      summary: 'Lead your district and build an expansive business ecosystem. Onboard Franchise Partners, Distributors, Retailers, and Customers across urban and rural markets under a unified district-level leadership.',
      highlights: [
        'Highest-tier district commission override structure',
        'Full district network chain: Franchise → Distributors → Retailers → Customers',
        'Central district admin panel for KYC and merchant approvals'
      ],
      isCustomer: false
    },
    {
      id: 'reseller',
      tierNumber: 'Tier 06',
      category: 'Branded Tech & Reseller Solution',
      title: 'Reseller Partner',
      highlightChip: '250+ API Integrations',
      chipColor: '',
      image: resellerImg,
      badgeText: 'Your Own Android App',
      badgeColor: 'blue',
      summary: 'Your Brand. Your App. Your Digital Business. Get your own customized Android application, powerful 250+ API integrations, and secure Admin/User Panels with your approved business name and logo.',
      highlights: [
        'Custom Android mobile app published to Google Play Store',
        'Access to up to 250+ digital & financial service APIs',
        'Central Admin Panel to control commissions and downlines'
      ],
      isCustomer: false
    },
    {
      id: 'b2b',
      tierNumber: 'Tier 07',
      category: 'Enterprise B2B Platform & Operations',
      title: 'B2B Partner',
      highlightChip: 'Enterprise High Volume',
      chipColor: '',
      image: b2bImg,
      badgeText: 'B2B Operations Hub',
      badgeColor: 'blue',
      summary: 'Start and grow your digital services business with an enterprise B2B platform. High-volume API routing, dedicated Admin/User Panels, and robust liquidity management under your company brand.',
      highlights: [
        'High-concurrency API gateway and automated routing',
        'Granular role-based user management and settlement tools',
        'Custom pricing models and dynamic commission rules'
      ],
      isCustomer: false
    },
    {
      id: 'whitelabel',
      tierNumber: 'Tier 08',
      category: '100% White Label Tech & Turnkey Ecosystem',
      title: 'White Label Partner',
      highlightChip: 'Own Domain & Custom Branding',
      chipColor: '',
      image: whiteLabelImg,
      badgeText: 'Your Own Domain & App',
      badgeColor: 'blue',
      summary: 'Launch your turnkey digital fintech platform on your own custom domain name. Includes a fully branded website, native Android mobile app, and centralized Admin and User portals.',
      highlights: [
        'Custom web portal deployed on your own domain',
        'White-labeled Android app with Play Store assistance',
        'Retain 100% brand equity while leveraging our fintech rails'
      ],
      isCustomer: false
    },
    {
      id: 'api',
      tierNumber: 'Tier 09',
      category: 'Developer & Fintech API Ecosystem',
      title: 'API PARTNER',
      highlightChip: '200+ API Possibilities • 0% EMI',
      chipColor: 'gold',
      image: apiImg,
      badgeText: '200+ REST APIs',
      badgeColor: 'gold',
      summary: 'Powerful APIs. Multiple Services. One Trusted Partner. Seamlessly integrate 200+ banking, AEPS, payout, verification, utility, and insurance APIs into your existing or newly developed platform.',
      highlights: [
        '200+ REST APIs with sandbox testing and webhook support',
        'Banking, Verification, DMT, BBPS, CMS & Insurance suites',
        'Flexible 0% interest EMI options on API packages'
      ],
      isCustomer: false
    }
  ];

  return (
    <section className="smart-solutions-section" id="distributors-program">
      <div className="container--responsive">
        
        {/* Section Header */}
        <div className="smart-solutions-header">
          <div className="smart-solutions-pill">
            <Sparkles size={16} className="text-blue-600" />
            <span>Comprehensive Digital Ecosystem</span>
          </div>
          <h2 className="smart-solutions-main-title">
            Smart Solutions for Everyone
          </h2>
          <p className="smart-solutions-subtitle">
            Explore our complete suite of purpose-built business and consumer models. From retail store empowerment to district-level leadership, custom tech platforms, and individual consumer savings — all available on one trusted ecosystem.
          </p>
        </div>

        {/* All Solution Summary Cards Stream */}
        <div className="smart-solutions-stream">
          {solutions.map((item) => (
            <div className={`smart-card-item tier-${item.id}`} id={`tier-${item.id}`} key={item.id}>
              <div className="smart-card-header-bar">
                <div className="tier-counter-badge">
                  <Sparkles size={15} />
                  <span>{item.tierNumber} • {item.category}</span>
                </div>
                <span className={`tier-highlight-chip ${item.chipColor}`}>{item.highlightChip}</span>
              </div>

              <div className="smart-card-body-grid">
                {/* Left Media Column */}
                <div className="smart-card-media-col">
                  <div className="smart-card-img-wrap">
                    <img src={item.image} alt={`${item.title} Solution`} />
                    <div className={`smart-card-floating-badge ${item.badgeColor}`}>
                      <CheckCircle2 size={15} />
                      <span>{item.badgeText}</span>
                    </div>
                  </div>
                </div>

                {/* Right Summary Content & Side-by-Side Actions */}
                <div className="smart-card-content-col">
                  <h3 className="smart-card-title">{item.title}</h3>
                  <h4 className="smart-card-tagline">{item.summary}</h4>

                  <div className="smart-summary-highlights-box">
                    <span className="summary-highlights-title">Key Highlights:</span>
                    <ul className="summary-highlights-list">
                      {item.highlights.map((h, idx) => (
                        <li key={idx}>
                          <Check size={14} className="text-green-600" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Side-by-Side Action Buttons Row */}
                  <div className="smart-card-side-actions">
                    {!item.isCustomer ? (
                      <>
                        <button 
                          className="smart-btn primary"
                          onClick={() => { if (typeof onOpenJoin === 'function') onOpenJoin(); }}
                        >
                          Book a Demo
                        </button>
                        <button 
                          className="smart-btn outline"
                          onClick={() => { if (typeof onOpenIncomeCalc === 'function') onOpenIncomeCalc(); }}
                        >
                          Income Calculator
                        </button>
                        <a 
                          href="https://www.meradigitalpay.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="smart-btn secondary"
                        >
                          Apply Now
                        </a>
                      </>
                    ) : (
                      <>
                        <a 
                          href="https://www.meradigitalpay.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="smart-btn primary"
                        >
                          Register Free
                        </a>
                        <button 
                          className="smart-btn outline"
                          onClick={() => { if (typeof onOpenIncomeCalc === 'function') onOpenIncomeCalc(); }}
                        >
                          Calculate Savings
                        </button>
                      </>
                    )}

                    {/* View Full Details Modal Trigger Button */}
                    <button 
                      type="button"
                      onClick={() => setSelectedTier(item.id)}
                      className="smart-open-modal-btn"
                    >
                      <span>View Full Details & Features</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
         FULL DETAILS POPUP MODAL (100% COMPLETE TEXT PRESERVED)
         ════════════════════════════════════════════════════════════════ */}
      {selectedTier && (
        <div className="smart-modal-overlay" onClick={() => setSelectedTier(null)}>
          <div 
            className="smart-modal-container"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="smart-modal-header">
              <div className="smart-modal-title-group">
                <span className="smart-modal-tier-badge">
                  {solutions.find(s => s.id === selectedTier)?.tierNumber} • {solutions.find(s => s.id === selectedTier)?.category}
                </span>
                <h3 className="smart-modal-heading">
                  {solutions.find(s => s.id === selectedTier)?.title}
                </h3>
              </div>
              <button 
                className="smart-modal-close-btn"
                onClick={() => setSelectedTier(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="smart-modal-body">

              {/* ── 1. RETAILER MODAL ── */}
              {selectedTier === 'retailer' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={retailer} alt="Retailer Solution" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Empower your business with Mera Digital Pay’s digital banking, payment and financial services. Attract more customers, offer convenient digital solutions and create additional earning opportunities for your shop—all through one platform.
                      </h4>
                      <div className="smart-callout-box blue">
                        <Zap size={20} className="callout-icon" />
                        <div>
                          <strong>Zero Joining Fee. Attractive Commissions. Unlimited Customer Connections.</strong>
                          <p>Grow your customer base, strengthen your local presence and earn recurring commissions on eligible transactions. No physical product inventory required for digital services.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-content-subheading">Retail Categories:</div>
                  <div className="smart-tags-grid">
                    {[
                      'Kirana & General Stores',
                      'Medical & Pharmacy Stores',
                      'Apparel & Clothing Shops',
                      'Mobile Recharge Centers',
                      'Hardware Stores',
                      'Restaurants & Food Outlets',
                      'Fertilizer & Agricultural Stores',
                      'Tailoring Shops',
                      'Insurance Agencies',
                      'Travel Agencies & More'
                    ].map((cat, i) => (
                      <span key={i} className="smart-tag-item">
                        <CheckCircle2 size={14} className="tag-icon" />
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <CreditCard size={18} className="text-blue-600" />
                        <h5>Key Offerings for Retailers</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Access across 900+ districts in India</li>
                        <li><Check size={14} className="text-green-600" /> Trusted by millions of consumers nationwide</li>
                        <li><Check size={14} className="text-green-600" /> Comprehensive services on one unified platform</li>
                        <li><Check size={14} className="text-green-600" /> Reliable digital technology with high uptime</li>
                        <li><Check size={14} className="text-green-600" /> Dedicated support for smooth daily operations</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <ShieldCheck size={18} className="text-blue-600" />
                        <h5>Comprehensive Digital Services</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> <strong>Banking & Money Transfer:</strong> AEPS, Micro ATM, Domestic Money Transfer, Savings Account Opening, UPI QR payments</li>
                        <li><Check size={14} className="text-green-600" /> <strong>Utility & Bill Payments:</strong> Mobile, DTH, Fastag recharge, Electricity, Water, Gas & Municipal bills</li>
                        <li><Check size={14} className="text-green-600" /> <strong>Credit & Insurance:</strong> Micro-loans, Gold loans, Two-wheeler & Commercial insurance</li>
                        <li><Check size={14} className="text-green-600" /> <strong>Travel & Government:</strong> IRCTC tickets, Bus/Flight booking, PAN Card, Digital Signature</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ── 2. DISTRIBUTOR MODAL ── */}
              {selectedTier === 'distributor' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={distributer} alt="Distributor Solution" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Build and manage your own network of retailers with Mera Digital Pay. Help local shop owners offer digital banking, payment, and financial services in their neighborhoods while expanding your business reach.
                      </h4>
                      <div className="smart-network-breadcrumb">
                        <span className="network-title">Network Flow:</span>
                        <div className="network-flow-nodes">
                          <span className="flow-node">Distributor</span>
                          <span className="flow-arrow">→</span>
                          <span className="flow-node">Retailer Network</span>
                          <span className="flow-arrow">→</span>
                          <span className="flow-node">End Customers</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <TrendingUp size={18} className="text-blue-600" />
                        <h5>Who Can Become a Distributor?</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Retailers looking to expand business into distribution</li>
                        <li><Check size={14} className="text-green-600" /> FMCG, Telecom & Hardware Distributors</li>
                        <li><Check size={14} className="text-green-600" /> Digital Service Providers & CSC Center Operators</li>
                        <li><Check size={14} className="text-green-600" /> Sales & Marketing Professionals with merchant relationships</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Award size={18} className="text-blue-600" />
                        <h5>Key Advantages</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Onboard unlimited retailers under your code</li>
                        <li><Check size={14} className="text-green-600" /> Dedicated distributor dashboard for real-time tracking</li>
                        <li><Check size={14} className="text-green-600" /> Earn commissions on every retailer transaction</li>
                        <li><Check size={14} className="text-green-600" /> Full technical training and marketing collaterals</li>
                      </ul>
                    </div>
                  </div>

                  {/* 0% EMI Breakdown Card */}
                  <div className="smart-emi-box">
                    <div className="emi-box-title">
                      <CreditCard size={18} className="text-amber-600" />
                      <span>0% Interest EMI Options for Distributors</span>
                    </div>
                    <div className="emi-box-grid">
                      <div className="emi-box-cell">
                        <div className="emi-cell-head">Example 1: Total Fee ₹60,000</div>
                        <div className="emi-cell-row"><span>Down Payment:</span> <span>₹20,000</span></div>
                        <div className="emi-cell-row"><span>Remaining Balance:</span> <span>₹40,000</span></div>
                        <div className="emi-cell-row highlight"><span>Monthly EMI:</span> <span>₹10,000 / month (4 Months)</span></div>
                      </div>
                      <div className="emi-box-cell">
                        <div className="emi-cell-head">Example 2: Total Fee ₹30,000</div>
                        <div className="emi-cell-row"><span>Down Payment:</span> <span>₹10,000</span></div>
                        <div className="emi-cell-row"><span>Remaining Balance:</span> <span>₹20,000</span></div>
                        <div className="emi-cell-row highlight"><span>Monthly EMI:</span> <span>₹10,000 / month (2 Months)</span></div>
                      </div>
                    </div>
                    <p className="emi-box-footer">*EMI options subject to plan terms and eligibility criteria.</p>
                  </div>
                </div>
              )}

              {/* ── 3. FRANCHISE PARTNER MODAL ── */}
              {selectedTier === 'franchise' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={selfhelp} alt="Franchise Partner Solution" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Take leadership of your territory and scale a multi-tier distribution network. Partner with Mera Digital Pay to onboard distributors, expand retailers, and provide fintech infrastructure to your local economy.
                      </h4>
                      <div className="smart-network-breadcrumb">
                        <span className="network-title">Network Structure:</span>
                        <div className="network-flow-nodes">
                          <span className="flow-node">Franchise Partner</span>
                          <span className="flow-arrow">→</span>
                          <span className="flow-node">Distributors</span>
                          <span className="flow-arrow">→</span>
                          <span className="flow-node">Retailers</span>
                          <span className="flow-arrow">→</span>
                          <span className="flow-node">Customers</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Building2 size={18} className="text-blue-600" />
                        <h5>Key Responsibilities & Reach</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Manage and mentor distributors across designated regions</li>
                        <li><Check size={14} className="text-green-600" /> Ensure seamless onboarding and compliance for retailers</li>
                        <li><Check size={14} className="text-green-600" /> Drive digital awareness and localized market penetration</li>
                        <li><Check size={14} className="text-green-600" /> Conduct business training and regular network review meetings</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <TrendingUp size={18} className="text-blue-600" />
                        <h5>Earnings & Benefits</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Multi-tier commission override from all downline transactions</li>
                        <li><Check size={14} className="text-green-600" /> Exclusive master franchise territory protections</li>
                        <li><Check size={14} className="text-green-600" /> Advanced management dashboard with granular reporting</li>
                        <li><Check size={14} className="text-green-600" /> Direct corporate relationship manager support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ── 4. DISTRICT FRANCHISE MODAL ── */}
              {selectedTier === 'district' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={districtFranchise} alt="District Franchise Partner" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Lead Your District. Build Your Network. Grow Your Business.
                      </h4>
                      <p className="smart-card-desc">
                        Become a District Franchise Partner with Mera Digital Pay and expand your business across your district. Build your own network of Franchise Partners, Distributors, Retailers, and Customers while expanding digital services across urban and rural markets.
                      </p>
                      <div className="smart-callout-box purple">
                        <Sparkles size={20} className="callout-icon" />
                        <div>
                          <strong>District-Level Business Opportunity | Strong Network | High Commission Earning | Long-Term Growth</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-network-breadcrumb">
                    <span className="network-title">Build Your Own Network Hierarchy:</span>
                    <div className="network-flow-nodes">
                      <span className="flow-node">District Franchise</span>
                      <span className="flow-arrow">→</span>
                      <span className="flow-node">Franchise</span>
                      <span className="flow-arrow">→</span>
                      <span className="flow-node">Distributors</span>
                      <span className="flow-arrow">→</span>
                      <span className="flow-node">Retailers</span>
                      <span className="flow-arrow">→</span>
                      <span className="flow-node">Customers</span>
                    </div>
                  </div>

                  <div className="smart-content-subheading">District Franchise Business Opportunities:</div>
                  <div className="smart-tags-grid">
                    {[
                      'Banking & Digital Services',
                      'Franchise Expansion',
                      'Distributor Onboarding',
                      'Retailer Network Growth',
                      'Customer Acquisition',
                      'Rural & Urban Market Expansion'
                    ].map((opp, i) => (
                      <span key={i} className="smart-tag-item">
                        <CheckCircle2 size={14} className="tag-icon" />
                        {opp}
                      </span>
                    ))}
                  </div>

                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Users size={18} className="text-blue-600" />
                        <h5>Who Can Become a District Partner?</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Business Owners & Established Entrepreneurs</li>
                        <li><Check size={14} className="text-green-600" /> Existing Franchise Partners & Distributors</li>
                        <li><Check size={14} className="text-green-600" /> CSC & Digital Service Center Operators</li>
                        <li><Check size={14} className="text-green-600" /> Banking & Financial Service Professionals</li>
                        <li><Check size={14} className="text-green-600" /> Individuals with strong local business networks</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Award size={18} className="text-blue-600" />
                        <h5>District Head Benefits</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Highest-tier override commissions on whole-district volume</li>
                        <li><Check size={14} className="text-green-600" /> Exclusive district representation rights</li>
                        <li><Check size={14} className="text-green-600" /> Central district admin portal for user and KYC approvals</li>
                        <li><Check size={14} className="text-green-600" /> Priority SLA support and custom localized campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ── 5. RESELLER PARTNER MODAL ── */}
              {selectedTier === 'reseller' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={resellerImg} alt="Reseller Partner" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Your Brand. Your App. Your Digital Business.
                      </h4>
                      <p className="smart-card-desc">
                        Start your own digital services business with Mera Digital Pay. Get your own branded Android application, powerful API integrations, and secure Admin and User Panels customized with your approved business name and logo. Build your own partner network and expand your business through a comprehensive digital services platform.
                      </p>
                      <div className="smart-callout-box blue">
                        <Sparkles size={20} className="callout-icon" />
                        <div>
                          <strong>Your Brand | Your App | Your Network | Your Business</strong>
                          <p>Complete fintech infrastructure delivered with your own brand identity and Google Play Store publishing support.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Server size={18} className="text-blue-600" />
                        <h5>1. Powerful API Integration</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Support for up to 250 API integrations</li>
                        <li><Check size={14} className="text-green-600" /> Dedicated API management panel</li>
                        <li><Check size={14} className="text-green-600" /> Integration of digital and financial services</li>
                        <li><Check size={14} className="text-green-600" /> Real-time transaction monitoring and logs</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Smartphone size={18} className="text-blue-600" />
                        <h5>2. Your Branded Android App</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Custom Android app with your approved business name & logo</li>
                        <li><Check size={14} className="text-green-600" /> Professional and user-friendly mobile dashboard</li>
                        <li><Check size={14} className="text-green-600" /> Google Play Store publishing assistance</li>
                        <li><Check size={14} className="text-green-600" /> Regular app updates and continuous technical maintenance</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <ShieldCheck size={18} className="text-blue-600" />
                        <h5>3. Admin & User Panels</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Full Admin Panel for complete business control</li>
                        <li><Check size={14} className="text-green-600" /> Intuitive User Panel for your registered customers</li>
                        <li><Check size={14} className="text-green-600" /> Dynamic commission structuring and profit margins</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Globe size={18} className="text-blue-600" />
                        <h5>4. Network & Domain Setup</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Connect your own custom domain (e.g. www.yourcompany.com)</li>
                        <li><Check size={14} className="text-green-600" /> Onboard Franchise, Distributors, and Retailers</li>
                        <li><Check size={14} className="text-green-600" /> Comprehensive business analytics and exportable reports</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ── 6. B2B PARTNER MODAL ── */}
              {selectedTier === 'b2b' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={b2bImg} alt="B2B Partner Solution" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Your Business. Your Network. Your Digital Growth.
                      </h4>
                      <p className="smart-card-desc">
                        Start and grow your digital services business with Mera Digital Pay. Get a professional B2B platform with powerful API integration support, a dedicated Admin Panel, and a User Panel customized with your approved business name and logo. Manage operations and expand your brand.
                      </p>
                      <div className="smart-callout-box blue">
                        <Briefcase size={20} className="callout-icon" />
                        <div>
                          <strong>Your Brand | Your Panel | Your Network | Your Business</strong>
                          <p>Designed for organizations seeking institutional-grade processing, high volume capacity, and multi-tier hierarchies.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Server size={18} className="text-blue-600" />
                        <h5>1. API Integration & Routing</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Access supported financial and utility APIs</li>
                        <li><Check size={14} className="text-green-600" /> High concurrency handling and failover switching</li>
                        <li><Check size={14} className="text-green-600" /> Comprehensive transaction logs and dispute management</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <ShieldCheck size={18} className="text-blue-600" />
                        <h5>2. Dedicated B2B Panel</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Customized Admin and User Panels with approved branding</li>
                        <li><Check size={14} className="text-green-600" /> Hierarchy-based permission controls and roles</li>
                        <li><Check size={14} className="text-green-600" /> Real-time liquidity and automated settlement tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ── 7. WHITE LABEL MODAL ── */}
              {selectedTier === 'whitelabel' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={whiteLabelImg} alt="White Label Partner" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Your Brand. Your Website. Your App. Your Digital Business.
                      </h4>
                      <p className="smart-card-desc">
                        Launch your own turnkey digital services business with Mera Digital Pay. Get your own branded website, Admin Panel, User Panel, and Android application customized with your approved business name and logo. Build your own partner network and grow under your own brand identity.
                      </p>
                      <div className="smart-callout-box blue">
                        <Globe size={20} className="callout-icon" />
                        <div>
                          <strong>Your Brand | Your Website | Your App | Your Network</strong>
                          <p>Complete end-to-end turnkey deployment on your own domain with full brand autonomy.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Globe size={18} className="text-blue-600" />
                        <h5>1. Your Branded Website</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Custom website configured on your own domain name</li>
                        <li><Check size={14} className="text-green-600" /> Modern, mobile-responsive UI with your logo</li>
                        <li><Check size={14} className="text-green-600" /> Integrated registration and customer landing pages</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Smartphone size={18} className="text-blue-600" />
                        <h5>2. White Label Android App</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Native Android APK customized with your color scheme & logo</li>
                        <li><Check size={14} className="text-green-600" /> Google Play Store publishing and verification assistance</li>
                        <li><Check size={14} className="text-green-600" /> Regular version updates and security patches</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <ShieldCheck size={18} className="text-blue-600" />
                        <h5>3. Branded Admin & User Hub</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Centralized multi-tier portal for users & transactions</li>
                        <li><Check size={14} className="text-green-600" /> Custom commission distribution algorithms</li>
                        <li><Check size={14} className="text-green-600" /> Real-time liquidity, ledger, and payout reconciliation</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <TrendingUp size={18} className="text-blue-600" />
                        <h5>4. Network & Expansion</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Build unlimited distributor and retailer tiers</li>
                        <li><Check size={14} className="text-green-600" /> Retain 100% brand equity while we provide the backend rails</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ── 8. API PARTNER MODAL ── */}
              {selectedTier === 'api' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={apiImg} alt="API Partner Solution" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Powerful APIs. Multiple Services. One Business Partner.
                      </h4>
                      <p className="smart-card-desc">
                        Expand your digital business with Mera Digital Pay's API solutions. Whether you already operate your own fintech platform or are developing your own system, you can integrate our available APIs into your existing or newly developed infrastructure.
                      </p>
                      <div className="smart-callout-box blue">
                        <Code2 size={20} className="callout-icon" />
                        <div>
                          <strong>200+ API Integration Possibilities | Multiple Services | Flexible EMI Options</strong>
                          <p>High uptime, developer-friendly JSON REST APIs, robust webhooks, sandbox testing, and 24/7 integration assistance.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-content-subheading">API Categories Available:</div>
                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <CreditCard size={18} className="text-blue-600" />
                        <h5>Banking & Account Services</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Bank Account Opening APIs</li>
                        <li><Check size={14} className="text-green-600" /> AEPS & Micro ATM Integration</li>
                        <li><Check size={14} className="text-green-600" /> Aadhaar Pay & Biometric Auth</li>
                        <li><Check size={14} className="text-green-600" /> Bank Account Verification (Pennyless/Penny Drop)</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Zap size={18} className="text-blue-600" />
                        <h5>Digital Payment Services</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Instant Payouts (IMPS/NEFT/RTGS/UPI)</li>
                        <li><Check size={14} className="text-green-600" /> Domestic Money Transfer (DMT)</li>
                        <li><Check size={14} className="text-green-600" /> UPI Cash Withdrawal & Dynamic QR</li>
                        <li><Check size={14} className="text-green-600" /> BBPS (Bharat Bill Payment System) & CMS</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Smartphone size={18} className="text-blue-600" />
                        <h5>Recharge & Utility Services</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Mobile & DTH Recharge APIs</li>
                        <li><Check size={14} className="text-green-600" /> Electricity, Water, Gas Bill Payment APIs</li>
                        <li><Check size={14} className="text-green-600" /> FASTag Recharge & Toll Management</li>
                        <li><Check size={14} className="text-green-600" /> Broadband, Landline & Municipal Dues</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <ShieldCheck size={18} className="text-blue-600" />
                        <h5>Verification & Business Services</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> PAN Card, Aadhaar, Voter ID Verification</li>
                        <li><Check size={14} className="text-green-600" /> Driving License, RC & GST Verification</li>
                        <li><Check size={14} className="text-green-600" /> Credit Score & CIBIL Check APIs</li>
                        <li><Check size={14} className="text-green-600" /> Two-Wheeler, Four-Wheeler & Health Insurance</li>
                      </ul>
                    </div>
                  </div>

                  {/* API 0% EMI Section */}
                  <div className="smart-emi-box">
                    <div className="emi-box-title">
                      <CreditCard size={18} className="text-amber-600" />
                      <span>0% Interest EMI Option on API Packages</span>
                    </div>
                    <div className="emi-box-grid">
                      <div className="emi-box-cell">
                        <div className="emi-cell-head">Example 1: Total Fee ₹60,000</div>
                        <div className="emi-cell-row"><span>Down Payment:</span> <span>₹20,000</span></div>
                        <div className="emi-cell-row"><span>Remaining Balance:</span> <span>₹40,000</span></div>
                        <div className="emi-cell-row highlight"><span>Monthly EMI:</span> <span>₹10,000 / month (4 Months)</span></div>
                      </div>
                      <div className="emi-box-cell">
                        <div className="emi-cell-head">Example 2: Total Fee ₹30,000</div>
                        <div className="emi-cell-row"><span>Down Payment:</span> <span>₹10,000</span></div>
                        <div className="emi-cell-row"><span>Remaining Balance:</span> <span>₹20,000</span></div>
                        <div className="emi-cell-row highlight"><span>Monthly EMI:</span> <span>₹10,000 / month (2 Months)</span></div>
                      </div>
                    </div>
                    <p className="emi-box-footer">*Zero interest EMI options subject to API package eligibility and contract terms.</p>
                  </div>
                </div>
              )}

              {/* ── 9. CUSTOMER MODAL ── */}
              {selectedTier === 'customer' && (
                <div className="modal-tier-content">
                  <div className="modal-intro-row">
                    <img src={customerImg} alt="Customer Solution" className="modal-feature-img" />
                    <div>
                      <h4 className="modal-tagline">
                        Sign Up for Free. Recharge, Pay Bills & Earn Commission.
                      </h4>
                      <p className="smart-card-desc">
                        Anyone can register as a Customer with Mera Digital Pay using their mobile number and email address. Enjoy free registration with no joining fee or investment required. Recharge your mobile, pay bills, renew eligible insurance policies, and help your friends and family with recharges and bill payments to earn commissions on eligible transactions.
                      </p>
                      <div className="smart-callout-box green">
                        <CheckCircle2 size={20} className="callout-icon" />
                        <div>
                          <strong>100% Free Registration | No Joining Fee | No Investment Required</strong>
                          <p>No shop, business setup, or downline network is required. Enjoy cashback & commissions straight to your wallet.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="smart-feature-mini-grid">
                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <Zap size={18} className="text-green-600" />
                        <h5>Services Available for Customers</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Mobile & DTH Recharge with instant activation</li>
                        <li><Check size={14} className="text-green-600" /> Electricity, Water & Piped Gas Bill Payments</li>
                        <li><Check size={14} className="text-green-600" /> Insurance renewals & vehicle policy payments</li>
                        <li><Check size={14} className="text-green-600" /> Broadband, Landline, FASTag & Municipal services</li>
                      </ul>
                    </div>

                    <div className="smart-mini-card">
                      <div className="mini-card-head">
                        <TrendingUp size={18} className="text-green-600" />
                        <h5>Earn Commission on Transactions</h5>
                      </div>
                      <ul className="mini-card-list">
                        <li><Check size={14} className="text-green-600" /> Earn cashback on all personal bill payments & recharges</li>
                        <li><Check size={14} className="text-green-600" /> Help friends and family with payments to earn real money</li>
                        <li><Check size={14} className="text-green-600" /> Instant reward credits to your digital wallet</li>
                        <li><Check size={14} className="text-green-600" /> 100% secure, transparent, and user-friendly experience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer Actions */}
            <div className="smart-modal-footer">
              <div className="modal-footer-btns">
                {selectedTier !== 'customer' ? (
                  <>
                    <button 
                      className="smart-btn primary"
                      onClick={() => { setSelectedTier(null); if (typeof onOpenJoin === 'function') onOpenJoin(); }}
                    >
                      Book a Demo
                    </button>
                    <button 
                      className="smart-btn outline"
                      onClick={() => { setSelectedTier(null); if (typeof onOpenIncomeCalc === 'function') onOpenIncomeCalc(); }}
                    >
                      Income Calculator
                    </button>
                    <a 
                      href="https://www.meradigitalpay.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="smart-btn secondary"
                    >
                      Apply Now <ExternalLink size={14} />
                    </a>
                  </>
                ) : (
                  <>
                    <a 
                      href="https://www.meradigitalpay.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="smart-btn primary"
                    >
                      Register Free
                    </a>
                    <button 
                      className="smart-btn outline"
                      onClick={() => { setSelectedTier(null); if (typeof onOpenIncomeCalc === 'function') onOpenIncomeCalc(); }}
                    >
                      Calculate Savings
                    </button>
                  </>
                )}
                <button 
                  className="smart-btn close-action"
                  onClick={() => setSelectedTier(null)}
                >
                  Close (X)
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
