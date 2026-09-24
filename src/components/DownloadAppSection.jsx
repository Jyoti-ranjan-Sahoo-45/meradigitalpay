import React, { useState } from 'react';
import { Send, CheckCircle2, Shield } from 'lucide-react';

export default function DownloadAppSection() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(true);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length < 10) {
      setStatusMessage({ type: 'error', text: 'Please enter a valid 10-digit mobile number.' });
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: 'success',
        text: `Link sent successfully to +91 ${phoneNumber}! Check your SMS inbox.`
      });
      setPhoneNumber('');
    }, 800);
  };

  return (
    <section id="contact" className="download-section">
      <div className="container">
        <div className="download-inner">
          <div className="download-content">
            <h3 className="section-title-dashed" style={{ color: '#ffffff' }}>
              Download Mera Digital Pay now
            </h3>
            <p>
              Use Mera Digital App & take charge of all your transactions to grow your business
            </p>

            <form className="download-form" onSubmit={handleSubmit}>
              <div className="download-form-row">
                <input
                  type="tel"
                  className="download-input"
                  placeholder="Enter 10 digit Phone no."
                  maxLength={10}
                  value={phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setPhoneNumber(val);
                    if (statusMessage) setStatusMessage(null);
                  }}
                />
                <button 
                  type="submit" 
                  className="btn btn-green"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Get app link'} <Send size={16} />
                </button>
              </div>

              {/* Captcha mockup */}
              <div className="captcha-mock">
                <input 
                  type="checkbox" 
                  id="robot-check" 
                  checked={isCaptchaChecked}
                  onChange={(e) => setIsCaptchaChecked(e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: '#0c4696', cursor: 'pointer' }}
                />
                <label htmlFor="robot-check" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Shield size={16} color="#58b147" /> I'm not a robot
                </label>
              </div>

              {statusMessage && (
                <div style={{ 
                  marginTop: 10, 
                  padding: '10px 14px', 
                  borderRadius: 6, 
                  backgroundColor: statusMessage.type === 'success' ? '#dcfce7' : '#fee2e2',
                  color: statusMessage.type === 'success' ? '#166534' : '#991b1b',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}>
                  {statusMessage.type === 'success' && <CheckCircle2 size={16} />}
                  {statusMessage.text}
                </div>
              )}
            </form>
          </div>

          <div className="download-phone-img-wrap">
            <img 
              src="https://paynearby.in/wp-content/themes/paynearby/assets/images/download-app.png" 
              alt="Mera Digital Pay Mobile App Screen" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://paynearby.in/wp-content/uploads-efs/2023/07/Group-40387_optimized.png";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
