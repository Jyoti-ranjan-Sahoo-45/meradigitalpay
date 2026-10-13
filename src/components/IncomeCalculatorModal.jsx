import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight, RefreshCw, Calculator, Sparkles } from 'lucide-react';
import { calculatorCategories, PARTNER_ROLES } from '../pages/IncomeCalculatorPage';

export default function IncomeCalculatorModal({ isOpen, onClose, onOpenJoin }) {
  const [activeRole, setActiveRole] = useState('retailer');

  // Initialize counts for each role
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

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

  useEffect(() => {
    setAnimatePop(true);
    const timer = setTimeout(() => setAnimatePop(false), 350);
    return () => clearTimeout(timer);
  }, [incomePerDay]);

  if (!isOpen) return null;

  const modalContent = (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(4, 15, 30, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '16px',
        boxSizing: 'border-box'
      }}
    >
      <div 
        className="calc-modal-box" 
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#f8fafc',
          width: '100%',
          maxWidth: '920px',
          borderRadius: '20px',
          padding: '24px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          maxHeight: '92vh',
          overflowY: 'auto',
          margin: 'auto',
          boxSizing: 'border-box'
        }}
      >
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          style={{ 
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#ffffff', 
            color: '#1e293b',
            border: '1px solid #cbd5e1',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'transform 0.2s ease, background-color 0.2s ease'
          }}
          aria-label="Close"
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#fee2e2';
            e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #093774 0%, #0c4696 100%)',
          borderRadius: '16px',
          padding: '20px 22px',
          color: '#ffffff',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '3px 12px',
            borderRadius: '100px',
            background: 'rgba(201, 162, 39, 0.15)',
            border: '1px solid #C9A227',
            color: '#fef08a',
            fontSize: '11.5px',
            fontWeight: 800,
            marginBottom: '8px'
          }}>
            <Sparkles size={12} color="#C9A227" />
            <span>{currentRole.badge}</span>
          </div>

          <h2 style={{
            fontFamily: "'Cera Pro', sans-serif",
            fontSize: '22px',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 4px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <CurrentRoleIcon size={22} color="#C9A227" />
            {currentRole.label} Income Calculator
          </h2>
          <p style={{ color: '#e2e8f0', fontSize: '13px', margin: '0 0 14px 0' }}>
            {currentRole.tagline}
          </p>

          {/* Partner Role Pills Bar inside Modal */}
          <div className="calc-role-tab-bar-wrap" style={{ marginTop: '6px' }}>
            <div className="calc-role-tab-bar" role="tablist">
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
                    style={{ padding: '8px 14px', fontSize: '12.5px' }}
                  >
                    <RoleIcon size={14} />
                    <span>{role.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 290px',
          gap: '20px',
          alignItems: 'start'
        }} className="calc-modal-inner-grid">
          {/* Left: Scrollable Service List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxHeight: '52vh',
            overflowY: 'auto',
            paddingRight: '6px'
          }}>
            {calculatorCategories.map((cat, catIdx) => (
              <div 
                key={catIdx}
                className="calc-category-card"
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  border: '1.5px solid #e2e8f0'
                }}
              >
                <h4 style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#0c4696',
                  margin: '0 0 12px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Calculator size={15} color="#C9A227" />
                  {cat.category}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {cat.items.map((item) => (
                    <div 
                      key={item.id}
                      className="calc-item-row"
                      style={{ padding: '8px 12px' }}
                    >
                      <span className="calc-item-name" style={{ fontSize: '13px' }}>
                        {item.name}{' '}
                        <span className="calc-item-rate">₹{item.rate}</span>
                      </span>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '11px', color: '#94a3b8' }}>txns/day</span>
                        <input 
                          type="number"
                          min="0"
                          max="99999"
                          value={currentCounts[item.id] !== undefined ? currentCounts[item.id] : currentRole.defaultCount}
                          onChange={(e) => handleCountChange(item.id, e.target.value)}
                          className="calc-number-input"
                          style={{ width: '56px', padding: '4px 6px', fontSize: '14px' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Income Summary Card */}
          <div className="calc-summary-card" style={{ padding: '22px 18px', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '8px' }}>
              <h4 style={{
                fontSize: '17px',
                fontWeight: 800,
                color: '#ffffff',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Calculator size={18} color="#C9A227" />
                Income Summary
              </h4>
              <span style={{
                background: 'rgba(201, 162, 39, 0.22)',
                border: '1px solid #C9A227',
                color: '#fef08a',
                fontSize: '10.5px',
                fontWeight: 800,
                padding: '2px 8px',
                borderRadius: '12px',
                textTransform: 'uppercase'
              }}>
                {currentRole.label}
              </span>
            </div>

            {/* Income Per Day */}
            <div className="calc-daily-box" style={{ padding: '12px 14px' }}>
              <span style={{ color: '#334155', fontSize: '13.5px', fontWeight: 700 }}>
                Income Per Day
              </span>
              <span 
                className={`calc-amount ${animatePop ? 'calc-amount-pop' : ''}`}
                style={{ color: '#0f172a', fontSize: '17px', fontWeight: 800 }}
              >
                ₹{incomePerDay.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Total Income / Month */}
            <div className="calc-monthly-box" style={{ padding: '12px 14px' }}>
              <span style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: 700 }}>
                Total Income / Month
              </span>
              <span 
                className={`calc-amount ${animatePop ? 'calc-amount-pop' : ''}`}
                style={{ color: '#ffffff', fontSize: '18px', fontWeight: 800 }}
              >
                ₹{totalMonthlyIncome.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Annual Run-rate */}
            <div style={{
              background: 'rgba(201, 162, 39, 0.15)',
              border: '1px solid rgba(201, 162, 39, 0.35)',
              borderRadius: '10px',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ color: '#fef08a', fontSize: '11.5px', fontWeight: 700 }}>
                Annual Run-rate
              </span>
              <span style={{ color: '#ffffff', fontSize: '14px', fontWeight: 800 }}>
                ₹{totalYearlyIncome.toLocaleString('en-IN')}
              </span>
            </div>

            <p style={{
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.75)',
              margin: 0,
              textAlign: 'center'
            }}>
              * Monthly income calculated on 30 working days for {currentRole.label}.
            </p>

            {/* Apply Now Button */}
            <button
              type="button"
              onClick={() => {
                onClose();
                if (typeof onOpenJoin === 'function') onOpenJoin(currentRole.label);
              }}
              className="calc-apply-btn"
              style={{ padding: '12px 16px', fontSize: '14px' }}
            >
              <span>Apply as {currentRole.label}</span>
              <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={handleResetRole}
              className="calc-reset-btn"
              style={{ padding: '4px', fontSize: '12px' }}
            >
              <RefreshCw size={12} />
              <span>Reset {currentRole.label}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
