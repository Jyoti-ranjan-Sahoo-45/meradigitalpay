import React, { useState, useMemo, useEffect } from 'react';
import { ArrowRight, Sparkles, RefreshCw, Calculator } from 'lucide-react';

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
  // Initialize counts
  const initialCounts = useMemo(() => {
    const counts = {};
    calculatorCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        counts[item.id] = item.defaultCount;
      });
    });
    return counts;
  }, []);

  const [counts, setCounts] = useState(initialCounts);
  const [animatePop, setAnimatePop] = useState(false);

  const handleCountChange = (id, val) => {
    const num = Math.max(0, parseInt(val) || 0);
    setCounts((prev) => ({ ...prev, [id]: num }));
  };

  const handleReset = () => {
    setCounts(initialCounts);
  };

  // Calculate totals
  const incomePerDay = useMemo(() => {
    let total = 0;
    calculatorCategories.forEach((cat) => {
      cat.items.forEach((item) => {
        const qty = counts[item.id] !== undefined ? counts[item.id] : item.defaultCount;
        total += qty * item.rate;
      });
    });
    return total;
  }, [counts]);

  const totalMonthlyIncome = incomePerDay * 30;

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
            padding: '5px 14px', 
            borderRadius: '100px', 
            background: 'rgba(201, 162, 39, 0.15)', 
            border: '1px solid #C9A227',
            color: '#fef08a',
            fontSize: '13px',
            fontWeight: 800,
            marginBottom: '14px'
          }}>
            <Sparkles size={14} color="#C9A227" />
            <span>Interactive Retailer Earnings Tool</span>
          </div>
          <h1 style={{
            fontFamily: "'Cera Pro', sans-serif",
            fontSize: 'clamp(28px, 4vw, 38px)',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 10px 0',
            letterSpacing: '-0.5px'
          }}>
            Income Calculator
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#e2e8f0',
            margin: 0,
            fontWeight: 400
          }}>
            Estimate your real-time daily &amp; monthly earnings with Mera Digital Pay
          </p>
        </div>
      </section>

      {/* Main Calculator Content */}
      <div className="container--responsive" style={{ maxWidth: '1200px', margin: '40px auto 0', padding: '0 16px' }}>
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

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <input 
                          type="number"
                          min="0"
                          max="999"
                          value={counts[item.id] !== undefined ? counts[item.id] : item.defaultCount}
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
              <h3 className="calc-summary-title">
                <Calculator size={20} color="#C9A227" />
                Income Summary
              </h3>

              {/* White Box: Income Per Day */}
              <div className="calc-daily-box">
                <span style={{ color: '#334155', fontSize: '15px', fontWeight: 700 }}>
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
                <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700 }}>
                  Total Income / Month
                </span>
                <span 
                  className={`calc-amount ${animatePop ? 'calc-amount-pop' : ''}`}
                  style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800 }}
                >
                  ₹{totalMonthlyIncome.toLocaleString('en-IN')}
                </span>
              </div>

              <p style={{
                fontSize: '12px',
                color: 'rgba(255, 255, 255, 0.75)',
                margin: '0',
                textAlign: 'center',
                lineHeight: 1.4
              }}>
                * Monthly income calculated on 30 working days.
              </p>

              {/* Apply Now Button */}
              <button
                type="button"
                onClick={() => {
                  if (typeof onOpenJoin === 'function') onOpenJoin();
                }}
                className="calc-apply-btn"
              >
                <span>Apply Now</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="calc-reset-btn"
              >
                <RefreshCw size={13} />
                <span>Reset to Defaults</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
