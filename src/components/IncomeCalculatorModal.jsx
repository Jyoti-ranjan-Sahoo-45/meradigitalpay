import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight, RefreshCw, Calculator } from 'lucide-react';
import { calculatorCategories } from '../pages/IncomeCalculatorPage';

export default function IncomeCalculatorModal({ isOpen, onClose, onOpenJoin }) {
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

  const handleCountChange = (id, val) => {
    const num = Math.max(0, parseInt(val) || 0);
    setCounts((prev) => ({ ...prev, [id]: num }));
  };

  const handleReset = () => {
    setCounts(initialCounts);
  };

  // Calculate totals
  const incomePerDay = Object.keys(counts).reduce((total, id) => {
    let rate = 0;
    for (const cat of calculatorCategories) {
      const found = cat.items.find((i) => i.id === id);
      if (found) {
        rate = found.rate;
        break;
      }
    }
    return total + (counts[id] || 0) * rate;
  }, 0);

  const totalMonthlyIncome = incomePerDay * 30;

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
          maxWidth: '820px',
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
            zIndex: 10
          }}
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{
          background: 'linear-gradient(135deg, #093774 0%, #0c4696 100%)',
          borderRadius: '14px',
          padding: '18px 20px',
          color: '#ffffff',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: "'Cera Pro', sans-serif",
            fontSize: '22px',
            fontWeight: 800,
            color: '#ffffff',
            margin: '0 0 4px 0'
          }}>
            Income Calculator
          </h2>
          <p style={{ color: '#e2e8f0', fontSize: '13px', margin: 0 }}>
            Estimate your daily & monthly earnings with Mera Digital Pay
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 280px',
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
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <h4 style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#0c4696',
                  margin: '0 0 12px 0'
                }}>
                  {cat.category}
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {cat.items.map((item) => (
                    <div 
                      key={item.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '8px 12px',
                        background: '#f8fafc',
                        borderRadius: '8px',
                        border: '1px solid #eef2f8'
                      }}
                    >
                      <span style={{ fontSize: '13px', color: '#1e293b', fontWeight: 600 }}>
                        {item.name}{' '}
                        <strong style={{ color: '#0c4696' }}>(₹{item.rate})</strong>
                      </span>

                      <input 
                        type="number"
                        min="0"
                        max="999"
                        value={counts[item.id] !== undefined ? counts[item.id] : item.defaultCount}
                        onChange={(e) => handleCountChange(item.id, e.target.value)}
                        style={{
                          width: '56px',
                          padding: '4px 6px',
                          textAlign: 'center',
                          fontSize: '14px',
                          fontWeight: 700,
                          color: '#0c4696',
                          border: '1px solid #cbd5e1',
                          borderRadius: '6px',
                          outline: 'none',
                          background: '#ffffff'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Income Summary Card */}
          <div style={{
            background: 'linear-gradient(180deg, #0c4696 0%, #093774 100%)',
            borderRadius: '16px',
            padding: '22px 18px',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 8px 24px rgba(12, 70, 150, 0.25)'
          }}>
            <h4 style={{
              fontSize: '18px',
              fontWeight: 800,
              color: '#ffffff',
              margin: 0
            }}>
              Income Summary
            </h4>

            {/* Income Per Day */}
            <div style={{
              background: '#ffffff',
              borderRadius: '10px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ color: '#334155', fontSize: '13.5px', fontWeight: 700 }}>
                Income Per Day
              </span>
              <span style={{ color: '#0f172a', fontSize: '17px', fontWeight: 800 }}>
                ₹{incomePerDay.toLocaleString('en-IN')}
              </span>
            </div>

            {/* Total Income / Month */}
            <div style={{
              background: '#ff6b00',
              borderRadius: '10px',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 14px rgba(255, 107, 0, 0.3)'
            }}>
              <span style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: 700 }}>
                Total Income / Month
              </span>
              <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: 800 }}>
                ₹{totalMonthlyIncome.toLocaleString('en-IN')}
              </span>
            </div>

            <p style={{
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.75)',
              margin: 0,
              textAlign: 'center'
            }}>
              * Monthly income calculated on 30 working days.
            </p>

            {/* Apply Now Button */}
            <button
              type="button"
              onClick={() => {
                onClose();
                if (typeof onOpenJoin === 'function') onOpenJoin();
              }}
              style={{
                background: '#0d9488',
                color: '#ffffff',
                border: 'none',
                borderRadius: '24px',
                padding: '12px 16px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                boxShadow: '0 4px 14px rgba(13, 148, 136, 0.35)'
              }}
            >
              Apply Now <ArrowRight size={16} />
            </button>

            <button
              type="button"
              onClick={handleReset}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}
            >
              <RefreshCw size={12} /> Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
