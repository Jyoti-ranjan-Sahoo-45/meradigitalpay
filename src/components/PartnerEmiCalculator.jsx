import React, { useState } from 'react';
import { 
  Calculator, 
  FileText, 
  CreditCard, 
  IndianRupee, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Video 
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
    <div className="partner-emi-calc-wrapper">
      <div className="partner-emi-grid">
        
        {/* ── LEFT COLUMN: INPUT CONTROLS ── */}
        <div className="partner-emi-left-col">
          
          {/* Header */}
          <div className="partner-emi-header">
            <div className="partner-emi-icon-box">
              <Calculator size={22} />
            </div>
            <div>
              <h3 className="partner-emi-title">
                Calculate Your EMI
              </h3>
              <p className="partner-emi-subtitle">
                Enter the details below to see your monthly installment.
              </p>
            </div>
          </div>

          {/* Input Row: Software Setup Cost & Down Payment */}
          <div className="partner-emi-inputs-row">
            <div className="partner-emi-input-group">
              <label className="partner-emi-label">
                Software / Setup Cost (₹)
              </label>
              <div className="partner-emi-input-wrapper">
                <span className="partner-emi-currency-symbol">₹</span>
                <input
                  type="text"
                  value={setupCost === '' ? '' : formatINR(setupCost)}
                  onChange={handleCostChange}
                  placeholder="45,000"
                  className="partner-emi-input-field"
                />
              </div>
            </div>

            <div className="partner-emi-input-group">
              <label className="partner-emi-label">
                Down Payment (₹)
              </label>
              <div className="partner-emi-input-wrapper">
                <span className="partner-emi-currency-symbol">₹</span>
                <input
                  type="text"
                  value={downPayment === '' ? '' : formatINR(downPayment)}
                  onChange={handleDownPaymentChange}
                  placeholder="0"
                  className="partner-emi-input-field"
                />
              </div>
            </div>
          </div>

          {/* Select EMI Plan Buttons */}
          <div className="partner-emi-plans-block">
            <label className="partner-emi-label">
              Select EMI Plan
            </label>
            <div className="partner-emi-plans-container">
              {emiPlans.map((months) => {
                const isActive = selectedPlanMonths === months;
                return (
                  <button
                    key={months}
                    type="button"
                    onClick={() => setSelectedPlanMonths(months)}
                    className={`partner-emi-plan-btn ${isActive ? 'active' : ''}`}
                  >
                    {months} Months
                  </button>
                );
              })}
            </div>
          </div>

          {/* Info Box */}
          <div className="partner-emi-info-box">
            <div className="partner-emi-info-icon">i</div>
            <div>
              <div className="partner-emi-info-title">
                EMI is calculated without interest (0%).
              </div>
              <div className="partner-emi-info-desc">
                Applicable taxes or third-party charges, if any, will be disclosed separately.
              </div>
            </div>
          </div>

        </div>

        {/* ── RIGHT COLUMN: SUMMARY CARD ── */}
        <div className="partner-emi-summary-card">
          
          {/* Dark Blue Header */}
          <div className="partner-emi-summary-header">
            <div className="partner-emi-summary-header-top">
              <span className="partner-emi-summary-tag">
                Estimated Monthly EMI
              </span>
              <span className="partner-emi-summary-badge">
                {selectedPlanMonths} Months Plan
              </span>
            </div>

            <div className="partner-emi-summary-amount-row">
              <span className="partner-emi-summary-amount">
                ₹ {formatINR(monthlyEmi)}
              </span>
              <span className="partner-emi-summary-unit">
                /month
              </span>
            </div>
          </div>

          {/* Line items list */}
          <div className="partner-emi-summary-body">
            
            <div className="partner-emi-summary-row">
              <div className="partner-emi-row-label">
                <FileText size={15} color="#2563eb" />
                <span>Software / Setup Cost</span>
              </div>
              <span className="partner-emi-row-value">
                ₹ {formatINR(validSetupCost)}
              </span>
            </div>

            <div className="partner-emi-summary-row">
              <div className="partner-emi-row-label">
                <CreditCard size={15} color="#2563eb" />
                <span>Down Payment</span>
              </div>
              <span className="partner-emi-row-value">
                ₹ {formatINR(validDownPayment)}
              </span>
            </div>

            <div className="partner-emi-summary-row">
              <div className="partner-emi-row-label">
                <IndianRupee size={15} color="#2563eb" />
                <span>Remaining Amount</span>
              </div>
              <span className="partner-emi-row-value">
                ₹ {formatINR(remainingAmount)}
              </span>
            </div>

            <div className="partner-emi-summary-divider" />

            <div className="partner-emi-summary-row total-row">
              <div className="partner-emi-row-label total">
                <Layers size={15} color="#2563eb" />
                <span>Total Payable Amount</span>
              </div>
              <span className="partner-emi-row-value total">
                ₹ {formatINR(totalPayable)}
              </span>
            </div>

            <div className="partner-emi-summary-row">
              <div className="partner-emi-row-label">
                <ShieldCheck size={15} color="#2563eb" />
                <span>Additional Software Charges</span>
              </div>
              <span className="partner-emi-row-value free">
                ₹ 0
              </span>
            </div>

          </div>

          {/* Action CTA Buttons */}
          <div className="partner-emi-actions">
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
              className="partner-emi-apply-btn"
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
              className="partner-emi-demo-btn"
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
