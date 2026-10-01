import React, { useState, useMemo } from 'react';
import { 
  Search, HelpCircle, ShieldCheck, CreditCard, Landmark, 
  Smartphone, Wallet, PhoneCall, MessageCircle, Mail, 
  ChevronDown, ChevronUp, Download, CheckCircle2, ArrowRight
} from 'lucide-react';
import PartnersSection from '../components/PartnersSection';
import downloadImage from '../assets/download.png';

const faqCategories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle },
  { id: 'general', label: 'Onboarding & Registration', icon: Smartphone },
  { id: 'banking', label: 'AEPS & Cash Withdrawal', icon: Landmark },
  { id: 'dmt', label: 'Money Transfer & BBPS', icon: CreditCard },
  { id: 'matm', label: 'Micro ATM & UPI Cash', icon: Smartphone },
  { id: 'wallet', label: 'Commissions & Settlements', icon: Wallet },
  { id: 'security', label: 'Security & Compliance', icon: ShieldCheck },
  { id: 'support', label: 'Support & Devices', icon: PhoneCall },
];

const allFaqs = [
  // 1. General & Onboarding
  {
    id: 1,
    category: 'general',
    categoryName: 'Onboarding & Registration',
    question: 'What is Mera Digital Pay and how does it empower retailers?',
    answer: 'Mera Digital Pay is India’s leading B2B branchless banking and digital financial services platform. It enables local kirana stores, mobile shops, and retail entrepreneurs to convert their shops into digital banking touchpoints. Retailers offer services like cash withdrawal, money transfer, utility bills, recharges, insurance, and travel bookings to earn high monthly commissions with zero working capital.'
  },
  {
    id: 2,
    category: 'general',
    categoryName: 'Onboarding & Registration',
    question: 'How do I register as a Mera Digital Pay retailer or distributor?',
    answer: 'Registration takes less than 3 minutes. Simply download the Mera Digital Pay app from Google Play Store or visit our portal. Enter your mobile number, verify via OTP, complete instant Aadhaar & PAN eKYC, and your retail account is activated instantly to start transacting.'
  },
  {
    id: 3,
    category: 'general',
    categoryName: 'Onboarding & Registration',
    question: 'What documents are required for digital eKYC activation?',
    answer: 'You only need your valid Aadhaar Card, PAN Card, an active mobile number linked with Aadhaar, and your bank account details/passbook for commission settlements. The eKYC process is 100% paperless and instant.'
  },
  {
    id: 4,
    category: 'general',
    categoryName: 'Onboarding & Registration',
    question: 'Is any working capital or security deposit required to join?',
    answer: 'No heavy working capital is required! Retailers can start offering services with minimal initial funds in their wallet. For AEPS cash withdrawal, you give cash to the customer and the exact amount plus commission is immediately credited to your digital wallet in real time.'
  },
  {
    id: 5,
    category: 'general',
    categoryName: 'Onboarding & Registration',
    question: 'Where can I download the official Mera Digital Pay mobile applications?',
    answer: 'Our official mobile applications including Mera Digital Pay, Mera Digital APS, Digital Partner Pay, Smart Earn Partner, and SMVDK Partner are available directly on the Google Play Store for Android smartphones and tablets.'
  },

  // 2. Banking & AEPS Services
  {
    id: 6,
    category: 'banking',
    categoryName: 'AEPS & Cash Withdrawal',
    question: 'What is AEPS (Aadhaar Enabled Payment System)?',
    answer: 'AEPS is a bank-led model authorized by NPCI that allows Aadhaar cardholders to perform basic financial transactions through biometric fingerprint or iris authentication at any Mera Digital Pay retailer point without needing a debit card or PIN.'
  },
  {
    id: 7,
    category: 'banking',
    categoryName: 'AEPS & Cash Withdrawal',
    question: 'What AEPS banking services can customers perform at my store?',
    answer: 'Customers can perform: 1. Aadhaar Cash Withdrawal (Cash Out), 2. Mini Statement (last 10 transactions with slip/SMS), 3. Balance Enquiry, and 4. Aadhaar Pay (for higher limit merchant payments).'
  },
  {
    id: 8,
    category: 'banking',
    categoryName: 'AEPS & Cash Withdrawal',
    question: 'How does NPCI Aadhaar 2-Factor Authentication (2FA) work?',
    answer: 'As per NPCI regulatory guidelines, every AEPS merchant must complete daily merchant biometric authentication (2FA) once every 24 hours before processing customer transactions. This ensures top-level fraud prevention and security.'
  },
  {
    id: 9,
    category: 'banking',
    categoryName: 'AEPS & Cash Withdrawal',
    question: 'Which biometric fingerprint scanners are compatible with the app?',
    answer: 'Mera Digital Pay works seamlessly with all certified STQC biometric devices including Mantra MFS100 / MFS110, Morpho Safran 1300 E2/E3, Startek FM220U, SecuGen Hamster Pro 20, and Aratek devices via USB OTG or Bluetooth.'
  },

  // 3. Money Transfer & BBPS
  {
    id: 10,
    category: 'dmt',
    categoryName: 'Money Transfer & BBPS',
    question: 'What is Domestic Money Transfer (DMT) and how fast are transfers?',
    answer: 'DMT allows anyone to send money directly to any bank account across India 24/7/365, even on Sundays and bank holidays. Transfers are processed instantly via IMPS switch within seconds, and SMS notifications are sent to both sender and receiver.'
  },
  {
    id: 11,
    category: 'dmt',
    categoryName: 'Money Transfer & BBPS',
    question: 'What utility bills can be paid using Bharat Bill Payment System (BBPS)?',
    answer: 'You can collect payments for 100+ categories: Electricity, Water, Piped Gas, LPG Cylinder, Mobile Postpaid, Broadband, DTH, Fastag Recharges, Loan EMI Repayments, Insurance Premiums, Municipal Taxes, and Credit Card bills.'
  },
  {
    id: 12,
    category: 'dmt',
    categoryName: 'Money Transfer & BBPS',
    question: 'Are mobile and DTH recharges processed instantly?',
    answer: 'Yes! Mobile recharges (Jio, Airtel, Vi, BSNL) and DTH recharges (Tata Play, Airtel DTH, Dish TV, Sun Direct, D2H) are processed in real time with automated operator bill fetch and highest instant margins.'
  },

  // 4. Micro ATM & UPI Cash
  {
    id: 13,
    category: 'matm',
    categoryName: 'Micro ATM & UPI Cash',
    question: 'How does the Mera Digital Pay Micro-ATM (mPOS) device work?',
    answer: 'The Micro-ATM is a portable handheld device that connects to your smartphone via Bluetooth. It accepts all domestic Debit/ATM cards (RuPay, Visa, MasterCard, Maestro) for Cash Withdrawal and Balance Enquiry with instant slip generation and real-time wallet settlement.'
  },
  {
    id: 14,
    category: 'matm',
    categoryName: 'Micro ATM & UPI Cash',
    question: 'What is UPI Cash Point and how can customers withdraw cash without cards?',
    answer: 'UPI Cash Point allows customers to withdraw cash by scanning a dynamic QR code on the retailer’s phone using Google Pay, PhonePe, Paytm, BHIM, or any banking UPI app. Once the UPI payment succeeds, the retailer hands over the cash.'
  },

  // 5. Wallet, Commission & Settlement
  {
    id: 15,
    category: 'wallet',
    categoryName: 'Commissions & Settlements',
    question: 'How and when are retailer commissions credited?',
    answer: 'Commissions are credited automatically in real time to your Mera Digital Pay wallet on every successful transaction. There is zero delay, and you can view live commission breakdowns in the transaction passbook.'
  },
  {
    id: 16,
    category: 'wallet',
    categoryName: 'Commissions & Settlements',
    question: 'How does "Move to Bank" (Wallet Settlement) work?',
    answer: 'You can transfer your wallet balance to your registered bank account at any time (24/7/365) with single-click IMPS settlement. Funds reach your bank account within 5 to 10 seconds.'
  },
  {
    id: 17,
    category: 'wallet',
    categoryName: 'Commissions & Settlements',
    question: 'How much can a retailer or distributor earn monthly?',
    answer: 'An active retailer offering AEPS, DMT, Bill Payments, Recharges, and CMS typically earns between ₹15,000 to ₹35,000+ per month. Distributors managing a network of 50-200 retailers earn passive commission on every transaction, earning ₹50,000+ per month.'
  },

  // 6. Security & Compliance
  {
    id: 18,
    category: 'security',
    categoryName: 'Security & Compliance',
    question: 'Is Mera Digital Pay secure, licensed and RBI/NPCI compliant?',
    answer: 'Yes! Mera Digital Pay adheres to bank-grade 256-bit SSL encryption, PCI-DSS compliance, and RBI & NPCI cybersecurity guidelines. All biometric and transaction data is tokenized and never stored on local devices.'
  },
  {
    id: 19,
    category: 'security',
    categoryName: 'Security & Compliance',
    question: 'What should I do if customer money is debited but the transaction timed out?',
    answer: 'Under NPCI rules, if an AEPS or DMT transaction times out due to bank server latency, the NPCI reversal engine automatically reconciles and reverses the amount back to the customer’s bank account within 2 to 5 business days.'
  },

  // 7. Support & Dispute
  {
    id: 20,
    category: 'support',
    categoryName: 'Support & Devices',
    question: 'How can I raise a dispute ticket or get customer care support?',
    answer: 'You can raise a support ticket directly from the app transaction history or contact our support team. Helpline: +91 7088898725, WhatsApp Support: +91 9675695450, Email: help@meradigitalpay.com.'
  },
  {
    id: 21,
    category: 'support',
    categoryName: 'Support & Devices',
    question: 'What are the customer support working hours?',
    answer: 'Our customer support and dispute resolution desks operate 7 days a week from 8:00 AM to 9:00 PM, with automated AI helpdesk and WhatsApp bot support available 24/7.'
  }
];

export default function FaqsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openIds, setOpenIds] = useState([1, 6]);

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query) ||
        faq.categoryName.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map(f => f.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <main className="faqs-page-main" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      {/* Breadcrumbs */}
      <div id="breadcrumbs" className="breadcrumbs-wrapper bgcolor--white" style={{ borderBottom: '1px solid #e2e8f0' }}>
        <div className="container--responsive">
          <ul className="breadcrumbs-container" style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: '14px 0', margin: 0, fontSize: '13.5px', color: '#64748b' }}>
            <li className="item-home">
              <a className="bread-link bread-home set-retailer" href="/" style={{ color: '#0c4696', textDecoration: 'none', fontWeight: 500 }}>
                Home
              </a>
            </li>
            <li className="separator separator-home">::</li>
            <li className="item-current item-faqs">
              <span className="bread-current" style={{ fontWeight: 600, color: '#1e293b' }}>
                Help Center &amp; FAQs
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Top Banner & Search Header */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0c4696 0%, #062b5e 100%)', 
        padding: '60px 0 70px',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background glow circle */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(88,177,71,0.25) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%'
        }} />

        <div className="container--responsive" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: '#86efac',
              marginBottom: '16px'
            }}>
              <HelpCircle size={15} /> 24x7 Knowledge Base &amp; Support Hub
            </span>

            <h1 style={{ 
              fontFamily: "'Cera Pro', sans-serif", 
              fontSize: '40px', 
              fontWeight: 800, 
              lineHeight: 1.2, 
              margin: '0 0 16px',
              color: '#ffffff'
            }}>
              How can we help you today?
            </h1>

            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#e2e8f0', margin: '0 0 32px' }}>
              Search answers across AEPS banking, retailer eKYC, commissions, instant settlements, biometric devices, and transaction dispute guidelines.
            </p>

            {/* Live Search Input */}
            <div style={{
              position: 'relative',
              maxWidth: '650px',
              margin: '0 auto',
              boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
            }}>
              <Search 
                size={22} 
                color="#0c4696" 
                style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input
                type="text"
                placeholder="Search questions (e.g. AEPS limit, Move to Bank, Biometric, eKYC, Commission)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '18px 20px 18px 56px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '16px',
                  outline: 'none',
                  color: '#0f172a',
                  background: '#ffffff',
                  boxSizing: 'border-box'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '50%',
                    width: '26px',
                    height: '26px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    color: '#64748b'
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '60px 0 90px' }}>
        <div className="container--responsive">
          
          {/* Quick Help Support Cards Bar */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '16px', 
            marginBottom: '45px' 
          }}>
            {/* Phone Helpline */}
            <div style={{ 
              background: '#ffffff', 
              padding: '18px 16px', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              minWidth: 0
            }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#eff6ff', color: '#0c4696', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <PhoneCall size={20} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.4px', display: 'block' }}>
                  Phone Helpline
                </span>
                <a href="tel:+917088898725" style={{ display: 'block', fontSize: '14.5px', fontWeight: 800, color: '#0c4696', textDecoration: 'none', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  +91 7088898725
                </a>
              </div>
            </div>

            {/* WhatsApp Desk */}
            <div style={{ 
              background: '#ffffff', 
              padding: '18px 16px', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              minWidth: 0
            }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MessageCircle size={20} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.4px', display: 'block' }}>
                  WhatsApp Desk
                </span>
                <a href="https://wa.me/919675695450?text=Hello%20Mera%20Digital%20Pay%20Team,%20I%20need%20assistance" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '14.5px', fontWeight: 800, color: '#16a34a', textDecoration: 'none', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  +91 9675695450
                </a>
              </div>
            </div>

            {/* Email Support */}
            <div style={{ 
              background: '#ffffff', 
              padding: '18px 16px', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              minWidth: 0
            }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#faf5ff', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={20} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.4px', display: 'block' }}>
                  Email Support
                </span>
                <a 
                  href="mailto:help@meradigitalpay.com" 
                  title="help@meradigitalpay.com"
                  style={{ 
                    display: 'block', 
                    fontSize: '13px', 
                    fontWeight: 800, 
                    color: '#7c3aed', 
                    textDecoration: 'none', 
                    marginTop: '2px',
                    wordBreak: 'break-all',
                    lineHeight: 1.3
                  }}
                >
                  help@meradigitalpay.com
                </a>
              </div>
            </div>

            {/* Android App */}
            <div style={{ 
              background: '#ffffff', 
              padding: '18px 16px', 
              borderRadius: '16px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              minWidth: 0
            }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#fff7ed', color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Download size={20} />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.4px', display: 'block' }}>
                  Android App
                </span>
                <a href="https://play.google.com/store/apps/details?id=com.aps.partners" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '13.5px', fontWeight: 800, color: '#ea580c', textDecoration: 'none', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Get on Play Store →
                </a>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '35px',
            justifyContent: 'center'
          }}>
            {faqCategories.map((cat) => {
              const IconComponent = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: '24px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: isSelected ? '1px solid #0c4696' : '1px solid #cbd5e1',
                    background: isSelected ? '#0c4696' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#334155',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 12px rgba(12, 70, 150, 0.2)' : 'none'
                  }}
                >
                  <IconComponent size={16} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion Header & Controls */}
          <div style={{ 
            maxWidth: '920px', 
            margin: '0 auto', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#334155' }}>
              Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
              {selectedCategory !== 'all' && ` in ${faqCategories.find(c => c.id === selectedCategory)?.label}`}
            </span>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={expandAll}
                style={{ background: 'transparent', border: 'none', color: '#0c4696', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
              >
                Expand All
              </button>
              <span style={{ color: '#cbd5e1' }}>|</span>
              <button
                onClick={collapseAll}
                style={{ background: 'transparent', border: 'none', color: '#64748b', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div style={{ maxWidth: '920px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {filteredFaqs.length === 0 ? (
              <div style={{
                background: '#ffffff',
                padding: '50px 30px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px dashed #cbd5e1'
              }}>
                <HelpCircle size={44} color="#94a3b8" style={{ marginBottom: '12px' }} />
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b', margin: '0 0 6px' }}>
                  No questions match "{searchQuery}"
                </h3>
                <p style={{ color: '#64748b', fontSize: '14.5px', margin: '0 0 18px' }}>
                  Try searching with different keywords or browse through our categories above.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  style={{
                    background: '#0c4696',
                    color: '#ffffff',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  View All Questions
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      border: isOpen ? '1.5px solid #93c5fd' : '1px solid #e2e8f0',
                      boxShadow: isOpen ? '0 8px 24px rgba(12, 70, 150, 0.08)' : '0 2px 8px rgba(0,0,0,0.02)',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <div
                      onClick={() => toggleFaq(faq.id)}
                      style={{
                        padding: '22px 26px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        cursor: 'pointer',
                        background: isOpen ? '#f8fafc' : '#ffffff',
                        borderBottom: isOpen ? '1px solid #f1f5f9' : 'none'
                      }}
                    >
                      <div style={{ flex: '1', paddingRight: '16px' }}>
                        <span style={{ 
                          fontSize: '11px', 
                          fontWeight: 700, 
                          color: '#0c4696', 
                          background: '#eff6ff', 
                          padding: '3px 8px', 
                          borderRadius: '6px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          display: 'inline-block',
                          marginBottom: '6px'
                        }}>
                          {faq.categoryName}
                        </span>
                        <h3 style={{ 
                          fontFamily: "'Cera Pro', sans-serif", 
                          fontSize: '17.5px', 
                          fontWeight: 700, 
                          color: isOpen ? '#0c4696' : '#1e293b', 
                          margin: 0,
                          lineHeight: 1.4
                        }}>
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: isOpen ? '#0c4696' : '#f1f5f9',
                          color: isOpen ? '#ffffff' : '#0c4696',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>

                    {isOpen && (
                      <div style={{ 
                        padding: '24px 26px', 
                        fontSize: '15.5px', 
                        lineHeight: 1.75, 
                        color: '#334155', 
                        background: '#ffffff'
                      }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Need more help banner */}
          <div style={{
            maxWidth: '920px',
            margin: '50px auto 0',
            background: 'linear-gradient(135deg, #f0fdf4 0%, #eff6ff 100%)',
            border: '1.5px solid #bbf7d0',
            borderRadius: '20px',
            padding: '36px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ fontFamily: "'Cera Pro', sans-serif", fontSize: '22px', fontWeight: 800, color: '#0c4696', margin: '0 0 6px' }}>
                Still have questions? We’re here to help!
              </h3>
              <p style={{ fontSize: '15px', color: '#4a5568', margin: 0 }}>
                Speak directly with our onboarding specialists or connect with our support desk on WhatsApp.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919675695450?text=Hello%20Mera%20Digital%20Pay%20Team,%20I%20have%20a%20query"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#16a34a',
                  color: '#ffffff',
                  padding: '12px 22px',
                  borderRadius: '24px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)'
                }}
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a
                href="/contact-us"
                style={{
                  background: '#0c4696',
                  color: '#ffffff',
                  padding: '12px 22px',
                  borderRadius: '24px',
                  fontWeight: 700,
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(12, 70, 150, 0.25)'
                }}
              >
                Contact Us <ArrowRight size={16} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Partners Marquee & Download */}
      <PartnersSection />
    </main>
  );
}
