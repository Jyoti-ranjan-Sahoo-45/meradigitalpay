import React, { useState, useEffect } from 'react';
import { X, UserPlus, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function JoinModal({ isOpen, onClose }) {
  const [userType, setUserType] = useState('retailer');
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    shopName: '',
    pincode: '',
    state: 'Maharashtra'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      setIsSubmitted(false);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="calc-modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 580 }}>
        <button className="modal-close-btn" onClick={onClose} style={{ background: '#f1f5f9', color: '#1e293b' }}>
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: 'var(--pn-green-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pn-green-dark)' }}>
                <UserPlus size={24} />
              </div>
              <div>
                <h3 className="calc-title" style={{ fontSize: '1.6rem' }}>Join Mera Digital Pay Network</h3>
                <p style={{ color: 'var(--pn-text-muted)', fontSize: '0.88rem' }}>
                  Start your digital banking business today. Zero working capital.
                </p>
              </div>
            </div>

            {/* User Type Switch */}
            <div className="user-switch-tabs" style={{ marginBottom: 20 }}>
              <button 
                className={`user-switch-tab ${userType === 'retailer' ? 'active' : ''}`}
                style={{ flex: 1 }}
                onClick={() => setUserType('retailer')}
              >
                Retailer
              </button>
              <button 
                className={`user-switch-tab ${userType === 'distributor' ? 'active' : ''}`}
                style={{ flex: 1 }}
                onClick={() => setUserType('distributor')}
              >
                Distributor
              </button>
              <button 
                className={`user-switch-tab ${userType === 'shg' ? 'active' : ''}`}
                style={{ flex: 1 }}
                onClick={() => setUserType('shg')}
              >
                Digital Naari / SHG
              </button>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--pn-text-dark)', marginBottom: 4 }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--pn-text-dark)', marginBottom: 4 }}>
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #cbd5e1', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--pn-text-dark)', marginBottom: 4 }}>
                    Shop / Entity Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sharma General Store"
                    value={formData.shopName}
                    onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #cbd5e1', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--pn-text-dark)', marginBottom: 4 }}>
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="e.g. 400001"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, '') })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #cbd5e1', outline: 'none' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, color: '#64748b', fontSize: '0.82rem' }}>
                <ShieldCheck size={16} color="#58b147" />
                <span>Your information is 100% confidential & encrypted</span>
              </div>

              <button 
                type="submit" 
                className="btn btn-green"
                disabled={isLoading}
                style={{ marginTop: 12, padding: '14px', fontSize: '1.02rem' }}
              >
                {isLoading ? 'Processing Registration...' : 'Register & Start Earning'} <ArrowRight size={18} />
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--pn-blue-primary)', marginBottom: 8 }}>
              Thank You!
            </h3>
            <p style={{ color: 'var(--pn-text-body)', fontSize: '1.02rem', maxWidth: 440, margin: '0 auto 20px' }}>
              Welcome to Mera Digital Pay, <strong>{formData.name || 'Partner'}</strong>! Our local Relationship Manager will get in touch with you at <strong>+91 {formData.mobile}</strong> shortly to activate your digital store.
            </p>
            <button className="btn btn-green" onClick={onClose}>
              Got It
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
