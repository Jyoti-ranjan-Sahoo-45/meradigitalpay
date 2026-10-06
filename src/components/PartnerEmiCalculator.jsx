import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  FileText, 
  CreditCard, 
  IndianRupee, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Video, 
  Info 
} from 'lucide-react';

export default function PartnerEmiCalculator({ 
  defaultCost = 45000, 
  partnerTitle = "Partner",
  onApply,
  onRequestDemo 
}) {
  const [setupCost, setSetupCost] = useState(defaultCost);
  const [downPayment, setDownPayment] = useState(0);
  const [selectedPlanMonths, setSelectedPlanMonths] = useState(6);

  const emiPlans = [3, 4, 6, 9, 12];

  // Calculations
  const validSetupCost = Math.max(0, Number(setupCost) || 0);
  const validDownPayment = Math.min(validSetupCost, Math.max(0, Number(downPayment) || 0));
  const remainingAmount = Math.max(0, validSetupCost - validDownPayment);
  const monthlyEmi = selectedPlanMonths > 0 ? Math.round(remainingAmount / selectedPlanMonths) : 0;
  const totalPayable = validSetupCost;

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN').format(val);
  };

  const handleCostChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '');
    setSetupCost(raw === '' ? '' : Number(raw));
  };

  const handleDownPaymentChange = (e) => {
    const raw = e.target.value.replace(/\D/g, '');
    setDownPayment(raw === '' ? '' : Number(raw));
  };

  return (
    <div className="partner-emi-calc-wrapper" style={{
      background: '#ffffff',
      border: '1.5px solid #e2e8f0',
      borderRadius: '20px',
      padding: '24px',
      margin: '24px 0 10px',
      boxShadow: '0 8px 30px rgba(10, 43, 94, 0.06)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        alignItems: 'stretch'
      }}>
        
        {/* ── LEFT COLUMN: INPUT CONTROLS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
          
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: '#0d47a1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
              boxShadow: '0 4px 12px rgba(13, 71, 161, 0.25)'
            }}>
              <Calculator size={24} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0A2B5E', letterSpacing: '-0.2px' }}>
                Calculate Your EMI
              </h3>
              <p style={{ margin: '3px 0 0', fontSize: '13px', color: '#64748B' }}>
                Enter the details below to see your monthly installment.
              </p>
            </div>
          </div>

          {/* 2-Col Input Row: Software Setup Cost & Down Payment */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
                Software / Setup Cost (₹)
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '10px',
                padding: '0 12px',
                transition: 'border-color 0.2s'
              }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#475569', marginRight: '6px' }}>₹</span>
                <input
                  type="text"
                  value={setupCost === '' ? '' : formatINR(setupCost)}
                  onChange={handleCostChange}
                  placeholder="45,000"
                  style={{
                    width: '100%',
                    border: 'none',
                    background: 'transparent',
                    padding: '11px 0',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#0A2B5E',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>
                Down Payment (₹)
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '10px',
                padding: '0 12px',
                transition: 'border-color 0.2s'
              }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#475569', marginRight: '6px' }}>₹</span>
                <input
                  type="text"
                  value={downPayment === '' ? '' : formatINR(downPayment)}
                  onChange={handleDownPaymentChange}
                  placeholder="0"
                  style={{
                    width: '100%',
                    border: 'none',
                    background: 'transparent',
                    padding: '11px 0',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#0A2B5E',
                    outline: 'none'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Select EMI Plan Buttons */}
          <div>
            <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '10px' }}>
              Select EMI Plan
            </label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {emiPlans.map((months) => {
                const isActive = selectedPlanMonths === months;
                return (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setSelectedPlanMonths(months)}
                    style={{
                      flex: '1 1 58px',
                      minWidth: '70px',
                      padding: '10px 12px',
                      borderRadius: '10px',
                      fontSize: '13.5px',
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? '#ffffff' : '#334155',
                      background: isActive ? '#1d4ed8' : '#ffffff',
                      border: isActive ? '1.5px solid #1d4ed8' : '1.5px solid #e2e8f0',
                      cursor: 'pointer',
                      boxShadow: isActive ? '0 4px 12px rgba(29, 78, 216, 0.25)' : 'none',
                      transition: 'all 0.15s ease',
                      textAlign: 'center'
                    }}
                  >
                    {months} Months
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info Box */}
          <div style={{
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '12px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#1d4ed8',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '11px',
              fontWeight: 800
            }}>
              i
            </div>
            <div>
              <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#0A2B5E' }}>
                EMI is calculated without interest (0%).
              </div>
              <div style={{ fontSize: '11.5px', color: '#64748B', marginTop: '2px', lineHeight: 1.4 }}>
                Applicable taxes or third-party charges, if any, will be disclosed separately.
              </div>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: SUMMARY CARD ── */}
        <div style={{
          border: '1.5px solid #cbd5e1',
          borderRadius: '16px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
          background: '#ffffff'
        }}>
          
          {/* Dark Blue Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0A2B5E 0%, #0d47a1 100%)',
            padding: '18px 22px',
            color: '#ffffff'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#bfdbfe' }}>
                Estimated Monthly EMI
              </span>
              <span style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '3px 12px',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#ffffff'
              }}>
                {selectedPlanMonths} Months Plan
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{ fontSize: '32px', fontWeight: 900, letterSpacing: '-0.5px' }}>
                ₹ {formatINR(monthlyEmi)}
              </span>
              <span style={{ fontSize: '14.5px', fontWeight: 600, color: '#93c5fd' }}>
                /month
              </span>
            </div>
          </div>

          {/* Line items list */}
          <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#475569', fontSize: '13.5px', fontWeight: 600 }}>
                <FileText size={16} color="#2563eb" />
                <span>Software / Setup Cost</span>
              </div>
              <span style={{ fontSize: '14.5px', fontWeight: 800, color: '#0A2B5E' }}>
                ₹ {formatINR(validSetupCost)}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#475569', fontSize: '13.5px', fontWeight: 600 }}>
                <CreditCard size={16} color="#2563eb" />
                <span>Down Payment</span>
              </div>
              <span style={{ fontSize: '14.5px', fontWeight: 800, color: '#0A2B5E' }}>
                ₹ {formatINR(validDownPayment)}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#475569', fontSize: '13.5px', fontWeight: 600 }}>
                <IndianRupee size={16} color="#2563eb" />
                <span>Remaining Amount</span>
              </div>
              <span style={{ fontSize: '14.5px', fontWeight: 800, color: '#0A2B5E' }}>
                ₹ {formatINR(remainingAmount)}
              </span>
            </div>

            <div style={{ height: '1px', background: '#e2e8f0', margin: '2px 0' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#0A2B5E', fontSize: '13.5px', fontWeight: 700 }}>
                <Layers size={16} color="#2563eb" />
                <span>Total Payable Amount</span>
              </div>
              <span style={{ fontSize: '14.5px', fontWeight: 900, color: '#0A2B5E' }}>
                ₹ {formatINR(totalPayable)}
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#475569', fontSize: '13.5px', fontWeight: 600 }}>
                <ShieldCheck size={16} color="#2563eb" />
                <span>Additional Software Charges</span>
              </div>
              <span style={{ fontSize: '14.5px', fontWeight: 800, color: '#16a34a' }}>
                ₹ 0
              </span>
            </div>

          </div>

          {/* Action CTA Buttons */}
          <div style={{ padding: '0 22px 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              type="button"
              onClick={() => {
                if (typeof onApply === 'function') {
                  onApply({
                    setupCost: validSetupCost,
                    downPayment: validDownPayment,
                    months: selectedPlanMonths,
                    monthlyEmi
                  });
                } else {
                  window.history.pushState(null, '', '/contact-us');
                  window.dispatchEvent(new Event('popstate'));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #1d4ed8 0%, #0d47a1 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '13px',
                borderRadius: '10px',
                fontSize: '14.5px',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(13, 71, 161, 0.3)',
                transition: 'transform 0.15s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <span>Apply Now</span>
              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() => {
                if (typeof onRequestDemo === 'function') {
                  onRequestDemo();
                }
              }}
              style={{
                width: '100%',
                background: '#ffffff',
                color: '#0A2B5E',
                border: '1.5px solid #cbd5e1',
                padding: '11px',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f8fafc';
                e.currentTarget.style.borderColor = '#94a3b8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#cbd5e1';
              }}
            >
              <Video size={16} color="#0A2B5E" />
              <span>Request a Demo</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
