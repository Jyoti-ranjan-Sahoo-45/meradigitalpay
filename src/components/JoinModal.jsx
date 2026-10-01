import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Smartphone, 
  RefreshCw, 
  ArrowLeft
} from 'lucide-react';

const demoServicesList = [
  'Retailer',
  'State Franchise',
  'District Franchise',
  'Master Distributor',
  'B2B Admin Panel',
  'B2C Admin Panel',
  'API Panel',
  'Reseller Admin Panel',
  'AEPS API',
  'Micro ATM API',
  'Aadhaar Pay API',
  'Instant Payout API',
  'PPI DMT API',
  'UPI Cash Withdrawal API',
  'CMS API',
  'NSDL Biometric Bank Account Opening API',
  'Kotak Bank Biometric Bank Account Opening API',
  'NSDL PAN Card API',
  'UTI PAN Card API',
  'Loans API',
  '2-Wheeler Insurance API',
  '4-Wheeler Insurance API',
  'BBPS API',
  'Mobile Recharge API',
  'DTH Recharge API',
  'Digital Gift Card API',
  'IRCTC Ticket Booking API',
  'Flight Booking API',
  'Bus Booking API',
  'Hotel Booking API',
  'Aadhaar Verification API',
  'PAN Verification API',
  'Voter Card Verification API',
  'Passport Verification API',
  'Driving License Verification API',
  'RC Verification API',
  'Bank Account Verification API',
  'UPI Verification API',
  'GST Verification API',
  'Company CIN Verification API',
  'DigiLocker Verification API',
  'Payment gateway API',
  'Other Query'
];

export default function JoinModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' | 'otp' | 'success'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    whatsappNumber: '',
    state: '',
    city: '',
    demoDate: '',
    demoTime: '',
    service: ''
  });

  const [otp, setOtp] = useState(['', '', '', '']);
  const [otpTimer, setOtpTimer] = useState(45);
  const [otpError, setOtpError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);

  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setOtp(['', '', '', '']);
      setOtpError('');
      setOtpTimer(45);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // OTP Countdown Timer
  useEffect(() => {
    let interval = null;
    if (step === 'otp' && otpTimer > 0) {
      interval = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, otpTimer]);

  if (!isOpen) return null;

  // Handle Form Submission -> Move to OTP Step
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.contactNumber || formData.contactNumber.length < 10) {
      alert('Please enter a valid 10-digit contact number.');
      return;
    }
    if (!formData.service) {
      alert('Please select the service for the demo.');
      return;
    }

    setIsSendingOtp(true);
    setTimeout(() => {
      setIsSendingOtp(false);
      setStep('otp');
      setOtpTimer(45);
      setTimeout(() => {
        if (otpInputRefs[0]?.current) {
          otpInputRefs[0].current.focus();
        }
      }, 100);
    }, 500);
  };

  // OTP Input Changes
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setOtpError('');

    if (value && index < 3) {
      otpInputRefs[index + 1]?.current?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs[index - 1]?.current?.focus();
    }
  };

  const handleResendOtp = () => {
    if (otpTimer > 0) return;
    setOtp(['', '', '', '']);
    setOtpTimer(45);
    setOtpError('');
    alert(`A fresh 4-digit verification code has been sent to +91 ${formData.contactNumber}`);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      setOtpError('Please enter all 4 digits of the OTP.');
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep('success');
    }, 600);
  };

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
        className="book-demo-modal-box" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          background: '#ffffff',
          width: '100%',
          maxWidth: '460px',
          borderRadius: '20px',
          padding: '28px 24px',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          maxHeight: '90vh',
          overflowY: 'auto',
          margin: 'auto',
          boxSizing: 'border-box'
        }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose} 
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#334155',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* STEP 1: BOOK LIVE DEMO FORM */}
        {step === 'form' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '20px', paddingRight: '20px', paddingLeft: '20px' }}>
              <h2 style={{ 
                fontFamily: "'Cera Pro', 'Outfit', sans-serif", 
                fontSize: '24px', 
                fontWeight: 800, 
                color: '#0c2340', 
                margin: '0 0 6px 0' 
              }}>
                Book Live Demo
              </h2>
              <p style={{ 
                color: '#64748b', 
                fontSize: '13px', 
                lineHeight: 1.45, 
                margin: 0 
              }}>
                Fill in your details below to schedule a live walkthrough session
              </p>
            </div>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Your Name */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Email ID */}
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Contact Number */}
              <div>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value.replace(/\D/g, '') })}
                  style={inputStyle}
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="WhatsApp Number"
                  value={formData.whatsappNumber}
                  onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value.replace(/\D/g, '') })}
                  style={inputStyle}
                />
              </div>

              {/* State & City (2 Columns) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <input
                  type="text"
                  required
                  placeholder="State"
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  style={inputStyle}
                />
                <input
                  type="text"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Date & Time (2 Columns) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ position: 'relative' }}>
                  <input
                    type="date"
                    required
                    value={formData.demoDate}
                    onChange={(e) => setFormData({ ...formData, demoDate: e.target.value })}
                    style={{ ...inputStyle, paddingRight: '10px' }}
                  />
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    type="time"
                    required
                    value={formData.demoTime}
                    onChange={(e) => setFormData({ ...formData, demoTime: e.target.value })}
                    style={{ ...inputStyle, paddingRight: '10px' }}
                  />
                </div>
              </div>

              {/* Demo kis service ke liye chahiye? (Dropdown) */}
              <div>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  style={{
                    ...inputStyle,
                    color: formData.service ? '#1e293b' : '#94a3b8',
                    cursor: 'pointer',
                    appearance: 'auto'
                  }}
                >
                  <option value="" disabled>Demo kis service ke liye chahiye?</option>
                  {demoServicesList.map((srv, idx) => (
                    <option key={idx} value={srv} style={{ color: '#1e293b' }}>
                      {idx}. {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button: Send OTP */}
              <button
                type="submit"
                disabled={isSendingOtp}
                style={{
                  marginTop: '8px',
                  background: '#0d9488',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '13px 20px',
                  fontSize: '15px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: isSendingOtp ? 'not-allowed' : 'pointer',
                  transition: 'background 0.25s ease, transform 0.15s ease',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.35)'
                }}
                onMouseOver={(e) => !isSendingOtp && (e.currentTarget.style.background = '#0f766e')}
                onMouseOut={(e) => !isSendingOtp && (e.currentTarget.style.background = '#0d9488')}
              >
                <Send size={16} />
                <span>{isSendingOtp ? 'Sending OTP...' : 'Send OTP'}</span>
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: OTP VERIFICATION SUB-MODAL */}
        {step === 'otp' && (
          <div style={{ textAlign: 'center', padding: '10px 0' }}>
            <button 
              onClick={() => setStep('form')} 
              style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'transparent',
                border: 'none',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '13px',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              <ArrowLeft size={16} /> Back
            </button>

            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#ccfbf1',
              color: '#0d9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '12px auto 14px'
            }}>
              <Smartphone size={28} />
            </div>

            <h3 style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '22px',
              fontWeight: 800,
              color: '#0c2340',
              margin: '0 0 6px 0'
            }}>
              Verify OTP
            </h3>
            <p style={{ color: '#64748b', fontSize: '13.5px', maxWidth: '320px', margin: '0 auto 20px', lineHeight: 1.45 }}>
              Enter the 4-digit code sent to <br />
              <strong style={{ color: '#0c2340' }}>+91 {formData.contactNumber}</strong>
            </p>

            <form onSubmit={handleVerifyOtp}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={otpInputRefs[index]}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '10px',
                      border: otpError ? '2px solid #ef4444' : '1.5px solid #cbd5e1',
                      textAlign: 'center',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#0c2340',
                      outline: 'none',
                      background: '#f8fafc',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = '#0d9488')}
                    onBlur={(e) => !otpError && (e.target.style.borderColor = '#cbd5e1')}
                  />
                ))}
              </div>

              {otpError && (
                <p style={{ color: '#ef4444', fontSize: '13px', margin: '0 0 12px 0', fontWeight: 600 }}>
                  {otpError}
                </p>
              )}

              {/* Timer / Resend */}
              <div style={{ marginBottom: '20px', fontSize: '13.5px', color: '#64748b' }}>
                {otpTimer > 0 ? (
                  <span>Resend code in <strong style={{ color: '#0d9488' }}>{otpTimer}s</strong></span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#0d9488',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <RefreshCw size={14} /> Resend OTP
                  </button>
                )}
              </div>

              {/* Verify & Confirm */}
              <button
                type="submit"
                disabled={isVerifying}
                style={{
                  width: '100%',
                  background: '#0d9488',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '24px',
                  padding: '13px 20px',
                  fontSize: '15px',
                  fontWeight: 700,
                  cursor: isVerifying ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 14px rgba(13, 148, 136, 0.35)',
                  transition: 'background 0.2s ease'
                }}
              >
                {isVerifying ? 'Verifying Code...' : 'Verify & Confirm Demo'}
              </button>
            </form>
          </div>
        )}

        {/* STEP 3: SUCCESS CONFIRMATION */}
        {step === 'success' && (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#dcfce7',
              color: '#16a34a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px'
            }}>
              <CheckCircle2 size={38} />
            </div>

            <h3 style={{
              fontFamily: "'Cera Pro', sans-serif",
              fontSize: '22px',
              fontWeight: 800,
              color: '#0c2340',
              margin: '0 0 6px 0'
            }}>
              Demo Scheduled!
            </h3>
            <p style={{ color: '#64748b', fontSize: '13.5px', margin: '0 auto 18px', maxWidth: '340px' }}>
              Thank you, <strong>{formData.name}</strong>! Your live walkthrough session has been booked.
            </p>

            {/* Summary Details Card */}
            <div style={{
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              padding: '14px 16px',
              textAlign: 'left',
              marginBottom: '20px',
              fontSize: '13px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}>
              <div>
                <span style={{ color: '#64748b' }}>Service Requested:</span>{' '}
                <strong style={{ color: '#0c4696' }}>{formData.service}</strong>
              </div>
              {formData.demoDate && (
                <div>
                  <span style={{ color: '#64748b' }}>Slot Date & Time:</span>{' '}
                  <strong style={{ color: '#1e293b' }}>
                    {formData.demoDate} {formData.demoTime ? `@ ${formData.demoTime}` : ''}
                  </strong>
                </div>
              )}
              <div>
                <span style={{ color: '#64748b' }}>Contact Number:</span>{' '}
                <strong style={{ color: '#1e293b' }}>+91 {formData.contactNumber}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>City/State:</span>{' '}
                <strong style={{ color: '#1e293b' }}>{formData.city}, {formData.state}</strong>
              </div>
            </div>

            <p style={{ fontSize: '12.5px', color: '#10b981', fontWeight: 600, margin: '0 0 16px 0' }}>
              ✦ Our product specialist will connect with you via WhatsApp & Call.
            </p>

            <button
              onClick={onClose}
              style={{
                width: '100%',
                background: '#0c4696',
                color: '#ffffff',
                border: 'none',
                borderRadius: '24px',
                padding: '12px 20px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null;
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1.5px solid #e2e8f0',
  fontSize: '14px',
  color: '#1e293b',
  outline: 'none',
  background: '#ffffff',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease'
};
