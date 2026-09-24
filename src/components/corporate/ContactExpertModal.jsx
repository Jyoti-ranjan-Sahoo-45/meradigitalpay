import React, { useState } from 'react';

export default function ContactExpertModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    solution: 'Digitize Cash Collection',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div
        className="modal-content-custom"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '36px',
          maxWidth: '520px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '18px',
            background: 'none',
            border: 'none',
            fontSize: '22px',
            cursor: 'pointer',
            color: '#64748b'
          }}
        >
          ✕
        </button>

        <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0c4696', marginBottom: '8px' }}>
          Contact Solution Experts
        </h3>
        <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '20px' }}>
          Connect with our enterprise team to optimize your last-mile distribution & collections.
        </p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <div style={{ fontSize: '48px', color: '#58b147', marginBottom: '12px' }}>✓</div>
            <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b' }}>Inquiry Submitted!</h4>
            <p style={{ fontSize: '14px', color: '#64748b', marginTop: '6px' }}>
              Our enterprise solutions consultant will contact you within 2 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rahul Sharma"
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@company.com"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="9876543210"
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Acme FinTech Pvt Ltd"
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#334155', display: 'block', marginBottom: '4px' }}>
                Solution of Interest
              </label>
              <select
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', background: '#ffffff' }}
              >
                <option value="Digitize Cash Collection">Digitize Cash Collection</option>
                <option value="Increase Market Penetration">Increase Market Penetration</option>
                <option value="Digitize Order Placement">Digitize Order Placement & Payment</option>
                <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn green"
              style={{
                marginTop: '10px',
                padding: '12px',
                borderRadius: '8px',
                background: '#58b147',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Submit Enterprise Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
