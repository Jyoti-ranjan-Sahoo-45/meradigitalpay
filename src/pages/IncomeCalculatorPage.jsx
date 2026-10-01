import React, { useState, useMemo } from 'react';
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

  return (
    <div style={{ background: 'transparent', minHeight: '100vh', paddingBottom: '60px' }}>
      {/* Blue Hero Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #093774 0%, #0c4696 100%)',
        color: '#ffffff',
        padding: '50px 20px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{
            fontFamily: "'Cera Pro', sans-serif",
            fontSize: '36px',
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
            Estimate your daily & monthly earnings with Mera Digital Pay
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
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  border: '1px solid #eef2f8'
                }}
              >
                <h3 style={{
                  fontFamily: "'Cera Pro', sans-serif",
                  fontSize: '18px',
                  fontWeight: 800,
                  color: '#0c4696',
                  margin: '0 0 18px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  {cat.category}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cat.items.map((item) => (
                    <div 
                      key={item.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 16px',
                        background: '#ffffff',
                        borderRadius: '10px',
                        border: '1px solid #e2e8f0',
                        transition: 'border-color 0.2s ease'
                      }}
                    >
                      <div style={{ fontSize: '14.5px', color: '#1e293b', fontWeight: 600 }}>
                        {item.name}{' '}
                        <span style={{ color: '#0c4696', fontWeight: 700 }}>
                          (₹{item.rate})
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <input 
                          type="number"
                          min="0"
                          max="999"
                          value={counts[item.id] !== undefined ? counts[item.id] : item.defaultCount}
                          onChange={(e) => handleCountChange(item.id, e.target.value)}
                          style={{
                            width: '64px',
                            padding: '6px 8px',
                            textAlign: 'center',
                            fontSize: '15px',
                            fontWeight: 700,
                            color: '#0c4696',
                            border: '1.5px solid #cbd5e1',
                            borderRadius: '6px',
                            outline: 'none',
                            background: '#f8fafc'
                          }}
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
            <div style={{
              background: 'linear-gradient(180deg, #0c4696 0%, #093774 100%)',
              borderRadius: '20px',
              padding: '28px 24px',
              boxShadow: '0 12px 36px rgba(12, 70, 150, 0.28)',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <h3 style={{
                fontFamily: "'Cera Pro', sans-serif",
                fontSize: '20px',
                fontWeight: 800,
                color: '#ffffff',
                margin: 0,
                textAlign: 'left'
              }}>
                Income Summary
              </h3>

              {/* White Box: Income Per Day */}
              <div style={{
                background: '#ffffff',
                borderRadius: '12px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ color: '#334155', fontSize: '15px', fontWeight: 700 }}>
                  Income Per Day
                </span>
                <span style={{ color: '#0f172a', fontSize: '20px', fontWeight: 800 }}>
                  ₹{incomePerDay.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Orange Box: Total Income / Month */}
              <div style={{
                background: '#ff6b00',
                borderRadius: '12px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '0 4px 16px rgba(255, 107, 0, 0.35)'
              }}>
                <span style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700 }}>
                  Total Income / Month
                </span>
                <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800 }}>
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
                style={{
                  background: '#0d9488',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '14px 20px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 6px 20px rgba(13, 148, 136, 0.4)',
                  transition: 'all 0.25s ease'
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#0f766e')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#0d9488')}
              >
                Apply Now <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={handleReset}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '4px'
                }}
              >
                <RefreshCw size={13} /> Reset to Defaults
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
