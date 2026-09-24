import React, { useState, useEffect } from 'react';
import { X, Calculator, IndianRupee, TrendingUp, Sparkles } from 'lucide-react';

export default function IncomeCalculatorModal({ isOpen, onClose, onOpenJoin }) {
  const [aepsCount, setAepsCount] = useState(25);
  const [dmtCount, setDmtCount] = useState(15);
  const [utilityCount, setUtilityCount] = useState(30);
  const [insuranceCount, setInsuranceCount] = useState(5);
  const [travelCount, setTravelCount] = useState(8);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Monthly income formula approximation based on Mera Digital Pay commissions
  // AePS: ~Rs 7 per txn * 30 days
  // DMT: ~Rs 12 per txn * 30 days
  // Utility: ~Rs 3.5 per txn * 30 days
  // Insurance: ~Rs 150 per policy
  // Travel: ~Rs 80 per booking
  const monthlyAeps = aepsCount * 7.5 * 30;
  const monthlyDmt = dmtCount * 12 * 30;
  const monthlyUtility = utilityCount * 3.5 * 30;
  const monthlyInsurance = insuranceCount * 150;
  const monthlyTravel = travelCount * 80;

  const totalMonthly = Math.round(monthlyAeps + monthlyDmt + monthlyUtility + monthlyInsurance + monthlyTravel);
  const totalYearly = totalMonthly * 12;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="calc-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} style={{ background: '#f1f5f9', color: '#1e293b' }}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--pn-blue-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pn-blue-primary)' }}>
            <Calculator size={22} />
          </div>
          <div>
            <h3 className="calc-title">Retailer Income Calculator</h3>
            <p style={{ color: 'var(--pn-text-muted)', fontSize: '0.9rem' }}>
              Estimate your monthly and annual earnings as a Mera Digital Pay Digital Pradhan
            </p>
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          {/* AePS Slider */}
          <div className="calc-row">
            <div className="calc-row-header">
              <span>AePS / Micro-ATM Cash Withdrawals (Daily)</span>
              <strong style={{ color: 'var(--pn-blue-primary)' }}>{aepsCount} txns / day</strong>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={aepsCount} 
              onChange={(e) => setAepsCount(Number(e.target.value))}
              className="calc-range-input"
            />
          </div>

          {/* DMT Slider */}
          <div className="calc-row">
            <div className="calc-row-header">
              <span>Money Transfers - DMT (Daily)</span>
              <strong style={{ color: 'var(--pn-blue-primary)' }}>{dmtCount} txns / day</strong>
            </div>
            <input 
              type="range" 
              min="0" 
              max="80" 
              value={dmtCount} 
              onChange={(e) => setDmtCount(Number(e.target.value))}
              className="calc-range-input"
            />
          </div>

          {/* Utility Bill Payments */}
          <div className="calc-row">
            <div className="calc-row-header">
              <span>Bill Payments & Mobile Recharges (Daily)</span>
              <strong style={{ color: 'var(--pn-blue-primary)' }}>{utilityCount} txns / day</strong>
            </div>
            <input 
              type="range" 
              min="0" 
              max="150" 
              value={utilityCount} 
              onChange={(e) => setUtilityCount(Number(e.target.value))}
              className="calc-range-input"
            />
          </div>

          {/* Insurance */}
          <div className="calc-row">
            <div className="calc-row-header">
              <span>Insurance Policies (Monthly)</span>
              <strong style={{ color: 'var(--pn-blue-primary)' }}>{insuranceCount} policies / mo</strong>
            </div>
            <input 
              type="range" 
              min="0" 
              max="50" 
              value={insuranceCount} 
              onChange={(e) => setInsuranceCount(Number(e.target.value))}
              className="calc-range-input"
            />
          </div>

          {/* Travel */}
          <div className="calc-row">
            <div className="calc-row-header">
              <span>Train & Flight Bookings (Monthly)</span>
              <strong style={{ color: 'var(--pn-blue-primary)' }}>{travelCount} bookings / mo</strong>
            </div>
            <input 
              type="range" 
              min="0" 
              max="60" 
              value={travelCount} 
              onChange={(e) => setTravelCount(Number(e.target.value))}
              className="calc-range-input"
            />
          </div>
        </div>

        {/* Dynamic Calculation Result */}
        <div className="calc-result-box">
          <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--pn-blue-primary)', marginBottom: 4 }}>
            Estimated Monthly Earnings:
          </p>
          <div className="calc-result-amount">
            ₹{totalMonthly.toLocaleString('en-IN')}
            <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--pn-text-muted)', marginLeft: 6 }}>/ month</span>
          </div>
          <p style={{ fontSize: '0.92rem', color: '#475569', marginTop: 4 }}>
            Annual Potential: <strong>₹{totalYearly.toLocaleString('en-IN')} / year</strong> with Zero working capital
          </p>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 14, justifyContent: 'flex-end' }}>
          <button className="btn btn-border" onClick={onClose}>
            Close
          </button>
          <button 
            className="btn btn-green"
            onClick={() => {
              onClose();
              onOpenJoin();
            }}
          >
            <Sparkles size={16} /> Start Earning Now
          </button>
        </div>
      </div>
    </div>
  );
}
